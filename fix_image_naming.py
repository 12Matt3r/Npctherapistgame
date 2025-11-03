#!/usr/bin/env python3
"""
Fix NPC Image Naming Script
Renames improperly named images to match the template pattern:
Session_XX_[Character_Name]_[habitat/office].png
"""

import os
import shutil
from pathlib import Path

def read_npc_list(npc_list_path):
    """Read the NPC list and extract character information"""
    characters = []
    
    with open(npc_list_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    for line in lines[3:]:  # Skip header lines
        line = line.strip()
        if line.startswith('Session'):
            # Extract session number and character name
            parts = line.split(' - ')
            if len(parts) >= 2:
                session_part = parts[0]
                character_part = parts[1]
                
                # Extract session number
                session_num = session_part.split(' ')[1]  # "Session X"
                
                # Clean character name - remove text in parentheses and genre info
                char_name = character_part.split(' (')[0]  # Remove genre info in parentheses
                
                characters.append({
                    'session': session_num.zfill(2),  # Zero-pad to 2 digits
                    'name': char_name.replace(' ', '_'),
                    'original': character_part
                })
    
    return characters

def create_filename_template(character, file_type):
    """Create the filename template for a character"""
    session = character['session']
    name = character['name']
    return f"Session_{session}_{name}_{file_type}.png"

def fix_image_naming():
    """Main function to fix image naming"""
    
    # Paths
    base_path = Path('/workspace/npc-therapy-game')
    imgs_path = base_path / 'imgs'
    npc_list_path = imgs_path / 'npc_list_1_47.txt'
    
    habitats_path = imgs_path / 'character_habitats'
    therapy_path = imgs_path / 'therapy_office'
    
    # Read character list
    print("Reading NPC list...")
    characters = read_npc_list(npc_list_path)
    print(f"Found {len(characters)} characters in the list")
    
    # Process habitats folder
    print("\n=== Processing Character Habitats ===")
    habitat_files = [f for f in os.listdir(habitats_path) if f.startswith('IMG_')]
    print(f"Found {len(habitat_files)} improperly named habitat files")
    
    # Sort habitat files to ensure consistent ordering
    habitat_files.sort()
    
    # Rename habitat files
    for i, old_filename in enumerate(habitat_files):
        if i < len(characters):
            character = characters[i]
            new_filename = create_filename_template(character, 'habitat')
            
            old_path = habitats_path / old_filename
            new_path = habitats_path / new_filename
            
            print(f"Renaming: {old_filename} -> {new_filename}")
            shutil.move(str(old_path), str(new_path))
        else:
            print(f"Warning: More habitat files than characters ({i+1}/{len(characters)})")
    
    # Process therapy office folder
    print("\n=== Processing Therapy Office ===")
    therapy_files = [f for f in os.listdir(therapy_path) if f.startswith('IMG_')]
    print(f"Found {len(therapy_files)} improperly named therapy files")
    
    # Sort therapy files to ensure consistent ordering
    therapy_files.sort()
    
    # Rename therapy files
    for i, old_filename in enumerate(therapy_files):
        if i < len(characters):
            character = characters[i]
            new_filename = create_filename_template(character, 'office')
            
            old_path = therapy_path / old_filename
            new_path = therapy_path / new_filename
            
            print(f"Renaming: {old_filename} -> {new_filename}")
            shutil.move(str(old_path), str(new_path))
        else:
            print(f"Warning: More therapy files than characters ({i+1}/{len(characters)})")
    
    # Verify results
    print("\n=== Verification ===")
    
    habitat_files_final = [f for f in os.listdir(habitats_path) if f.endswith('.png') or f.endswith('.PNG') or f.endswith('.JPG')]
    therapy_files_final = [f for f in os.listdir(therapy_path) if f.endswith('.png') or f.endswith('.PNG') or f.endswith('.JPG')]
    
    print(f"Final count - Habitats: {len(habitat_files_final)}")
    print(f"Final count - Therapy Office: {len(therapy_files_final)}")
    
    # Show sample of renamed files
    print("\n=== Sample Renamed Files ===")
    print("Habitats (first 5):")
    for f in sorted(habitat_files_final)[:5]:
        print(f"  {f}")
    
    print("\nTherapy Office (first 5):")
    for f in sorted(therapy_files_final)[:5]:
        print(f"  {f}")
    
    print(f"\n✅ Image renaming completed successfully!")
    print(f"Total images renamed: {len(habitat_files) + len(therapy_files)}")

if __name__ == "__main__":
    fix_image_naming()