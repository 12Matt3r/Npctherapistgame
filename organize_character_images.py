#!/usr/bin/env python3
"""
Script to rename character images from IMG_XXXX.png format to proper character names
Organizes all IMG files into character folders with multiple images per character
"""

import os
import re

def get_character_data():
    """Return character information"""
    characters = [
        (1, "Tired Quest Giver", "Gerald Ironpeak", "quest_giver"),
        (2, "Respawning Soldier", "Captain Marcus Respawn Steel", "soldier"),
        (3, "Heartbroken Rhythm Dancer", "Luna Staccato Moonbeam", "dancer"),
        (4, "Forgotten Platformer Hero", "Jake The Leaper Wildstone", "platformer_hero"),
        (5, "Addicted Power-Up Collector", "Derek Power-Up Nova", "power_collector"),
        (6, "Jaded Final Boss", "Lord Malachar the Eternal", "final_boss"),
        (7, "Depression-Afflicted Princess", "Princess Seraphina Starweaver", "princess"),
        (8, "Burnt-Out Speedrunner", "Tyler Frame-Perfect Flash", "speedrunner"),
        (9, "Existentially Confused Shopkeeper", "Bernard Goldheart", "shopkeeper"),
        (10, "Anxiety-Ridden Puzzle Solver", "Dr Elena Cipher", "puzzle_solver"),
        (11, "Time-Looping Courier", "Marcus 47-B", "courier"),
        (12, "Sentient AI Companion", "ARIA-7", "ai_companion"),
        (13, "Ghost Haunting Save File", "Eleanor Thorne", "save_ghost"),
        (14, "Overworked DnD NPC", "Sir Gareth Quest-Giver", "dnd_npc"),
        (15, "Forgotten Sidekick", "Jesse Sparky Chen", "sidekick"),
        (16, "Anxious Inventory Manager", "Patricia Finch", "inventory_manager"),
        (17, "Spoiled Rich Player", "Baroness Vivienne Ashworth III", "rich_player"),
        (18, "Tutorial Character", "Marcus the Mentor", "tutorial_character"),
        (19, "Burnt-Out Achievement Hunter", "Derek AchievementAddict Chen", "achievement_hunter"),
        (20, "NPC Designed to Be Hated", "Dr Reginald Poppins", "hated_npc"),
        (21, "Character Haunted by Failed Import", "Character 21", "failed_import"),
        (22, "NPC Not Supposed to Have Free Will", "Character 22", "no_free_will"),
        (23, "Ancient Artifact", "Ancient Artifact", "ancient_artifact"),
        (24, "Tutorial Popup", "Tutorial Popup", "tutorial_popup"),
        (25, "Game Dev Avatar", "Game Dev Avatar", "game_dev_avatar"),
        (26, "Dialogue Tree Gone Wild", "Dialogue Tree", "dialogue_tree"),
        (27, "Minor Character Won't Stay Minor", "Minor Character", "minor_character"),
        (28, "Corrupted Save File", "Save File", "corrupted_save"),
        (29, "Beta Tester Trapped", "Beta Tester", "beta_tester"),
        (30, "NPC Pain of Being Deleted", "Deleted NPC", "deleted_npc"),
        (31, "Lost Tetris Block", "Cube The Orphan Omega", "tetris_block"),
        (32, "AI Dating Sim Bot", "ARIA-2000", "dating_bot"),
        (33, "Glitched Priest", "Brother Marcus Corrupted", "glitched_priest"),
        (34, "Dungeon Chest Mimic", "Chesterton Chester Lockheart", "chest_mimic"),
        (35, "Racing Ghost", "Specter Speed Wraithson", "racing_ghost"),
        (36, "MMORPG Healer Burnout", "Seraphina Heals-A-Lot Dawnwhisper", "healer_burnout"),
        (37, "Tower Defense Turret", "Defense Turret", "defense_turret"),
        (38, "Forgotten Save File", "Forgotten Save", "forgotten_save"),
        (39, "Platforming Princess", "Platforming Princess", "platforming_princess"),
        (40, "Idle Clicker Manager", "Clicker Manager", "clicker_manager"),
        (41, "Red Lizard Comedian", "Scales The Comedian Crimson", "red_lizard"),
        (42, "Dog-Faced Musician", "Harmonix The Forgotten Melodies", "dog_musician"),
        (43, "Puzzle Cube", "Cubius The Unsolved Mystery", "puzzle_cube"),
        (44, "Farm Sim Widow", "Farm Widow", "farm_widow"),
        (45, "NoEmotion Goldmask", "Sad Goldmask", "sad_goldmask"),
        (46, "Rogue AI Companion", "ARTHUR-7", "rogue_ai"),
        (47, "Zombie Regained Memory", "Marcus Memory Thornfield", "memory_zombie"),
        (48, "Meta-NPC", "NARRATOR-HELP-7", "meta_npc"),
        (49, "Hackathon Judge", "Dr Patricia Judge Stevens", "hackathon_judge")
    ]
    return characters

