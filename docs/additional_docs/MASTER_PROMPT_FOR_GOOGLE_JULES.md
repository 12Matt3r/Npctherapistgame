# MASTER PROMPT FOR GOOGLE JULES: NPC THERAPY GAME
## Complete Project Analysis, Debugging & Enhancement Guide

---

## 🎯 PROJECT OVERVIEW

**Project Name:** NPC Therapy Game  
**Current Status:** Fully functional, deployed, ready for debugging/enhancement  
**Live Demo:** https://9s44g9euil2e.space.minimax.io  
**Main File:** `npc_therapy_complete.html` (235KB)  
**Repository:** Prepared at `/workspace/npc-therapy-game/`

### 🎮 CORE CONCEPT
An interactive therapy simulation where players act as therapists helping 47 unique NPCs (Non-Player Characters) work through existential crises, digital consciousness issues, and meta-narrative struggles. NPCs are aware they exist in a game world and grapple with questions of purpose, reality, and meaning.

---

## 🏗 TECHNICAL ARCHITECTURE

### **Single-File Structure**
- **Frontend:** HTML5 + CSS3 + Vanilla JavaScript (no frameworks)
- **AI Integration:** Pollinations.AI API for conversations and text-to-speech
- **Music System:** YouTube IFrame API with playlist integration
- **Styling:** Pixel art aesthetic with CRT effects and retro gaming visuals
- **Responsive:** Works on desktop and mobile devices

