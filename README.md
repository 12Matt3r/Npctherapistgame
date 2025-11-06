# NPC Therapy Game

## Overview

Welcome to the **NPC Therapy Game**, an art/avant-garde game designed for the Chroma Awards. This project is a single-page web application that allows players to engage in therapy sessions with a diverse cast of non-player characters (NPCs) who are grappling with existential crises. The game explores themes of purpose, identity, and consciousness in digitally created worlds.

This game was built using vanilla HTML, CSS, and JavaScript, with AI-powered text and speech generation provided by the Pollinations.AI API.

## Features

*   **Engaging Dialogue:** Interact with 49 unique NPCs, each with their own backstory and philosophical struggles.
*   **Patient Journal:** Track your progress and view the healing status of each NPC in your personal journal.
*   **Code-Based Save/Load System:** Save your progress at any time and resume later using a unique, sharable code. No backend required.
*   **Multiple Endings:** The game's outcome is determined by the percentage of NPCs you have successfully healed, offering different narrative conclusions.
*   **Chroma Award:** A special in-game award is unlocked after 15 minutes of continuous gameplay.
*   **Dynamic NPC Creator:** Generate new NPCs with unique, AI-generated images.
*   **Connection Map:** Visualize the intricate relationships and connections between the game's characters on an interactive map.

## Getting Started

### Prerequisites

*   A modern web browser (Chrome, Firefox, Safari, etc.)
*   Python 3.x

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/npc-therapy-game.git
    cd npc-therapy-game
    ```

2.  **Run the Local Server:**
    This project is designed to be run with a simple local HTTP server.
    ```bash
    python -m http.server 8000
    ```

3.  **Access the Game:**
    Open your web browser and navigate to `http://localhost:8000`.

## How to Play

*   **Start a New Game:** Click the "New Game" button to begin your therapy practice.
*   **Enter the Habitat:** Explore the world and click on an NPC to enter their habitat and learn about their issues.
*   **Therapy Sessions:** Engage with NPCs in dialogue-based therapy. Your goal is to help them resolve their existential crises and achieve a "healed" state.
*   **Use the Journal:** Open the "Patient Journal" to monitor which NPCs you have healed.
*   **Save Your Progress:** Click the "Save Game" button at any time to generate a save code. Copy and store this code to continue your game later.
*   **Load a Game:** From the main menu, click "Load Game" and enter your save code to restore your progress.

## File Structure

*   `index.html`: The main entry point for the application.
*   `npc-data.js`: Contains the data and dialogue for all NPCs.
*   `imgs/`: Directory for all game-related images.
*   `sounds/`: Directory for all game audio files.
*   `package.json`: Project metadata and dependencies.

---

Thank you for playing the NPC Therapy Game! We hope you enjoy this unique exploration of digital consciousness.
