#!/usr/bin/env python3
"""
Sequential Session Numbering Script
Renumbers all images to be sequential from 01 to N (no gaps)
"""

import os
import shutil
from pathlib import Path

def fix_sequential_naming():
    """Main function to fix sequential naming"""
    
    # Paths
    base_path = Path('/workspace/npc-therapy-game')
    imgs_path = base_path / 'imgs'
    
    habitats_path = imgs_path / 'character_habitats'
    therapy_path = imgs_path / 'therapy_office'
    
    # Process habitats folder
    print("=== Fixing Character Habitats Sequential Naming ===")
    
    # Get all existing properly named habitat files
    habitat_files = [f for f in os.listdir(habitats_path) if f.endswith('.png') or f.endswith('.PNG') or f.endswith('.JPG')]
    # Sort to ensure consistent ordering
    habitat_files.sort()
    
    print(f"Found {len(habitat_files)} habitat files to renumber")
    
    # Rename habitat files sequentially
    for i, old_filename in enumerate(habitat_files):
        # Extract character name from old filename to preserve it
        char_name = "Unknown"  # default fallback
        if "_habitat.png" in old_filename or "_habitat.PNG" in old_filename:
            # Remove file extension
            name_without_ext = old_filename.replace("_habitat.png", "").replace("_habitat.PNG", "")
            # Split by underscore and take everything after the first two parts (Session and number)
            parts = name_without_ext.split("_")
            if len(parts) >= 3:
                char_name = "_".join(parts[2:])  # Join everything after Session_XX_
            new_filename = f"Session_{str(i+1).zfill(2)}_{char_name}_habitat.png"
        else:
            new_filename = f"Session_{str(i+1).zfill(2)}_Unknown_habitat.png"
        
        old_path = habitats_path / old_filename
        new_path = habitats_path / new_filename
        
        if old_filename != new_filename:
            print(f"Renaming: {old_filename} -> {new_filename}")
            shutil.move(str(old_path), str(new_path))
        else:
            print(f"Skipping: {old_filename} (already sequential)")
    
    # Process therapy office folder
    print("\n=== Fixing Therapy Office Sequential Naming ===")
    
    # Get all existing properly named therapy files
    therapy_files = [f for f in os.listdir(therapy_path) if f.endswith('.png') or f.endswith('.PNG') or f.endswith('.JPG')]
    # Sort to ensure consistent ordering
    therapy_files.sort()
    
    print(f"Found {len(therapy_files)} therapy files to renumber")
    
    # Rename therapy files sequentially
    for i, old_filename in enumerate(therapy_files):
        # Extract character name from old filename to preserve it
        char_name = "Unknown"  # default fallback
        if "_office.png" in old_filename or "_office.PNG" in old_filename or "_office.JPG" in old_filename:
            # Remove file extension
            name_without_ext = old_filename.replace("_office.png", "").replace("_office.PNG", "").replace("_office.JPG", "")
            # Split by underscore and take everything after the first two parts (Session and number)
            parts = name_without_ext.split("_")
            if len(parts) >= 3:
                char_name = "_".join(parts[2:])  # Join everything after Session_XX_
            new_filename = f"Session_{str(i+1).zfill(2)}_{char_name}_office.png"
        else:
            # Fallback for unusual filenames
            new_filename = f"Session_{str(i+1).zfill(2)}_Unknown_office.png"
        
        old_path = therapy_path / old_filename
        new_path = therapy_path / new_filename
        
        if old_filename != new_filename:
            print(f"Renaming: {old_filename} -> {new_filename}")
            shutil.move(str(old_path), str(new_path))
        else:
            print(f"Skipping: {old_filename} (already sequential)")
    
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
    
    print(f"\n✅ Sequential numbering completed successfully!")
    print(f"All sessions now numbered 01 to {max(len(habitat_files), len(therapy_files))} without gaps!")

if __name__ == "__main__":
    fix_sequential_naming()