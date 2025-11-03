#!/usr/bin/env python3
"""
Simple test to see if Python can access files
"""

import os
import sys

print("Python script is running!", file=sys.stderr)
print("Current working directory:", os.getcwd(), file=sys.stderr)

base_dir = "/workspace/npc-therapy-game"
print(f"Checking: {base_dir}", file=sys.stderr)
print(f"Exists: {os.path.exists(base_dir)}", file=sys.stderr)

if os.path.exists(base_dir):
    print(f"Contents: {os.listdir(base_dir)}", file=sys.stderr)
    
    imgs_dir = os.path.join(base_dir, "imgs")
    print(f"Imgs dir: {imgs_dir}", file=sys.stderr)
    print(f"Imgs exists: {os.path.exists(imgs_dir)}", file=sys.stderr)
    
    if os.path.exists(imgs_dir):
        try:
            therapy_office = os.path.join(imgs_dir, "therapy_office")
            print(f"Therapy office: {therapy_office}", file=sys.stderr)
            print(f"Therapy office exists: {os.path.exists(therapy_office)}", file=sys.stderr)
            
            if os.path.exists(therapy_office):
                files = os.listdir(therapy_office)
                print(f"Files: {len(files)} files found", file=sys.stderr)
                img_files = [f for f in files if f.startswith('IMG_') and f.endswith('.png')]
                print(f"IMG files: {len(img_files)} IMG files found", file=sys.stderr)
                print(f"First few: {img_files[:5]}", file=sys.stderr)
                
        except Exception as e:
            print(f"Error: {e}", file=sys.stderr)

print("Script completed!", file=sys.stderr)