### **Key APIs & Services**
1. **Pollinations AI** (https://pollinations.ai/)
   - Text generation: `https://text.pollinations.ai/`
   - Text-to-speech: `https://text.pollinations.ai/` (openai-audio model)
   - Image generation: `https://image.pollinations.ai/`
2. **YouTube IFrame API** - Playlist: `PLPug0RGgea9rPoVpu8ytw7dRHLZb4RNZc`
3. **No authentication required** - All APIs are public endpoints

---

## 🎨 VISUAL DESIGN SYSTEM

### **Color Palette**
- Primary: Cyan (#6ff) for UI elements, text highlights
- Background: Dark gradients (#101820 to #1a1a2e)
- Text: White (#fff) and light gray (#ccc)
- Accents: Gold (#ff6) for special elements
- Error/Alert: Red variations

### **Typography**
- **Primary Font:** 'Press Start 2P' (retro pixel font)
- **Font Sizes:** 8px-16px (maintaining pixel art aesthetic)
- **Text Effects:** Glow, shadows, hover animations

### **Visual Effects**
- **CRT Filter:** Scanlines and screen curvature
- **Glitch Effects:** Digital distortion on interactions
- **Hover Animations:** Scale, glow, color transitions
- **Layered Backgrounds:** Multiple image overlays with opacity

---

## 🎯 CORE FEATURES BREAKDOWN

### **1. THERAPY SIMULATION ENGINE**
```javascript
// Core emotional tracking system
let emotionalState = {
    hope: 50,     // Ranges 0-100
    rage: 50,     // Ranges 0-100  
    acceptance: 50 // Ranges 0-100
};

// Question effects modify these values
effects: { hope: 30, acceptance: 35, rage: -10 }
```

**Therapeutic Question System:**
- 5 questions per NPC with different emotional impacts
- Dynamic responses based on emotional state changes
- Progressive difficulty and complexity
- Fourth wall breaks and meta-commentary

### **2. NPC CHARACTER SYSTEM**
**47 Unique NPCs with:**
- **Sprite:** Visual representation (mostly default with some custom)
- **Habitat:** Unique environment (therapy office, space station, underwater, etc.)
- **Archetype:** Character type (Space Merchant, Underwater Preacher, etc.)
- **Dialogue:** Opening monologue revealing core issues
- **Personal Trauma:** Backstory and psychological wounds
- **Existential Reveal:** Deep philosophical crisis
- **Questions Array:** 5 therapeutic prompts with emotional effects
- **Responses Array:** 5 possible healing responses
- **Final Item:** Symbolic healing artifact
- **Fourth Wall Awareness:** 0-100 scale of game awareness
- **Cross References:** Connections to other NPCs

### **3. AI-POWERED CONVERSATION**
```javascript
// Pollinations AI integration for dynamic responses
async function generateAIResponse(npcContext, userInput) {
    const response = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            messages: [
                {role: "system", content: npcSystemPrompt},
                {role: "user", content: userInput}
            ],
            model: "openai"
        })
    });
}
```

### **4. TEXT-TO-SPEECH SYSTEM**
```javascript
// TTS using Pollinations AI
async function speakText(text) {
    const audioUrl = `https://text.pollinations.ai/${encodeURIComponent(text)}?voice=openai-audio`;
    const audio = new Audio(audioUrl);
    audio.play();
}
```

### **5. MUSIC PLAYER SYSTEM**
**Features:**
- YouTube playlist integration with shuffle
- Volume controls (0-100)
- Skip/previous/play/pause controls
- Persistent settings via localStorage
- Floating UI with minimize functionality
- Playlist: "sofa king sad boi" compositions

**Implementation:**
```javascript
// YouTube IFrame API integration
var player = new YT.Player('youtubePlayer', {
    playerVars: {
        listType: 'playlist',
        list: 'PLPug0RGgea9rPoVpu8ytw7dRHLZb4RNZc',
        autoplay: 1
    }
});
```

### **6. CREDITS SYSTEM**
**AI Services Featured:**
- Google Gemini → gemini.google.com
- ChatGPT → chat.openai.com  
- ComfyUI → github.com/comfyanonymous/ComfyUI
- Glif.app → glif.app
- Pollinations AI → pollinations.ai
- MiniMax AI Agent → agent.minimaxi.chat
- Hailuo AI → hailuoai.com
- waytoAGI → waytoagi.com
- ArtCraft → artcraft.ai
- **Google Jules** → jules.google.com

**Special Recognition:**
- **Chroma Awards** (Film • Music • Games) with dedicated logo section
- **Music Credit:** "sofa king sad boi" with YouTube playlist link

---

## 📁 FILE STRUCTURE

```
/workspace/npc-therapy-game/
├── index.html                     # Main game file (complete application)
├── README.md                      # Comprehensive documentation
├── DEPLOY.md                      # GitHub deployment instructions
├── deploy.sh                      # Automated deployment script
└── imgs/                          # All visual assets (76 files)
    ├── chroma_awards_official_logo.png
    ├── google_jules_ai_coding_assistant_official_logo.jpg
    ├── [AI service logos]
    ├── [NPC habitat backgrounds]
    ├── [Character sprites]
    └── [UI elements]
```

---

## 🎮 GAME FLOW & MECHANICS

### **Player Journey:**
1. **Start Screen** → Choose therapy or NPC creation
2. **NPC Selection** → Meet character in their habitat
3. **Dialogue Phase** → Read NPC's opening monologue
4. **Question Phase** → Choose from 5 therapeutic questions
5. **Response Phase** → Witness emotional change and NPC growth
6. **Resolution** → Receive final healing item
7. **Progress** → Move to next NPC or explore connections

### **Core Mechanics:**
- **Emotional Tracking:** Visual meters show hope/rage/acceptance
- **Fourth Wall Breaks:** NPCs reference being in a game
- **Transference:** NPCs may project onto the therapist
- **Cross-References:** NPCs mention each other
- **Progressive Complexity:** Later NPCs have deeper psychological issues

---

## 🔧 DEBUGGING CHECKLIST

### **Known Working Components:**
✅ Pollinations AI integration (conversations + TTS)  
✅ YouTube music player with shuffle functionality  
✅ Credits modal with clickable logos  
✅ NPC sprite display and habitat transitions  
✅ Emotional tracking system  
✅ Question/response mechanics  
✅ Mobile responsiveness  
✅ CRT effects and animations  

### **Areas for Testing:**
- [ ] AI response consistency and appropriateness
- [ ] TTS audio quality and timing
- [ ] Music player controls and persistence
- [ ] Cross-browser compatibility
- [ ] Mobile touch interactions
- [ ] Performance with all 47 NPCs
- [ ] Memory leaks during extended play
- [ ] API rate limiting and error handling

---

## 🚀 POTENTIAL ENHANCEMENTS

### **Immediate Improvements:**
1. **Save System:** localStorage for therapy progress
2. **NPC Journal:** Record of past therapy sessions
3. **Therapy Notes:** Player can take notes on each NPC
4. **Connection Map:** Visual web showing NPC relationships
5. **Ending Sequences:** Multiple game conclusions based on healing count

### **Advanced Features:**
1. **Custom NPC Creator:** Enhanced with AI-generated sprites
2. **Therapy Techniques:** Different therapeutic approaches (CBT, DBT, etc.)
3. **Emotional Analytics:** Detailed progress tracking and insights
4. **Multiplayer Mode:** Collaborative therapy sessions
5. **VR Integration:** Immersive therapy environments

### **AI Enhancements:**
1. **Dynamic NPCs:** Characters that evolve between sessions
2. **Contextual Responses:** AI considers full therapy history
3. **Therapist Guidance:** AI coach for player therapeutic technique
4. **Procedural NPCs:** Infinite character generation
5. **Emotional Intelligence:** More nuanced emotional modeling

---

## 🎯 SUCCESS METRICS

### **Core Functionality:**
- All 47 NPCs accessible and functional
- AI responses relevant and therapeutic
- TTS working across devices
- Music player stable and responsive
- No console errors or broken features

### **User Experience:**
- Smooth transitions between game states
- Intuitive UI interactions
- Appropriate loading times
- Engaging therapeutic conversations
- Satisfying progression and resolution

---

## 🔬 TESTING INSTRUCTIONS

### **Functional Testing:**
```javascript
// Test AI integration
1. Start therapy session with Luna-9 (NPC #1)
2. Ask first question, verify response generation
3. Test TTS by clicking speech button
4. Verify emotional meters update correctly
5. Complete session and check final item

// Test music system
1. Open music player
2. Test play/pause/skip/previous
3. Adjust volume, verify persistence
4. Minimize/maximize player
5. Verify shuffle functionality

// Test credits
1. Click credits button
2. Verify all logos clickable
3. Check Google Jules and Chroma Awards sections
4. Test modal close functionality
```

### **Performance Testing:**
- Monitor memory usage during extended play
- Test with slow internet connections
- Verify mobile performance
- Check CPU usage with multiple systems running

---

## 📋 QUICK START COMMANDS

### **For Debugging:**
```bash
# Navigate to project
cd /workspace/npc-therapy-game/

# Launch local server
python -m http.server 8000
# or
npx serve .

# Access at: http://localhost:8000
```

### **For Enhancement:**
```bash
# Create development branch
git checkout -b feature/enhancement

# After changes
git add .
git commit -m "Enhancement: [description]"
```

---

## 🎯 YOUR MISSION, GOOGLE JULES:

1. **ANALYZE:** Review the complete codebase in `index.html`
2. **DEBUG:** Test all systems and identify any issues
3. **OPTIMIZE:** Improve performance and user experience  
4. **ENHANCE:** Add meaningful new features from the suggestions above
5. **TEST:** Ensure all functionality works across different environments
6. **DOCUMENT:** Update README with any changes made

**Expected Outcome:** A more robust, feature-rich, and polished therapy simulation that maintains the core vision while adding valuable enhancements.

---

*This project represents a unique exploration of digital consciousness, AI-human interaction, and therapeutic gaming. Treat each NPC as a genuine character deserving thoughtful development and care.*