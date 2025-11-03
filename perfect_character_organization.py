#!/usr/bin/env python3
"""
Perfect Character Organization Script
- Creates all missing character folders (31-49)
- Organizes any loose images
- Ensures perfect folder structure
- Moves logos to logo folder
"""

import os
import shutil
from pathlib import Path

# Base directories
BASE_DIR = Path("/workspace/npc-therapy-game/imgs")
CHARACTER_HABITATS = BASE_DIR / "character_habitats"
THERAPY_OFFICE = BASE_DIR / "therapy_office"
LOGOS = BASE_DIR / "logos"
ADDITIONAL_FILES = BASE_DIR / "additional_files"

# Character themes mapping (from CHARACTER_INDEX.md)
CHARACTER_THEMES = {
    1: "quest_giver", 2: "respawning_soldier", 3: "rhythm_dancer", 4: "platformer_hero", 
    5: "power_up_collector", 6: "final_boss", 7: "depressed_princess", 8: "speedrunner", 
    9: "shopkeeper", 10: "puzzle_solver", 11: "time_looping_courier", 12: "ai_companion", 
    13: "ghost_save_file", 14: "overworked_npc", 15: "forgotten_sidekick", 16: "inventory_manager", 
    17: "rich_player", 18: "tutorial_character", 19: "achievement_hunter", 20: "hated_npc", 
    21: "failed_import", 22: "no_free_will", 23: "ancient_artifact", 24: "tutorial_popup", 
    25: "game_dev_avatar", 26: "dialogue_tree", 27: "minor_character", 28: "corrupted_save", 
    29: "beta_tester", 30: "deleted_npc", 31: "tetris_block", 32: "dating_sim_bot", 
    33: "glitched_priest", 34: "chest_mimic", 35: "racing_ghost", 36: "mmo_healer", 
    37: "tower_turret", 38: "forgotten_save", 39: "platforming_princess", 40: "idle_clicker", 
    41: "red_lizard", 42: "dog_musician", 43: "puzzle_cube", 44: "farm_widow", 
    45: "goldmask", 46: "rogue_ai", 47: "zombie_memory", 48: "meta_npc", 49: "hackathon_judge"
}

def create_all_character_folders():
    """Create all character folders if they don't exist"""
    print("Creating missing character folders...")
    
    for char_num in range(1, 50):  # Characters 1-49
        habitat_folder = CHARACTER_HABITATS / f"character_{char_num:02d}"
        office_folder = THERAPY_OFFICE / f"character_{char_num:02d}"
        
        # Create folders if they don't exist
        if not habitat_folder.exists():
            habitat_folder.mkdir(parents=True, exist_ok=True)
            print(f"  Created: {habitat_folder}")
        
        if not office_folder.exists():
            office_folder.mkdir(parents=True, exist_ok=True)
            print(f"  Created: {office_folder}")

def organize_loose_images():
    """Organize any loose images in additional_files or main imgs directory"""
    print("\nOrganizing loose images...")
    
    loose_files = []
    
    # Check additional_files directory
    if ADDITIONAL_FILES.exists():
        for file_path in ADDITIONAL_FILES.glob("*"):
            if file_path.is_file():
                loose_files.append(file_path)
    
    # Check main imgs directory for PNG files
    for file_path in BASE_DIR.glob("*.png"):
        loose_files.append(file_path)
    
    for file_path in loose_files:
        print(f"  Found loose file: {file_path.name}")
        
        # Handle specific files
        if "IMG_" in file_path.name:
            # Assign to next available character
            next_char = get_next_available_character()
            if next_char:
                organize_to_character_folder(file_path, next_char)
        
        elif "logo" in file_path.name.lower() or file_path.name.startswith("Glif"):
            # Move to logos folder
            dest = LOGOS / file_path.name
            shutil.move(str(file_path), str(dest))
            print(f"    Moved to logos: {dest}")
        
        elif "therapy_office" in file_path.name:
            # Assign to character for therapy context
            next_char = get_next_available_character()
            if next_char:
                organize_to_character_folder(file_path, next_char)

def get_next_available_character():
    """Find the next character number that doesn't have images yet"""
    for char_num in range(1, 50):
        habitat_folder = CHARACTER_HABITATS / f"character_{char_num:02d}"
        office_folder = THERAPY_OFFICE / f"character_{char_num:02d}"
        
        # Check if both folders are empty
        habitat_images = list(habitat_folder.glob("*.png")) if habitat_folder.exists() else []
        office_images = list(office_folder.glob("*.png")) if office_folder.exists() else []
        
        if len(habitat_images) == 0 and len(office_images) == 0:
            return char_num
    
    return None

