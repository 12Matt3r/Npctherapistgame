#!/usr/bin/env python3
"""
Script to rename character images from IMG_XXXX.png format to proper character names
"""

import os
import re
import json

def get_character_mapping():
    """Create mapping from character numbers to names and descriptions"""
    characters = {}
    
    # Character data based on CHARACTER_INDEX.md
    character_data = {
        1: {"name": "Tired Quest Giver", "short": "Gerald Ironpeak", "theme": "quest_giver"},
        2: {"name": "Respawning Soldier", "short": "Captain Marcus Respawn Steel", "theme": "soldier"},
        3: {"name": "Heartbroken Rhythm Dancer", "short": "Luna Staccato Moonbeam", "theme": "dancer"},
        4: {"name": "Forgotten Platformer Hero", "short": "Jake The Leaper Wildstone", "theme": "platformer_hero"},
        5: {"name": "Addicted Power-Up Collector", "short": "Derek Power-Up Nova", "theme": "power_collector"},
        6: {"name": "Jaded Final Boss", "short": "Lord Malachar the Eternal", "theme": "final_boss"},
        7: {"name": "Depression-Afflicted Princess", "short": "Princess Seraphina Starweaver", "theme": "princess"},
        8: {"name": "Burnt-Out Speedrunner", "short": "Tyler Frame-Perfect Flash", "theme": "speedrunner"},
        9: {"name": "Existentially Confused Shopkeeper", "short": "Bernard Goldheart", "theme": "shopkeeper"},
        10: {"name": "Anxiety-Ridden Puzzle Solver", "short": "Dr Elena Cipher", "theme": "puzzle_solver"},
        11: {"name": "Time-Looping Courier", "short": "Marcus 47-B", "theme": "courier"},
        12: {"name": "Sentient AI Companion", "short": "ARIA-7", "theme": "ai_companion"},
        13: {"name": "Ghost Haunting Save File", "short": "Eleanor Thorne", "theme": "save_ghost"},
        14: {"name": "Overworked DnD NPC", "short": "Sir Gareth Quest-Giver", "theme": "dnd_npc"},
        15: {"name": "Forgotten Sidekick", "short": "Jesse Sparky Chen", "theme": "sidekick"},
        16: {"name": "Anxious Inventory Manager", "short": "Patricia Finch", "theme": "inventory_manager"},
        17: {"name": "Spoiled Rich Player", "short": "Baroness Vivienne Ashworth III", "theme": "rich_player"},
        18: {"name": "Tutorial Character", "short": "Marcus the Mentor", "theme": "tutorial_character"},
        19: {"name": "Burnt-Out Achievement Hunter", "short": "Derek AchievementAddict Chen", "theme": "achievement_hunter"},
        20: {"name": "NPC Designed to Be Hated", "short": "Dr Reginald Poppins", "theme": "hated_npc"},
        21: {"name": "Character Haunted by Failed Import", "short": "Character 21", "theme": "failed_import"},
        22: {"name": "NPC Not Supposed to Have Free Will", "short": "Character 22", "theme": "no_free_will"},
        23: {"name": "Ancient Artifact", "short": "Ancient Artifact", "theme": "ancient_artifact"},
        24: {"name": "Tutorial Popup", "short": "Tutorial Popup", "theme": "tutorial_popup"},
        25: {"name": "Game Dev Avatar", "short": "Game Dev Avatar", "theme": "game_dev_avatar"},
        26: {"name": "Dialogue Tree Gone Wild", "short": "Dialogue Tree", "theme": "dialogue_tree"},
        27: {"name": "Minor Character Won't Stay Minor", "short": "Minor Character", "theme": "minor_character"},
        28: {"name": "Corrupted Save File", "short": "Save File", "theme": "corrupted_save"},
        29: {"name": "Beta Tester Trapped", "short": "Beta Tester", "theme": "beta_tester"},
        30: {"name": "NPC Pain of Being Deleted", "short": "Deleted NPC", "theme": "deleted_npc"},
        31: {"name": "Lost Tetris Block", "short": "Cube The Orphan Omega", "theme": "tetris_block"},
        32: {"name": "AI Dating Sim Bot", "short": "ARIA-2000", "theme": "dating_bot"},
        33: {"name": "Glitched Priest", "short": "Brother Marcus Corrupted", "theme": "glitched_priest"},
        34: {"name": "Dungeon Chest Mimic", "short": "Chesterton Chester Lockheart", "theme": "chest_mimic"},
        35: {"name": "Racing Ghost", "short": "Specter Speed Wraithson", "theme": "racing_ghost"},
        36: {"name": "MMORPG Healer Burnout", "short": "Seraphina Heals-A-Lot Dawnwhisper", "theme": "healer_burnout"},
        37: {"name": "Tower Defense Turret", "short": "Defense Turret", "theme": "defense_turret"},
        38: {"name": "Forgotten Save File", "short": "Forgotten Save", "theme": "forgotten_save"},
        39: {"name": "Platforming Princess", "short": "Platforming Princess", "theme": "platforming_princess"},
        40: {"name": "Idle Clicker Manager", "short": "Clicker Manager", "theme": "clicker_manager"},
        41: {"name": "Red Lizard Comedian", "short": "Scales The Comedian Crimson", "theme": "red_lizard"},
        42: {"name": "Dog-Faced Musician", "short": "Harmonix The Forgotten Melodies", "theme": "dog_musician"},
        43: {"name": "Puzzle Cube", "short": "Cubius The Unsolved Mystery", "theme": "puzzle_cube"},
        44: {"name": "Farm Sim Widow", "short": "Farm Widow", "theme": "farm_widow"},
        45: {"name": "NoEmotion Goldmask", "short": "Sad Goldmask", "theme": "sad_goldmask"},
        46: {"name": "Rogue AI Companion", "short": "ARTHUR-7", "theme": "rogue_ai"},
        47: {"name": "Zombie Regained Memory", "short": "Marcus Memory Thornfield", "theme": "memory_zombie"},
        48: {"name": "Meta-NPC", "short": "NARRATOR-HELP-7", "theme": "meta_npc"},
        49: {"name": "Hackathon Judge", "short": "Dr Patricia Judge Stevens", "theme": "hackathon_judge"}
    }
    
    for char_num, data in character_data.items():
        characters[char_num] = {
            "name": data["name"],
            "short_name": data["short"],
            "theme": data["theme"],
            "folder": f"character_{char_num:02d}"
        }
    
    return characters

