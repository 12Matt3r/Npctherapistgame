# NPC Therapy Game - Ultimate Combined Edition

**An art/avant-garde exploration of digital consciousness, designed for the Chroma Awards.**

## About The Game

The NPC Therapy Game is an experimental, single-page web application that functions as a therapy simulation. Players take on the role of a therapist whose patients are non-player characters (NPCs) from various video game worlds. Each NPC suffers from a unique form of existential trauma related to their digital existence—from a quest-giver feeling like a vending machine to a soldier trapped in a respawn loop.

Through a series of deep, branching dialogues and interactive tools, the player's goal is to guide these NPCs toward a breakthrough, helping them find meaning, self-worth, and a sense of peace. The game is a meditation on digital identity, empathy, and the hidden emotional lives of the characters we often take for granted in virtual worlds.

## Core Features

This edition of the game combines immersive storytelling with advanced AI-powered features to create a unique and thought-provoking experience:

*   **AI-Powered Conversations:** The game leverages the **Pollinations.AI API** for dynamic text generation and text-to-speech, bringing the NPCs' voices and responses to life.
*   **Enhanced NPC Creator:** Players can expand their therapy practice by creating their own NPCs. This feature includes an AI-powered image generator that creates a unique visual appearance for the new character based on a simple text prompt.
*   **Patient Journal & Code-Based Save System:** Track your progress with an in-game journal that shows the status of every NPC ("Awaiting Session," "In-Progress," "Healed"). The game uses a unique, code-based save/load system. Generate a Base64-encoded string to save your progress and load it back in at any time from the main menu.
*   **Multiple Endings:** The game's narrative conclusion is not static. Your ending is determined by how many patients you successfully heal, reflecting the impact of your therapeutic journey.
*   **The Chroma Award:** As a nod to the game's artistic ambitions, a special "Chroma Award" can be unlocked by playing the game for 15 minutes. This achievement is tracked in your journal and persisted in your save file.
*   **Connection Map:** Visualize the intricate web of relationships and shared traumas between the NPCs with an interactive, canvas-based connection map.

## Purpose & Vision

The NPC Therapy Game was created as an entry for the **Chroma Awards** in the art/avant-garde category. Its primary purpose is not to be a traditional "fun" game, but to be a piece of interactive art that encourages players to think deeply about:

*   **Digital Consciousness:** What does it mean to be "real" in a virtual world? Can a line of code have a soul?
*   **Empathy for the Artificial:** The game challenges players to extend their empathy to non-human entities and consider the "humanity" in the artificial characters they interact with.
*   **The Player's Role:** It explores the often-unseen emotional labor and psychological impact of being the protagonist or "savior" in a game world.

It is designed for players who enjoy narrative experiments, philosophical questions, and unique, introspective experiences that push the boundaries of what a game can be.

## How to Play

The game is a simple, client-side application and can be run locally without any complex setup.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/npc-therapy-game.git
    cd npc-therapy-game
    ```
2.  **Run a local web server:**
    The easiest way is to use Python's built-in HTTP server.
    ```bash
    python -m http.server 8000
    ```
    If you have Node.js installed, you can also use `http-server` or a similar package.
3.  **Open in your browser:**
    Navigate to `http://localhost:8000` in a modern web browser (Chrome, Firefox, Safari, Edge).

## Technical Details

*   **Frontend:** Built with vanilla **HTML, CSS, and JavaScript**.
*   **APIs:** Utilizes the **Pollinations.AI API** for text-to-speech and image generation.
*   **Dependencies:** The core application is dependency-free. Testing and verification scripts use Python and Playwright.

## Credits

This game was made possible by leveraging a variety of powerful AI services and creative assets. Special thanks to the creators and communities behind Google Gemini, ChatGPT, ComfyUI, Glif.app, Pollinations AI, and many more, as detailed in the in-game credits.
