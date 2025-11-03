#!/usr/bin/env python3
"""
Debug script to see what's happening
"""

import os
import re

def debug_folders():
    base_dir = "/workspace/npc-therapy-game"
    imgs_dir = os.path.join(base_dir, "imgs")
    
    print(f"Base dir: {base_dir}")
    print(f"Imgs dir: {imgs_dir}")
    print(f"Base dir exists: {os.path.exists(base_dir)}")
    print(f"Imgs dir exists: {os.path.exists(imgs_dir)}")
    
    if os.path.exists(imgs_dir):
        print(f"Contents of imgs dir: {os.listdir(imgs_dir)}")
    
    # Check therapy_office
    therapy_office = os.path.join(imgs_dir, "therapy_office")
    print(f"\nTherapy office path: {therapy_office}")
    print(f"Therapy office exists: {os.path.exists(therapy_office)}")
    
    if os.path.exists(therapy_office):
        files = os.listdir(therapy_office)
        print(f"Files in therapy_office: {files}")
        print(f"IMG files: {[f for f in files if f.startswith('IMG_') and f.endswith('.png')]}")
    
    # Check character_habitats
    char_habitats = os.path.join(imgs_dir, "character_habitats")
    print(f"\nCharacter habitats path: {char_habitats}")
    print(f"Character habitats exists: {os.path.exists(char_habitats)}")
    
    if os.path.exists(char_habitats):
        files = os.listdir(char_habitats)
        print(f"Files in character_habitats: {files}")
        print(f"IMG files: {[f for f in files if f.startswith('IMG_') and f.endswith('.png')]}")

if __name__ == "__main__":
    debug_folders()