def clean_filename(filename):
    """Clean filename for safe filesystem use"""
    cleaned = re.sub(r'[^a-zA-Z0-9_\-.]', '_', filename)
    cleaned = re.sub(r'_+', '_', cleaned)
    return cleaned.strip('_')

def organize_images():
    """Organize images into character folders"""
    base_dir = "/workspace/npc-therapy-game"
    imgs_dir = os.path.join(base_dir, "imgs")
    
    characters = get_character_data()
    print(f"🎮 Organizing {len(characters)} characters...")
    
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
        
        # Group files by character (multiple images per character)
        files_per_character = len(img_files) // len(characters)
        if len(img_files) % len(characters) != 0:
            files_per_character += 1
            
        print(f"📊 Approximately {files_per_character} images per character")
        
        file_index = 0
        for char_num, char_name, short_name, theme in characters:
            # Create character folder
            char_folder = f"character_{char_num:02d}"
            char_folder_path = os.path.join(folder_path, char_folder)
            os.makedirs(char_folder_path, exist_ok=True)
            
            # Get files for this character
            char_files = []
            for i in range(files_per_character):
                if file_index < len(img_files):
                    char_files.append(img_files[file_index])
                    file_index += 1
            
            if not char_files:
                continue
                
            # Rename files for this character
            for i, img_file in enumerate(char_files):
                old_path = os.path.join(folder_path, img_file)
                
                # Create new filename
                if len(char_files) == 1:
                    version = ""
                else:
                    version = f"_v{i+1}"
                    
                new_filename = f"{char_folder}_{theme}_{context}{version}.png"
                new_filename = clean_filename(new_filename)
                new_path = os.path.join(char_folder_path, new_filename)
                
                try:
                    # Check if target file already exists
                    if os.path.exists(new_path):
                        # Add counter to avoid conflicts
                        counter = 1
                        while os.path.exists(new_path):
                            base_name = f"{char_folder}_{theme}_{context}{version}_{counter}.png"
                            new_path = os.path.join(char_folder_path, base_name)
                            counter += 1
                    
                    # Move file
                    os.rename(old_path, new_path)
                    print(f"✅ {char_folder}: {img_file} → {new_filename}")
                    
                except Exception as e:
                    print(f"❌ Error renaming {img_file}: {e}")
        
        # Remove old folder if empty
        try:
            remaining_files = [f for f in os.listdir(folder_path) if not f.startswith('.')]
            if not remaining_files:
                print(f"🗑️  Removing empty folder: {folder_name}")
        except:
            pass
    
    print(f"\n🎉 Successfully organized all {len(characters)} characters!")
    print(f"📊 Total characters: {len(characters)}")
    
    # Summary of new structure
    print(f"\n📂 New folder structure created:")
    for folder_name, context in folders_to_process:
        folder_path = os.path.join(imgs_dir, folder_name)
        char_folders = [d for d in os.listdir(folder_path) if d.startswith('character_')]
        print(f"  {folder_name}/: {len(char_folders)} character folders")

if __name__ == "__main__":
    organize_images()