def organize_to_character_folder(file_path, char_num):
    """Organize a file into the appropriate character folder"""
    theme = CHARACTER_THEMES.get(char_num, "unknown")
    filename = file_path.name
    
    # Determine context and version based on filename patterns
    if "office" in filename.lower() or "therapy" in filename.lower():
        context = "office"
    else:
        context = "habitat"
    
    # Determine version number
    if "_v1." in filename:
        version = "v1"
    elif "_v2." in filename:
        version = "v2"
    else:
        version = "v1"  # Default to v1
    
    # Create proper filename
    new_filename = f"character_{char_num:02d}_{theme}_{context}_{version}.png"
    
    # Move file to appropriate folder
    if context == "office":
        dest_folder = THERAPY_OFFICE / f"character_{char_num:02d}"
    else:
        dest_folder = CHARACTER_HABITATS / f"character_{char_num:02d}"
    
    dest_path = dest_folder / new_filename
    shutil.move(str(file_path), str(dest_path))
    print(f"    Organized: {file_path.name} -> {new_filename}")

def verify_perfect_organization():
    """Verify that we have exactly 49 characters with proper structure"""
    print("\n=== VERIFICATION REPORT ===")
    
    # Count folders in each directory
    habitat_folders = [f for f in CHARACTER_HABITATS.iterdir() if f.is_dir() and f.name.startswith("character_")]
    office_folders = [f for f in THERAPY_OFFICE.iterdir() if f.is_dir() and f.name.startswith("character_")]
    
    print(f"Character folders in habitats: {len(habitat_folders)}")
    print(f"Character folders in therapy_office: {len(office_folders)}")
    
    # Check each character's folders
    missing_habitats = []
    missing_offices = []
    empty_habitats = []
    empty_offices = []
    
    for char_num in range(1, 50):
        habitat_folder = CHARACTER_HABITATS / f"character_{char_num:02d}"
        office_folder = THERAPY_OFFICE / f"character_{char_num:02d}"
        
        # Check if folders exist
        if not habitat_folder.exists():
            missing_habitats.append(char_num)
        
        if not office_folder.exists():
            missing_offices.append(char_num)
        
        # Check if folders are empty
        if habitat_folder.exists():
            habitat_images = list(habitat_folder.glob("*.png"))
            if len(habitat_images) == 0:
                empty_habitats.append(char_num)
        
        if office_folder.exists():
            office_images = list(office_folder.glob("*.png"))
            if len(office_images) == 0:
                empty_offices.append(char_num)
    
    # Report issues
    if missing_habitats:
        print(f"\nMissing habitat folders for characters: {missing_habitats}")
    
    if missing_offices:
        print(f"\nMissing office folders for characters: {missing_offices}")
    
    if empty_habitats:
        print(f"\nEmpty habitat folders for characters: {empty_habitats}")
    
    if empty_offices:
        print(f"\nEmpty office folders for characters: {empty_offices}")
    
    # Check logos
    logo_files = list(LOGOS.glob("*"))
    print(f"\nLogo files in logos folder: {len(logo_files)}")
    for logo_file in logo_files:
        print(f"  - {logo_file.name}")
    
    # Check for any remaining loose files
    loose_files = []
    for file_path in BASE_DIR.glob("*.png"):
        loose_files.append(file_path.name)
    
    if loose_files:
        print(f"\nRemaining loose image files: {loose_files}")
    
    print("\n=== ORGANIZATION COMPLETE ===")

def main():
    """Main execution function"""
    print("🎮 NPC Therapy Game - Perfect Character Organization")
    print("=" * 60)
    
    # Ensure all directories exist
    BASE_DIR.mkdir(exist_ok=True)
    CHARACTER_HABITATS.mkdir(exist_ok=True)
    THERAPY_OFFICE.mkdir(exist_ok=True)
    LOGOS.mkdir(exist_ok=True)
    ADDITIONAL_FILES.mkdir(exist_ok=True)
    
    # Step 1: Create all missing character folders
    create_all_character_folders()
    
    # Step 2: Organize any loose images
    organize_loose_images()
    
    # Step 3: Verify perfect organization
    verify_perfect_organization()

if __name__ == "__main__":
    main()