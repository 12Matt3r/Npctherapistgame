#!/usr/bin/env python3
"""
Perfect cleanup script to fix all image organization issues
"""

import os
import shutil

def clean_image_structure():
    """Clean up the image structure perfectly"""
    base_dir = "/workspace/npc-therapy-game"
    imgs_dir = os.path.join(base_dir, "imgs")
    
    print("🧹 Starting perfect cleanup...")
    
    # 1. Remove Session files from root folders (they should only be in organized folders)
    folders_to_clean = ["therapy_office", "character_habitats"]
    
    for folder_name in folders_to_clean:
        folder_path = os.path.join(imgs_dir, folder_name)
        
        if os.path.exists(folder_path):
            print(f"\n📁 Cleaning {folder_name}...")
            
            # Move Session files to a backup location first
            session_files = [f for f in os.listdir(folder_path) if f.startswith('Session_')]
            
            for session_file in session_files:
                session_path = os.path.join(folder_path, session_file)
                backup_path = os.path.join(imgs_dir, "old_session_files", folder_name)
                os.makedirs(backup_path, exist_ok=True)
                shutil.move(session_path, os.path.join(backup_path, session_file))
                print(f"  📦 Moved {session_file} to backup")
    
    # 2. Check for logos in character folders and move them
    for root, dirs, files in os.walk(imgs_dir):
        for file in files:
            if any(logo_term in file.lower() for logo_term in ['logo', 'brand', 'mark']):
                file_path = os.path.join(root, file)
                if 'character_' in root:
                    # This is a logo in a character folder - move it
                    new_path = os.path.join(imgs_dir, "branding", file)
                    os.makedirs(os.path.dirname(new_path), exist_ok=True)
                    shutil.move(file_path, new_path)
                    print(f"  🏷️  Moved logo {file} to branding folder")
    
    # 3. Clean up additional_files that don't belong there
    additional_files_path = os.path.join(imgs_dir, "additional_files")
    if os.path.exists(additional_files_path):
        for file in os.listdir(additional_files_path):
            file_path = os.path.join(additional_files_path, file)
            if file.endswith('.png') and file.startswith('IMG_'):
                # This is an IMG file that should be organized
                print(f"  🔧 Found stray IMG file: {file}")
                # We'll handle this in the next step
    
    # 4. Verify all character folders have correct structure
    character_folders = []
    for root, dirs, files in os.walk(imgs_dir):
        if 'character_' in os.path.basename(root) and not 'character_habitats' in root and not 'therapy_office' in root:
            character_folders.append(root)
    
    print(f"\n✅ Found {len(character_folders)} character folders")
    
    # 5. Final verification - check for any remaining issues
    issues = []
    
    # Check for logos in character folders
    for root, dirs, files in os.walk(imgs_dir):
        for file in files:
            if 'character_' in root:
                if any(logo_term in file.lower() for logo_term in ['logo', 'brand']):
                    issues.append(f"Logo found in character folder: {os.path.join(root, file)}")
    
    # Check for mixed file types in character folders
    for root, dirs, files in os.walk(imgs_dir):
        if 'character_' in root:
            for file in files:
                if not file.startswith('character_') and not file.endswith('.png'):
                    issues.append(f"Wrong file type in {os.path.join(root, file)}")
    
    if issues:
        print(f"\n⚠️  Found {len(issues)} issues:")
        for issue in issues:
            print(f"  - {issue}")
    else:
        print("\n✅ Perfect! No issues found in character folders")
    
    # 6. Generate final report
    print(f"\n📊 Final Structure Report:")
    print(f"  - Character folders: {len(character_folders)}")
    
    # Count files per folder
    total_files = 0
    for folder in character_folders:
        files = [f for f in os.listdir(folder) if f.endswith('.png')]
        total_files += len(files)
    
    print(f"  - Total image files: {total_files}")
    
    # Show structure sample
    print(f"\n📂 Sample structure:")
    sample_folders = character_folders[:3] + character_folders[-3:]
    for folder in sample_folders:
        files = [f for f in os.listdir(folder) if f.endswith('.png')]
        print(f"  {os.path.basename(folder)}/: {len(files)} files")
        for file in files[:2]:  # Show first 2 files
            print(f"    - {file}")
        if len(files) > 2:
            print(f"    - ... and {len(files)-2} more")

if __name__ == "__main__":
    clean_image_structure()