#!/usr/bin/env python3
import os
import shutil

# Define paths
habitats_path = "/workspace/npc-therapy-game/imgs/character_habitats"
therapy_path = "/workspace/npc-therapy-game/imgs/therapy_office"

def delete_png_files(directory):
    """Delete all PNG files in the directory and its subdirectories"""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.png'):
                file_path = os.path.join(root, file)
                print(f"Deleting: {file_path}")
                os.remove(file_path)

# Delete PNG files from both directories
print("Deleting PNG files from character habitats...")
delete_png_files(habitats_path)

print("\nDeleting PNG files from therapy office...")
delete_png_files(therapy_path)

print("\nDone!")