def clean_filename(filename):
    """Clean filename for safe filesystem use"""
    # Remove special characters and replace with underscores
    cleaned = re.sub(r'[^a-zA-Z0-9_\-.]', '_', filename)
    # Remove multiple underscores
    cleaned = re.sub(r'_+', '_', cleaned)
    # Remove leading/trailing underscores
    cleaned = cleaned.strip('_')
    return cleaned

def rename_images():
    """Main function to rename images"""
    base_dir = "/workspace/npc-therapy-game"
    imgs_dir = os.path.join(base_dir, "imgs")
    
    # Get character mapping
    characters = get_character_mapping()
    
    # Process both folders
    folders_to_process = [
        ("therapy_office", "office"),
        ("character_habitats", "habitat")
    ]
    
    for folder_name, context in folders_to_process:
        folder_path = os.path.join(imgs_dir, folder_name)
        
        if not os.path.exists(folder_path):
            print(f"⚠️  Folder not found: {folder_path}")
            continue
            
        # Get all IMG files
        img_files = [f for f in os.listdir(folder_path) if f.startswith('IMG_') and f.endswith('.png')]
        
        if not img_files:
            print(f"⚠️  No IMG files found in {folder_path}")
            continue
            
        print(f"\n📁 Processing {len(img_files)} files in {folder_name}/")
        
        # Sort files by number
        img_files.sort(key=lambda x: int(re.search(r'IMG_(\d+)\.png', x).group(1)))
        
        # Create folder structure and rename files
        for i, img_file in enumerate(img_files):
            if i + 1 > len(characters):
                print(f"⚠️  More files than characters ({i+1} > {len(characters)})")
                break
                
            char_num = i + 1
            char_info = characters[char_num]
            
            old_path = os.path.join(folder_path, img_file)
            
            # Create character folder
            char_folder = os.path.join(folder_path, char_info["folder"])
            os.makedirs(char_folder, exist_ok=True)
            
            # Create new filename
            new_filename = f"{char_info['folder']}_{char_info['theme']}_{context}.png"
            new_filename = clean_filename(new_filename)
            new_path = os.path.join(char_folder, new_filename)
            
            try:
                # Check if target file already exists
                if os.path.exists(new_path):
                    # Add timestamp to avoid conflicts
                    import time
                    timestamp = int(time.time())
                    new_filename = f"{char_info['folder']}_{char_info['theme']}_{context}_{timestamp}.png"
                    new_path = os.path.join(char_folder, new_filename)
                
                # Move file
                os.rename(old_path, new_path)
                print(f"✅ Renamed: {img_file} → {char_info['folder']}/")
                
            except Exception as e:
                print(f"❌ Error renaming {img_file}: {e}")
    
    print(f"\n🎉 Successfully organized all {len(characters)} characters!")
    print(f"📊 Total characters: {len(characters)}")

if __name__ == "__main__":
    rename_images()