#!/usr/bin/env python3
"""
Final Verification and Organization Script
- Organizes any remaining loose images
- Ensures proper folder structure
- Provides final count
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

def organize_loose_files():
    """Organize any loose files and ensure proper structure"""
    print("🔍 Checking for loose files and organizing...")
    
    # Move IMG_8962 to additional_files (it might be the hackathon judge or another character)
    img_file = ADDITIONAL_FILES / "IMG_8962.png"
    if img_file.exists():
        print(f"  Found: {img_file.name}")
        # For now, keep it in additional_files since we need to determine where it belongs
        # It might be character 31 or 32 (hackathon judge or meta-npc)
    
    # Move Glif logo to logos folder if not already there
    glif_logo = ADDITIONAL_FILES / "Glif_App_Official_Logo_White_on_Black.png"
    if glif_logo.exists():
        target_logo = LOGOS / glif_logo.name
        if not target_logo.exists():
            shutil.move(str(glif_logo), str(target_logo))
            print(f"  Moved logo: {glif_logo.name} -> logos/")

def count_and_verify():
    """Count characters and verify structure"""
    print("\n📊 FINAL VERIFICATION REPORT")
    print("=" * 50)
    
    # Count character folders
    habitat_folders = [f for f in CHARACTER_HABITATS.iterdir() if f.is_dir() and f.name.startswith("character_")]
    office_folders = [f for f in THERAPY_OFFICE.iterdir() if f.is_dir() and f.name.startswith("character_")]
    
    print(f"Character folders in habitats: {len(habitat_folders)}")
    print(f"Character folders in therapy_office: {len(office_folders)}")
    
    # Count images per character
    characters_with_full_sets = []
    characters_with_partial_sets = []
    empty_folders = []
    
    for char_num in range(1, 31):  # Check characters 1-30
        habitat_folder = CHARACTER_HABITATS / f"character_{char_num:02d}"
        office_folder = THERAPY_OFFICE / f"character_{char_num:02d}"
        
        # Count images
        habitat_images = list(habitat_folder.glob("*.png")) if habitat_folder.exists() else []
        office_images = list(office_folder.glob("*.png")) if office_folder.exists() else []
        
        total_images = len(habitat_images) + len(office_images)
        
        if total_images == 0:
            empty_folders.append(char_num)
        elif len(habitat_images) > 0 and len(office_images) > 0:
            characters_with_full_sets.append(char_num)
        elif len(office_images) > 0:
            characters_with_partial_sets.append(char_num)
    
    print(f"\n📁 CHARACTER BREAKDOWN:")
    print(f"  Characters with FULL sets (habitat + office): {len(characters_with_full_sets)}")
    print(f"    Range: {min(characters_with_full_sets) if characters_with_full_sets else 'N/A'} - {max(characters_with_full_sets) if characters_with_full_sets else 'N/A'}")
    
    print(f"  Characters with PARTIAL sets (office only): {len(characters_with_partial_sets)}")
    if characters_with_partial_sets:
        print(f"    Range: {min(characters_with_partial_sets)} - {max(characters_with_partial_sets)}")
    
    if empty_folders:
        print(f"  Empty folders: {empty_folders}")
    
    # Check logos
    logo_files = list(LOGOS.glob("*"))
    print(f"\n🎨 LOGOS:")
    print(f"  Logo files: {len(logo_files)}")
    for logo_file in logo_files:
        print(f"    - {logo_file.name}")
    
    # Check additional files
    additional_files = list(ADDITIONAL_FILES.glob("*"))
    print(f"\n📦 ADDITIONAL FILES:")
    print(f"  Files: {len(additional_files)}")
    for file in additional_files:
        print(f"    - {file.name}")
    
    # Total characters calculation
    total_characters = len(characters_with_full_sets) + len(characters_with_partial_sets)
    print(f"\n🎯 SUMMARY:")
    print(f"  Total characters with images: {total_characters}")
    print(f"  Total character folders created: {max([int(f.name.split('_')[1]) for f in habitat_folders + office_folders])}")
    
    return total_characters

def main():
    """Main execution"""
    print("🎮 NPC THERAPY GAME - FINAL ORGANIZATION CHECK")
    print("=" * 60)
    
    # Organize any loose files
    organize_loose_files()
    
    # Count and verify
    total_chars = count_and_verify()
    
    print(f"\n✅ ORGANIZATION COMPLETE!")
    print(f"   Ready for {total_chars} characters")
    
    if total_chars < 32:
        print(f"\n📝 NOTE: You mentioned 32 characters expected.")
        print(f"   Currently have {total_chars}. The additional files may contain")
        print(f"   the remaining character images that need to be organized.")

if __name__ == "__main__":
    main()