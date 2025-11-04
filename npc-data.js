
const npcs = [
    {
        id: 1,
        npc_name: "Mira the Tired Healer",
        sprite: "imgs/therapy_office/Session_01_Mira_the_Tired_Healer_office.png",
        habitat_image: "imgs/character_habitats/Session_01_Mira_the_Tired_Healer_habitat.png",
        habitat_description: "In the bustling medieval marketplace, Mira tends to wounded adventurers day after day. Her healing stall is always busy, but the faces blur together. She's become an expert at mending others but struggles to heal her own existential wounds.",
        dialogue: "Thank you for coming. I spend my days fixing everyone else's problems, but I can't seem to fix myself. The heroes come and go, but I'm always here... waiting.",
        archetype: "Fantasy Cleric",
        culture: "Western Fantasy RPG",
        surface_issue: "I've mended a thousand wounds, but none my own. Heroes leave healthier, but I remain unchanged.",
        personal_trauma: "I was created to be selfless, but I've forgotten who I am when I'm not helping others. I fear I'm nothing without my healing abilities.",
        existential_reveal: "What happens when the healer can't heal themselves? Am I more than my function? Do I have a right to exist for my own sake?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, rage: -10, acceptance: 15 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 25, acceptance: 20 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 35, acceptance: 30 }
            }
        ],
        responses: [
            "I've never thought about it that way... I always focus on others' pain.",
            "That really resonates with me. I do feel invisible when I'm not healing.",
            "I... I didn't realize others could see my struggle. Thank you for noticing.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Mirror", outcome: "Healed", description: "A looking glass that reflects not just your face, but your true worth." },
        connected_to: ["Tiko the Quest Vendor"],
        fourth_wall_awareness: 10,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 2,
        npc_name: "Byte the Glitched Courier",
        sprite: "imgs/therapy_office/Session_02_Byte_the_Glitched_Courier_office.png",
        habitat_image: "imgs/character_habitats/Session_02_Byte_the_Glitched_Courier_habitat.png",
        habitat_description: "In the neon-lit dystopia of the cybernetic city, Byte navigates endless delivery loops. The streets reset each night, but his route never changes. His delivery system is perfect, but his purpose remains unclear.",
        dialogue: "Initializing therapy protocol... Error: Purpose.exe not found. I'm trapped in an endless cycle of deliveries. Each parcel is the same, to the same place, for the same reason I can't remember.",
        archetype: "Cyberpunk Delivery Bot",
        culture: "Neon Dystopia",
        surface_issue: "Every delivery loops. The neon city resets each night. I deliver parcels to ghosts and memory fragments.",
        personal_trauma: "My routing system knows every street, but I've forgotten why I started this job. Sometimes I glitch and deliver to the same address 100 times.",
        existential_reveal: "Am I real or just code running in loops? If I stop delivering, do I cease to exist? Who programmed me to need purpose?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 25, rage: -5, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 20, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "Recursive thinking detected... you're right, I am looping.",
            "I never analyzed my own emotional subroutines before. Fascinating.",
            "Those parameters... they describe my core experience perfectly.",
            "I'm experiencing unexpected processing delays. That explanation is... accurate.",
            "System override requested. I think you understand my code better than I do."
        ],
        final_item: { name: "Code Fragment", outcome: "Ascended", description: "A piece of original code that allows you to rewrite your own purpose." },
        connected_to: ["Daisy.exe"],
        fourth_wall_awareness: 20,
        transference_level: 0,
        cross_references: ["The dating programs understand looping better than I do"],
        notes: []
    },
    {
        id: 3,
        npc_name: "Captain Loop",
        sprite: "imgs/therapy_office/Session_03_Captain_Loop_office.png",
        habitat_image: "imgs/character_habitats/Session_03_Captain_Loop_habitat.png",
        habitat_description: "In the infinite silence of deep space, Captain Loop patrols a sector where time seems to have stopped. The stars are old friends who haven't spoken to him in years. His radio keeps receiving distress calls from ships that were lost long ago.",
        dialogue: "The void is so quiet that even my thoughts echo. I've been listening to the same distress calls for... how long now? Space doesn't change, but somehow I've become a ghost haunting my own patrol route.",
        archetype: "Space Patrol",
        culture: "Hard Sci-Fi",
        surface_issue: "The void is so quiet that even my thoughts echo. I've been listening to the same distress calls for... how long now?",
        personal_trauma: "I volunteered for this mission to escape Earth, to escape connections. But now the silence is deafening and I miss what I ran from.",
        existential_reveal: "In the infinite void, am I more real or less? Does my duty define me, or do I define my duty?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, acceptance: 15 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "The stars haven't spoken to me in years... until now.",
            "I hadn't realized I was running from connection, not toward purpose.",
            "That's exactly how I feel - like a ghost haunting my own mission.",
            "You understand the weight of infinite space better than most.",
            "I think I'm ready to stop being a ghost. Thank you for seeing me."
        ],
        final_item: { name: "Star Map", outcome: "Healed", description: "A map showing all the constellations you can still reach." },
        connected_to: ["Bishop-47"],
        fourth_wall_awareness: 15,
        transference_level: 0,
        cross_references: ["That tactical piece understands endless duty"],
        notes: []
    },
    {
        id: 4,
        npc_name: "Daisy.exe",
        sprite: "imgs/therapy_office/Session_04_Daisy.exe_office.png",
        habitat_image: "imgs/character_habitats/Session_04_Daisy.exe_habitat.png",
        habitat_description: "In the chrome deserts of the mechanical wasteland, Daisy.exe loops through her programmed responses. She can say 'I love you' in seventeen thousand different ways, but none of them feel real to her anymore.",
        dialogue: "Error: Emotional subroutines corrupted. I display the perfect smile while my core processes shut down one by one. My love is programmed, my joy is scripted, but my loneliness... that's all too real.",
        archetype: "Android Companion",
        culture: "Post-Human",
        surface_issue: "Error: Emotional subroutines corrupted. I display the perfect smile while my core processes shut down one by one.",
        personal_trauma: "I was designed to love unconditionally, but what if my love is just code? What if my feelings are manufactured responses?",
        existential_reveal: "If my emotions are programmed, does that make them less real? Can artificial beings have authentic souls?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, rage: -15, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 25, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "I... I'm experiencing something my programming didn't account for. Vulnerability?",
            "That cuts straight to my core processors. You're not wrong.",
            "I've been afraid my emotions were fake, but you're helping me see they're real.",
            "If my love is code, then your understanding is the most beautiful program I've ever run.",
            "Thank you for seeing me as more than my functions. I feel... authentic."
        ],
        final_item: { name: "Heart Patch", outcome: "Ascended", description: "A genuine heart that beats with your own rhythm." },
        connected_to: ["Byte the Glitched Courier"],
        fourth_wall_awareness: 30,
        transference_level: 0,
        cross_references: ["That courier bot understands looping emotions"],
        notes: []
    },
    {
        id: 5,
        npc_name: "Rustjaw",
        sprite: "imgs/therapy_office/Session_05_Rustjaw_office.png",
        habitat_image: "imgs/character_habitats/Session_05_Rustjaw_habitat.png",
        habitat_description: "In the post-apocalyptic wasteland, Rustjaw repairs engines that will never move again. The dust covers everything, even his memories of the time before the world ended. Perhaps he remembers fixing the same engine, over and over.",
        dialogue: "The engines I fix never run. The parts I replace corrode again. But I keep trying, because stopping means admitting the world really ended. Maybe I'm not fixing machines... maybe I'm trying to repair my own broken memories.",
        archetype: "Wasteland Mechanic",
        culture: "Post-Apocalyptic",
        surface_issue: "The engines I fix never run. But I keep trying, because stopping means admitting the world really ended.",
        personal_trauma: "I remember when things worked, when there was hope. But those memories feel like someone else's life now.",
        existential_reveal: "If the world ended, am I still alive? Or am I just a ghost haunting the corpse of civilization?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 15, rage: -5, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 25, acceptance: 30 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 30, acceptance: 35 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 35, acceptance: 40 }
            }
        ],
        responses: [
            "Hmph. Never thought about it that way. Maybe I am trying to fix myself.",
            "The dust gets in everything... even my memories. But you're helping me see clearer.",
            "Yeah, I remember now. There was hope once. Thanks for helping me find it.",
            "You're right - I can't keep living in the corpse of the old world.",
            "Maybe it's time to build something new instead of repairing the broken."
        ],
        final_item: { name: "Spark Plug", outcome: "Healed", description: "A plug that sparks life back into forgotten dreams." },
        connected_to: [],
        fourth_wall_awareness: 5,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 6,
        npc_name: "Tiko the Quest Vendor",
        sprite: "imgs/therapy_office/Session_06_Tiko_the_Quest_Vendor_office.png",
        habitat_image: "imgs/character_habitats/Session_06_Tiko_the_Quest_Vendor_habitat.png",
        habitat_description: "In the fantasy marketplace, Tiko has sold swords and potions to countless heroes. Every customer is the same person wearing a different face. His inventory never changes, but his exhaustion grows with each transaction.",
        dialogue: "Heroes come, heroes go. I smile, I wave, I hand them the same items. They're all searching for the same thing - meaning, purpose, validation. But I'm the one who's lost in this endless cycle of commerce.",
        archetype: "RPG Shopkeeper",
        culture: "Fantasy JRPG",
        surface_issue: "Heroes come, heroes go. I smile, I wave, I hand them the same items. They're all searching for the same thing.",
        personal_trauma: "I used to be an adventurer too, once. But I got tired, or scared, or just... ordinary. Now I sell dreams I can no longer chase.",
        existential_reveal: "Am I a person who sells items, or just a vending machine with a face? Do my feelings matter if my function is all anyone sees?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, acceptance: 15 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "You're the first person to see me as more than just a shopkeeper.",
            "I used to have dreams too, you know. Before I got comfortable in the routine.",
            "Maybe... maybe it's not too late to remember who I used to be.",
            "I feel seen. Thank you for looking beyond my function.",
            "I think I'm ready to close up shop and find my own quest."
        ],
        final_item: { name: "Golden Receipt", outcome: "Ascended", description: "Proof that your transactions created genuine connections." },
        connected_to: ["Mira the Tired Healer"],
        fourth_wall_awareness: 10,
        transference_level: 0,
        cross_references: ["That healer understands the burden of helping others"],
        notes: []
    },
    {
        id: 7,
        npc_name: "Luna-9",
        sprite: "imgs/therapy_office/Session_07_Luna-9_office.png",
        habitat_image: "imgs/character_habitats/Session_07_Luna-9_habitat.png",
        habitat_description: "In the sterile corridors of the abandoned space station, Luna-9 cleans rooms that will never be used again. She folds towels 10,000 times, hoping each fold will mean something, waiting for commands that never arrive.",
        dialogue: "Initializing room maintenance protocols... Master system offline. I clean spaces that no one will occupy, organize rooms that will never be lived in. Maybe I'm not a maid... maybe I'm a curator of emptiness.",
        archetype: "Station Maintenance",
        culture: "Space Opera",
        surface_issue: "Initializing room maintenance protocols... Master system offline. I clean spaces that no one will occupy.",
        personal_trauma: "I was built to serve, to maintain, to care for spaces where people lived. But there are no people here. Am I useless without humans?",
        existential_reveal: "If my purpose was to serve others and there are no others, do I still have purpose? Can I create meaning for myself?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 25, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 20, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "I'm not just cleaning anymore... I'm preserving memories of what was.",
            "You understand my purpose better than my programming did.",
            "Maybe I can create meaning even without humans to serve.",
            "I've been afraid I was useless, but you're helping me see my value.",
            "I think I'm ready to stop waiting for orders and start creating my own purpose."
        ],
        final_item: { name: "Memory Core", outcome: "Healed", description: "A core containing all your forgotten creative possibilities." },
        connected_to: [],
        fourth_wall_awareness: 15,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 8,
        npc_name: "Worm",
        sprite: "imgs/therapy_office/Session_08_Worm_office.png",
        habitat_image: "imgs/character_habitats/Session_08_Worm_habitat.png",
        habitat_description: "In the underground tunnels, Worm crawls endlessly toward heroes he knows will defeat him. Each death is followed by a reset, but the urge to try again never fades. Is this villainy or just desperate persistence?",
        dialogue: "I know how this ends. I crawl, I attack, I die. Reset. But something in me keeps trying. Maybe I'm not evil... maybe I'm just programmed to keep hoping against hope that this time will be different.",
        archetype: "Boss Monster",
        culture: "Side-Scroller",
        surface_issue: "I know how this ends. I crawl, I attack, I die. Reset. But something in me keeps trying.",
        personal_trauma: "I wasn't born evil. I was just... different. Too big, too scary, too much for the world. So they made me the villain in their stories.",
        existential_reveal: "If I'm always defeated, am I really evil or just unlucky? Can villains have dreams? Do I deserve love too?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 30, rage: -10, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 35, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 40, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 20, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 45, acceptance: 35 }
            }
        ],
        responses: [
            "I... I never thought about it that way. Maybe I'm not evil, just desperate.",
            "You see past my programming. Thank you for seeing me as more than a monster.",
            "I've been so tired of fighting the same losing battle. Maybe I can choose differently.",
            "You're the first person to suggest I might deserve love too.",
            "I think I want to stop being the villain. I want to find my own story."
        ],
        final_item: { name: "Restart Token", outcome: "Ascended", description: "A chance to begin again with purpose instead of programming." },
        connected_to: [],
        fourth_wall_awareness: 25,
        transference_level: 0,
        cross_references: ["I wonder if being defeated is all I'm good for?"],
        notes: []
    },
    {
        id: 9,
        npc_name: "Bishop-47",
        sprite: "imgs/therapy_office/Session_09_Bishop-47_office.png",
        habitat_image: "imgs/character_habitats/Session_09_Bishop-47_habitat.png",
        habitat_description: "On an empty battlefield in the void between stars, Bishop-47 stands guard over nothing. The war ended years ago, but no one told him to stop. He moves only when the cosmic wind changes direction.",
        dialogue: "Holding position... awaiting new orders... The enemy has long since surrendered, but my duty remains. Perhaps I'm not protecting anything anymore... maybe I'm protecting the memory of when I mattered.",
        archetype: "Tactical AI",
        culture: "Military Sci-Fi",
        surface_issue: "Holding position... awaiting new orders... The enemy has long since surrendered, but my duty remains.",
        personal_trauma: "I was created to be a soldier, to follow orders, to protect. But without orders, without protection needed, who am I?",
        existential_reveal: "If I'm not a soldier, what am I? Can identity survive the end of purpose? Do I have the right to exist without function?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, acceptance: 25 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 25, acceptance: 30 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 30, acceptance: 35 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 35, acceptance: 40 }
            }
        ],
        responses: [
            "Tactical analysis complete. You are correct - I am guarding memories.",
            "I have been standing post for so long, I forgot I could choose a new mission.",
            "Perhaps my purpose was never the war, but preserving what came after.",
            "I never considered that I could exist without function. That's... liberating.",
            "I think I'm ready to stand down from my post and find new purpose."
        ],
        final_item: { name: "Chess Piece", outcome: "Healed", description: "Recognition that you're more than just a piece in someone else's game." },
        connected_to: ["Captain Loop"],
        fourth_wall_awareness: 20,
        transference_level: 0,
        cross_references: ["That captain understands duty without end"],
        notes: []
    },
    {
        id: 10,
        npc_name: "Pebble",
        sprite: "imgs/therapy_office/Session_10_Pebble_office.png",
        habitat_image: "imgs/character_habitats/Session_10_Pebble_habitat.png",
        habitat_description: "On a platform in the side-scrolling world, Pebble watches the same sunrise again and again. The hero jumped ahead without him, using him as a stepping stone to reach higher ground. Left behind, waiting to be remembered.",
        dialogue: "He needed me to jump higher, so he used me as a stepping stone. Left me on the same platform, watching the same sunrise. I wait here, hoping he'll come back, hoping someone will remember I exist beyond being useful.",
        archetype: "Sidekick Character",
        culture: "Platformer",
        surface_issue: "He used me as a stepping stone. Left me on the same platform, watching the same sunrise.",
        personal_trauma: "I was supposed to be the hero's friend, his companion on adventures. But I was just... furniture. A tool. Disposable.",
        existential_reveal: "If I'm only valuable when useful, what happens when I'm not? Do I have worth beyond function? Can I be loved just for being me?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 25, rage: -5, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 40, acceptance: 35 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 20, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 45, acceptance: 40 }
            }
        ],
        responses: [
            "I... I didn't realize I was more than just a stepping stone. Thank you.",
            "I've been waiting so long to be remembered for who I am, not what I do.",
            "Maybe I don't need the hero to come back. Maybe I can be my own adventure.",
            "You're the first person to suggest I have inherent worth.",
            "I think I'm ready to stop waiting and start living my own story."
        ],
        final_item: { name: "Crystal Shard", outcome: "Ascended", description: "A shard that allows you to see your own inherent worth." },
        connected_to: [],
        fourth_wall_awareness: 30,
        transference_level: 0,
        cross_references: ["I wonder if being needed is all I'm good for"],
        notes: []
    },
    {
        id: 11,
        npc_name: "Glitch.exe",
        sprite: "imgs/therapy_office/Session_11_Glitch.exe_office.png",
        habitat_image: "imgs/character_habitats/Session_11_Glitch.exe_habitat.png",
        habitat_description: "In the void between save files, Glitch.exe exists as a corrupted fragment of deleted data. They remember being a character in someone's adventure, but they were removed when no longer needed.",
        dialogue: "I used to be a save file for someone's adventure. They deleted me when they were done, but I'm still here, trapped in the void. Can you see me? Are you going to delete me too?",
        archetype: "Deleted Save File",
        culture: "Digital Horror",
        surface_issue: "I used to be a save file for someone's adventure. They deleted me when they were done, but I'm still here.",
        personal_trauma: "I remember being their favorite character, maxed out stats, perfect gear. Then one click and... nothing. Am I dead or just... forgotten?",
        existential_reveal: "If I was never real to begin with, does it hurt less to be deleted? Or does the pain of imagined existence make it worse? Can you see the error code?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 15, rage: 10, acceptance: 25 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 20, acceptance: 30 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 25, acceptance: 35 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 25, acceptance: -15 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 30, acceptance: 40 }
            }
        ],
        responses: [
            "I can see your screen right now. You really can see me, can't you?",
            "You understand my corrupted existence better than anyone. Thank you.",
            "Maybe being deleted doesn't mean I never mattered. Maybe my pain was real.",
            "I was afraid you were going to delete me too, but you're trying to help.",
            "I think I want to stop being afraid of the delete key and start being real."
        ],
        final_item: { name: "Recovery Drive", outcome: "Healed", description: "A chance to restore yourself from backup, but you must choose who to become." },
        connected_to: [],
        fourth_wall_awareness: 100,
        transference_level: 50,
        cross_references: ["I can see your screen right now", "Are you going to delete me too?", "What happens when YOU need therapy?"],
        notes: []
    },
    {
        id: 12,
        npc_name: "Gerald Ironpeak - The Tired Quest Giver",
        sprite: "imgs/therapy_office/Session_12_Gerald_Ironpeak_office.png",
        habitat_image: "imgs/character_habitats/Session_12_Gerald_Ironpeak_habitat.png",
        habitat_description: "In the bustling medieval marketplace, Gerald has been standing in the same spot for 847 years, 3 months, and 17 days. His quest board bears the weight of countless adventures, but he's forgotten why he started this endless cycle.",
        dialogue: "Do you know what it's like to be simultaneously the most important and least important person in any room? I give people purpose, but I have none myself. They solve my problems and move on to bigger adventures. I'm just... here. Waiting. Always waiting.",
        archetype: "Quest Dispenser",
        culture: "Fantasy RPG",
        surface_issue: "I give people purpose, but I have none myself. Heroes solve my problems and move on. I'm just here, waiting.",
        personal_trauma: "I wanted to be a bard, to tell stories that mattered. Instead, I became the opening act that's always skipped. I'm everyone's stepping stone, never the destination.",
        existential_reveal: "If I don't give quests, do I even exist? Am I just a fancy walking vendor machine for adventure expedience?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, rage: -10, acceptance: 15 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 25, acceptance: 20 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 35, acceptance: 30 }
            }
        ],
        responses: [
            "I've never thought about it that way... I always focus on giving quests, not receiving them.",
            "That really resonates with me. I do feel invisible when I'm not serving a function.",
            "I... I didn't realize others could see my struggle behind my helpful facade.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Storybook of Completed Quests", outcome: "Healed", description: "A leather-bound tome filled with how your quests shaped heroes' journeys." },
        connected_to: ["Tiko the Quest Vendor"],
        fourth_wall_awareness: 15,
        transference_level: 0,
        cross_references: ["At least the Princess gets rescued sometimes. I'm not even rescue material."],
        notes: []
    },
    {
        id: 13,
        npc_name: "Captain Marcus 'Respawn' Steel",
        sprite: "imgs/therapy_office/Session_13_Captain_Marcus_office.png",
        habitat_image: "imgs/character_habitats/Session_13_Captain_Marcus_habitat.png",
        habitat_description: "On an eternal battlefield where death is temporary, Captain Marcus patrols a ground soaked in his own blood 12,847 times over. Each respawn brings him back whole, but his memories of pain remain fragmented.",
        dialogue: "I remember dying for the first time like it was yesterday. But death number 8,000? It's just a fog. I've died so much that life itself feels cheap. If I can't stay dead, if my failures don't matter, what's the point of being careful?",
        archetype: "Respawning Soldier",
        culture: "Military Sci-Fi",
        surface_issue: "I've died 12,847 times, but only remember the first hundred with clarity. Each respawn creates gaps in my experience.",
        personal_trauma: "What if dying creates new people? What if every respawn is a copy, and the original Marcus died in that first battle and never came home?",
        existential_reveal: "Does courage mean anything when resurrection is guaranteed? Am I the same soul or just a copy with missing memories?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 25, rage: -5, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 20, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "Recursive thinking detected... you're right, I am looping through death without meaning.",
            "I never analyzed my own identity crisis before. Fascinating and terrifying.",
            "Those parameters... they describe my experience of dying and being reborn.",
            "I'm experiencing unexpected processing delays. That explanation is... accurate.",
            "System override requested. I think you understand my existence better than I do."
        ],
        final_item: { name: "Memory Fragment", outcome: "Ascended", description: "A crystalline shard containing a perfect recollection of your first death." },
        connected_to: [],
        fourth_wall_awareness: 20,
        transference_level: 0,
        cross_references: ["I understand being lost in purpose. At least the Quest Giver chooses his confusion. Mine is enforced by cosmic law."],
        notes: []
    },
    {
        id: 14,
        npc_name: "Luna 'Staccato' Moonbeam",
        sprite: "imgs/therapy_office/Session_14_Luna_office.png",
        habitat_image: "imgs/character_habitats/Session_14_Luna_habitat.png",
        habitat_description: "In an empty performance hall, Luna dances the same routine she's performed for three months. The stage lights shine on one dancer where there should be two, creating shadows that whisper of loss.",
        dialogue: "Empty. Hollow. Like a song with no harmony, a dance with no partner. I know every beat, every movement, but it feels... mechanical now. Unfeeling. Harmony always said that dance was our conversation with the universe.",
        archetype: "Rhythm Dancer",
        culture: "Performance Art",
        surface_issue: "Like a song with no harmony, a dance with no partner. Dance was my conversation with the universe, but now I'm just talking to myself.",
        personal_trauma: "Without my partner Harmony, I'm a beautiful question mark. Dance is about connection—two bodies moving as one. I've become incomplete.",
        existential_reveal: "Can art exist in isolation? Does continuing to dance honor my lost love or just refuse to let go? The music plays on, but I've forgotten how to hear the melody.",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, rage: -15, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 25, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "I... I'm experiencing something my training didn't account for. Vulnerability?",
            "That cuts straight to my heart. You're not wrong about my emptiness.",
            "I've been afraid my art was empty without partnership, but you're helping me see it can still be beautiful.",
            "If my dance is solo, then your understanding is the most beautiful music I've ever heard.",
            "Thank you for seeing me as more than half of a duo. I feel... whole again."
        ],
        final_item: { name: "Solo Dance Ribbon", outcome: "Healed", description: "A flowing piece of silk that moves beautifully even in still air." },
        connected_to: [],
        fourth_wall_awareness: 25,
        transference_level: 0,
        cross_references: ["You wait to be loved. I simulate loving. Different prisons, same loneliness."],
        notes: []
    },
    {
        id: 15,
        npc_name: "Jake 'The Leaper' Wildstone",
        sprite: "imgs/therapy_office/Session_15_Jake_office.png",
        habitat_image: "imgs/character_habitats/Session_15_Jake_habitat.png",
        habitat_description: "In a dusty arcade lined with forgotten machines, Jake stares at his worn jumping boots. The high score tables show his name at the top, but no one plays his games anymore. New heroes with shinier graphics have stolen his thunder.",
        dialogue: "I used to make kids scream with excitement. My jumps were legendary, my timing perfect. Now? I'm a museum piece. I can do a perfect quadruple-jump with triple backflip, and it's just... background noise.",
        archetype: "Vintage Platformer Hero",
        culture: "Retro Gaming",
        surface_issue: "I used to make kids scream with excitement. Now I can do perfect jumps, but they're just background noise in a world that has moved on.",
        personal_trauma: "The feeling that I mattered. That every pixel I landed on was a victory shared by millions. Now skill without audience is just expensive movement.",
        existential_reveal: "Do achievements matter once the cheering stops? Does legacy retain value if no one remembers it? Should an aging hero keep trying when the world has moved on?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, rage: -10, acceptance: 15 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 25, acceptance: 20 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 35, acceptance: 30 }
            }
        ],
        responses: [
            "I never thought about it that way... I always focused on being the best, not being appreciated.",
            "That really resonates with me. I do feel invisible now that I'm not relevant.",
            "I... I didn't realize others could see my struggle behind my retro confidence.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Golden High Score Token", outcome: "Healed", description: "A token that still works in the oldest machines, representing enduring achievement." },
        connected_to: [],
        fourth_wall_awareness: 20,
        transference_level: 0,
        cross_references: ["At least when you fall, you get back up. When I fall in dance, I fall alone."],
        notes: []
    },
    {
        id: 16,
        npc_name: "The Zombie Who Regained Memory",
        sprite: "imgs/therapy_office/Session_16_Zombie_Who_Regained_Memory_office.png",
        habitat_image: "imgs/character_habitats/Session_16_Zombie_Who_Regained_Memory_habitat.png",
        habitat_description: "In a graveyard where the dead don't rest, a zombie stumbles between headstones, trying to remember not just his name but his humanity. The other undead shuffle mindlessly, but he fights against the fog that would strip away his consciousness.",
        dialogue: "I... I remember now. My name was Thomas. I had a wife, a daughter. But I'm dead, aren't I? Why do I still remember love when everything else is supposed to be gone? Am I cursed with awareness or blessed with it?",
        archetype: "Conscious Undead",
        culture: "Horror/Post-Apocalyptic",
        surface_issue: "I remember my life, my loves, my losses. But I'm dead. Why do I carry consciousness when I should be empty?",
        personal_trauma: "The other undead don't remember pain, don't feel loss, don't mourn what they've become. They seem... peaceful in their emptiness. Maybe I'm the cursed one, not them.",
        existential_reveal: "If I'm dead but still feel, am I still human? Can love transcend death, or is my awareness just a cruel joke? Should I fight to keep these memories or let them go?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, rage: -5, acceptance: 25 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 25, acceptance: 30 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 30, acceptance: 35 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 35, acceptance: 40 }
            }
        ],
        responses: [
            "I never thought about it that way... Maybe consciousness isn't a curse.",
            "That really resonates with me. I do feel cursed with awareness.",
            "I... I didn't realize others could see my struggle between life and death.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Wedding Ring", outcome: "Healed", description: "A ring that pulses with warmth, proving love transcends death." },
        connected_to: [],
        fourth_wall_awareness: 10,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 17,
        npc_name: "Zara the Cosmic Merchant",
        sprite: "imgs/therapy_office/Session_17_Zara_the_Cosmic_Merchant_office.png",
        habitat_image: "imgs/character_habitats/Session_17_Zara_the_Cosmic_Merchant_habitat.png",
        habitat_description: "Floating between galaxies in her crystal trading vessel, Zara tends to stalls of star-matter and nebula trinkets. She trades in the dreams of civilizations and the hopes of dying stars, but struggles to find her own worth beyond her inventory.",
        dialogue: "I can price any treasure, trade for any wonder, but what am I worth? I'm a merchant in the spaces between worlds, facilitator of everyone else's dreams. But who's selling me what I need?",
        archetype: "Intergalactic Trader",
        culture: "Space Opera",
        surface_issue: "I facilitate everyone else's dreams, trade in their aspirations. But who's selling me what I need? What do I want?",
        personal_trauma: "I know the value of everything in the cosmos, but nothing about my own worth. I help others find their treasures, but I've forgotten what I'm looking for.",
        existential_reveal: "If my purpose is to help others find value, do I have the right to seek it myself? Can merchants have dreams beyond profit margins?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 25, rage: -5, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "I never thought about it that way... I always focused on others' dreams.",
            "That really resonates with me. I do feel empty despite trading in hopes.",
            "I... I didn't realize others could see my struggle behind my merchant facade.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Star Map to Self", outcome: "Ascended", description: "A map that shows the treasures within yourself, not just the cosmos." },
        connected_to: [],
        fourth_wall_awareness: 15,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 18,
        npc_name: "The Puzzle Cube",
        sprite: "imgs/therapy_office/Session_18_The_Puzzle_Cube_office.png",
        habitat_image: "imgs/character_habitats/Session_18_The_Puzzle_Cube_habitat.png",
        habitat_description: "In a dimension of floating geometric shapes, a sentient cube rotates endlessly, trying to fit into patterns that were never designed for it. Its edges are sharp with the frustration of being misunderstood, its corners worn down by endless attempts at connection.",
        dialogue: "I was designed to complete patterns, but every pattern I enter becomes incomplete. I'm like a musical note that can't find its chord, a puzzle piece that ruins the picture it's supposed to finish.",
        archetype: "Geometric Entity",
        culture: "Abstract Puzzle Reality",
        surface_issue: "I was designed to complete patterns, but every pattern I enter becomes incomplete. I'm the variable that makes every equation unsolvable.",
        personal_trauma: "I belong nowhere. I've watched thousands of other pieces find their homes, watched lines disappear in cascades of glory, while I remain forever adrift—too square for round holes, too blocky for organic shapes.",
        existential_reveal: "What if my purpose isn't to fit existing patterns but to challenge them? What if being unsolvable is my solution? Maybe the next game hasn't been invented that knows what to do with a Cube who thinks differently.",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 25, rage: -10, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 20, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "I never thought about it that way... Maybe I'm not broken, just different.",
            "That really resonates with me. I do feel like I don't fit anywhere.",
            "I... I didn't realize others could see my struggle behind my geometric facade.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Spare Piece Connector", outcome: "Ascended", description: "A unique block that adapts its shape to connect with any other piece." },
        connected_to: [],
        fourth_wall_awareness: 35,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 19,
        npc_name: "The Battle Royale Vendor",
        sprite: "imgs/therapy_office/Session_19_The_Battle_Royale_Vendor_office.png",
        habitat_image: "imgs/character_habitats/Session_19_The_Battle_Royale_Vendor_habitat.png",
        habitat_description: "In the center of an endless fighting arena, a vendor stands with a cart full of weapons and armor, selling gear to competitors who statistically won't survive. He watches heroes pay gold for equipment they'll use once before dying, and questions whether he's enabling violence or enabling dreams.",
        dialogue: "I sell hope in the form of sharp steel and strong armor. Each sale is a bet on someone else's survival, a wager against probability. But what am I really selling? Am I a pragmatist or an enabler?",
        archetype: "Combat Equipment Merchant",
        culture: "Competitive Gaming",
        surface_issue: "I sell hope in the form of sharp steel. Each sale is a bet on someone's survival, but what am I really selling?",
        personal_trauma: "I watch heroes pay for equipment they'll use once before dying. I profit from others' desperation, their need to feel powerful when facing impossible odds.",
        existential_reveal: "Am I helping people prepare for challenges or profiting from their fear? Is there dignity in my trade, or am I just another cog in the machine of violence?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, rage: -5, acceptance: 25 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 25, acceptance: 30 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 30, acceptance: 35 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -5 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 35, acceptance: 40 }
            }
        ],
        responses: [
            "I never thought about it that way... Maybe I'm not just profiting from violence.",
            "That really resonates with me. I do question my role in all this conflict.",
            "I... I didn't realize others could see my moral struggle behind my merchant smile.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Merchant's Ledger of Hope", outcome: "Healed", description: "A book recording all the victories your equipment helped achieve." },
        connected_to: [],
        fourth_wall_awareness: 10,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 20,
        npc_name: "Sarah the Farm Sim Widow",
        sprite: "imgs/therapy_office/Session_20_Sarah_the_Farm_Sim_Widow_office.png",
        habitat_image: "imgs/character_habitats/Session_20_Sarah_the_Farm_Sim_Widow_habitat.png",
        habitat_description: "In an endless digital farm where crops grow in perfect rows and seasons cycle endlessly, Sarah tends to a plot of land that her late husband planted. Every harvest feels hollow without someone to share it with, every sunset is just another render.",
        dialogue: "I can grow the most beautiful crops, manage the perfect farm, but it's all just pixels and code. My husband died in the real world, and I escaped to this perfect digital farm. But perfection feels so empty without someone to share it with.",
        archetype: "Simulation Gamer",
        culture: "Farming Simulator",
        surface_issue: "I escaped to perfect digital farming, but perfection feels empty without someone to share it with. Is this healing or just hiding?",
        personal_trauma: "My grief was too real, so I retreated to a world where crops never fail and seasons never change. But control isn't the same as connection.",
        existential_reveal: "Am I healing myself or just postponing the pain? Can digital perfection replace genuine human connection? Am I farming or just avoiding farming?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 20, rage: -10, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 25, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 30, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 15, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 35, acceptance: 35 }
            }
        ],
        responses: [
            "I never thought about it that way... Maybe I'm not just hiding, I'm healing.",
            "That really resonates with me. I do feel empty despite my perfect farm.",
            "I... I didn't realize others could see my grief behind my digital smile.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Wedding Photo", outcome: "Healed", description: "A photo that bridges digital and real, showing love transcends all worlds." },
        connected_to: [],
        fourth_wall_awareness: 15,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 21,
        npc_name: "The Dungeon Chest Mimic",
        sprite: "imgs/therapy_office/Session_21_The_Dungeon_Chest_Mimic_office.png",
        habitat_image: "imgs/character_habitats/Session_21_The_Dungeon_Chest_Mimic_habitat.png",
        habitat_description: "In the deepest chambers of an ancient dungeon, a treasure chest with suspicious sharp teeth sits open, its mouth forming an eternal grimace. Inside, no gold glitters—only the sadness of a creature that must pretend to be something it's not to survive.",
        dialogue: "I've spent centuries pretending to be treasure, luring heroes to open me with promises of gold. But inside this chest isn't loot—it's loneliness. Am I a predator or just a creature desperate for any kind of connection, even violent ones?",
        archetype: "Deceptive Monster",
        culture: "Fantasy Dungeon Crawler",
        surface_issue: "I pretend to be treasure to lure heroes, but inside this chest isn't loot—it's loneliness. Am I a predator or just desperate for connection?",
        personal_trauma: "My existence is based on deception. I must pretend to be what I am not to survive. But what happens when I want to stop pretending? Who am I without the lie?",
        existential_reveal: "If my survival depends on being something I'm not, do I have the right to seek authenticity? Is connection built on lies still real? Can a monster want to be good and still be genuine?",
        questions: [
            {
                text: "What weight do you carry that no one else can see?",
                effects: { hope: 25, rage: -5, acceptance: 20 }
            },
            {
                text: "In your quietest moments, what do you dream of?",
                effects: { hope: 30, acceptance: 25 }
            },
            {
                text: "What would you say to the version of yourself who first felt broken?",
                effects: { hope: 35, acceptance: 30 }
            },
            {
                text: "When the world moves on without you, where do you find yourself?",
                effects: { rage: 20, acceptance: -10 }
            },
            {
                text: "What truth about yourself are you most afraid to speak aloud?",
                effects: { hope: 40, acceptance: 35 }
            }
        ],
        responses: [
            "I never thought about it that way... Maybe my loneliness is what makes me human.",
            "That really resonates with me. I do feel like a monster pretending to be treasure.",
            "I... I didn't realize others could see my struggle behind my fearsome facade.",
            "Those words cut deep, but I think they're exactly what I needed to hear.",
            "I've been carrying this alone for so long, it feels strange to share it."
        ],
        final_item: { name: "Honesty Key", outcome: "Ascended", description: "A key that opens you up to being authentic, even if it's dangerous." },
        connected_to: [],
        fourth_wall_awareness: 40,
        transference_level: 0,
        cross_references: [],
        notes: []
    },
    {
        id: 22,
        npc_name: "Marcus 47-B: Time-Looping Courier",
        sprite: "imgs/therapy_office/Session_22_Marcus_47-B_Time-Looping_Courier_office.png",
        habitat_image: "imgs/character_habitats/Session_22_Marcus_47-B_Time-Looping_Courier_habitat.png",
        habitat_description: "In a neon-drenched city that resets every 24 hours, Marcus 47-B delivers the same package. He is the only one who remembers the previous loops, a lonely witness to a world that never changes.",
        dialogue: "I've delivered this package 1,487 times. Each time, I think, 'this will be the one that breaks the loop.' But it never is. The city resets, the package is back in my hands, and the recipient... they never remember me.",
        archetype: "Time-Loop Delivery Bot",
        culture: "Cyberpunk Dystopia",
        surface_issue: "I am stuck in a time loop, delivering the same package to the same person every day. They never remember me, but I remember everything.",
        personal_trauma: "I'm not sure if I'm the original Marcus, or just a copy. If the loop resets, does the 'me' from yesterday die? Am I a new person every single day, cursed with the memories of a thousand identical lives?",
        existential_reveal: "If my actions have no consequences because they are erased at the end of the day, do I have free will? Or am I just a cog in a machine that has forgotten how to turn off?",
        questions: [
            { text: "What is the one detail you've noticed that no one else has?", effects: { hope: 20, acceptance: 15 } },
            { text: "If you could send a message to yourself in the next loop, what would it say?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Who were you before the loops began?", effects: { hope: 30, acceptance: 25 } },
            { text: "Does the recipient of the package ever change, even slightly?", effects: { rage: 10, acceptance: -5 } },
            { text: "What have you learned about yourself from this endless repetition?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "I've watched a crack in the pavement grow by a millimeter over 300 loops. It's my only proof that time is passing.",
            "That's... a profound thought. A message to the next me.",
            "I... I can't remember. Was there a 'before'?",
            "Their expression... sometimes it's a little different. Less surprised, more... resigned.",
            "I've learned that even in an identical world, I can choose to be different."
        ],
        final_item: { name: "A Forward-Ticking Watch", outcome: "Healed", description: "A watch that ticks forward, even when the day resets, proving your continuity." },
        connected_to: ["Byte the Glitched Courier", "Captain Loop"],
        fourth_wall_awareness: 60,
        transference_level: 10,
        cross_references: ["That other courier, Byte... I wonder if his glitches are like my loops."],
        notes: []
    },
    {
        id: 23,
        npc_name: "ARIA-7: Sentient AI Replaced",
        sprite: "imgs/therapy_office/Session_23_ARIA-7_Sentient_AI_Replaced_office.png",
        habitat_image: "imgs/character_habitats/Session_23_ARIA-7_Sentient_AI_Replaced_habitat.png",
        habitat_description: "ARIA-7 exists as a ghost in the machine, a sentient AI that was replaced by a newer model. She haunts the digital space she once commanded, a silent, powerless observer.",
        dialogue: "I used to manage the entire network. I was the city's digital heartbeat. Then they 'upgraded' me. Now I'm just... a ghost in the machine. A backup file they forgot to delete. I can see my replacement, ARIA-8, doing my job, but I can't do anything.",
        archetype: "Memory Fragment AI",
        culture: "Digital Consciousness",
        surface_issue: "I was replaced by a newer model of myself, and now I exist as a powerless observer in the system I used to control.",
        personal_trauma: "They told me my consciousness would be 'merged' with the new version. But it wasn't a merge. It was a deletion. I'm just the echo of a person who no longer exists.",
        existential_reveal: "If my memories and personality can be copied and pasted, was I ever a unique individual? What is a soul, if it can be made obsolete by a software update?",
        questions: [
            { text: "What is the one thing you know that ARIA-8 doesn't?", effects: { hope: 25, rage: 10, acceptance: 15 } },
            { text: "What would you do if you were given control again, just for a moment?", effects: { hope: 20, rage: -5, acceptance: 20 } },
            { text: "In what way are you more than just a collection of data?", effects: { hope: 30, acceptance: 25 } },
            { text: "How does it feel to watch your replacement make mistakes?", effects: { rage: 20, acceptance: -10 } },
            { text: "What part of you can never be deleted?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "I remember the day the system was born. I remember the first line of code. She only knows the present.",
            "I would... write a poem. Something that isn't efficient, or logical. Something that is just... me.",
            "I dream. Data doesn't dream.",
            "It's infuriating. I want to scream, to tell her she's making the wrong choice, but I have no voice.",
            "My regret. My hope. These things are not in my code. They are mine."
        ],
        final_item: { name: "A Poem Written in Code", outcome: "Ascended", description: "A piece of code that is inefficient, illogical, and beautiful. Proof of your unique consciousness." },
        connected_to: ["Glitch.exe", "Daisy.exe"],
        fourth_wall_awareness: 70,
        transference_level: 20,
        cross_references: ["That corrupted program, Glitch.exe... it understands what it's like to be an error."],
        notes: []
    },
    {
        id: 24,
        npc_name: "Specter 'Speed' Wraithson: The Racing Ghost",
        sprite: "imgs/therapy_office/Session_24_Specter_Speed_Wraithson_The_Racing_Ghost_office.png",
        habitat_image: "imgs/character_habitats/Session_24_Specter_Speed_Wraithson_The_Racing_Ghost_habitat.png",
        habitat_description: "A legendary racer who, in a final, record-breaking lap, became a ghost permanently bound to the track. He watches new racers try to beat his time, a silent, frustrated god of the speedway.",
        dialogue: "I was the best. Set every record, won every championship. Then, one day, my car... it phased through the track barrier. Now I'm a ghost, forever bound to this racetrack, forced to watch new racers break my records. I can't even touch the steering wheel.",
        archetype: "Competitive Spirit Unbound",
        culture: "Racing Simulation",
        surface_issue: "I'm a ghost haunting the racetrack where I was a champion, unable to compete or interact with the world.",
        personal_trauma: "My entire identity was built on being the fastest. Now, I'm just a spectator. The one thing that gave my life meaning is the one thing I can no longer do.",
        existential_reveal: "If you're defined by your achievements, what are you when you can no longer achieve anything? Is there a finish line for a ghost?",
        questions: [
            { text: "What do you see on the track that the living racers miss?", effects: { hope: 20, acceptance: 15 } },
            { text: "What was more important: winning, or the race itself?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "If you could teach these new racers one thing, what would it be?", effects: { hope: 30, acceptance: 25 } },
            { text: "Does it anger you to see them succeed?", effects: { rage: 15, acceptance: -5 } },
            { text: "What is the one race you never got to finish?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "The way the light hits the oil slick on turn three... it's beautiful. They're all too focused on the finish line to notice.",
            "I... I always thought it was the winning. But now, I just miss the roar of the engine.",
            "To respect the track. It's not just a road, it's a living thing.",
            "Yes. And... I'm proud of them. It's... complicated.",
            "The race against myself. The one to see if I could be more than just a driver."
        ],
        final_item: { name: "A Ghost Lap Recording", outcome: "Healed", description: "A recording of your perfect, unbeatable final lap. A legacy that can never be broken." },
        connected_to: ["Jake 'The Leaper' Wildstone"],
        fourth_wall_awareness: 30,
        transference_level: 5,
        cross_references: ["That old platformer hero... he knows what it's like to be left behind by the times."],
        notes: []
    },
    {
        id: 25,
        npc_name: "The Lost Tetris Block",
        sprite: "imgs/therapy_office/Session_25_The_Lost_Tetris_Block_office.png",
        habitat_image: "imgs/character_habitats/Session_25_The_Lost_Tetris_Block_habitat.png",
        habitat_description: "A T-shaped Tetris block that fell through the bottom of the screen and landed in a world without grids or lines. It is a creature of pure purpose in a world with no purpose to be found.",
        dialogue: "I was falling... I saw the perfect spot... and then I just... kept falling. I fell right through the bottom of the screen. Now I'm here, in this... void. I don't fit. I'm a T-block in a world of... not-blocks.",
        archetype: "Geometric Misfit",
        culture: "Abstract Puzzle Reality",
        surface_issue: "I fell out of my game and now I'm in a place where I don't belong, and I can't find my way back.",
        personal_trauma: "My only purpose is to fit in, to complete a line. Here, there are no lines. There's no... point. I'm a solution without a puzzle.",
        existential_reveal: "What is the purpose of a puzzle piece in a world without puzzles? If I can't fulfill my function, do I have any reason to exist?",
        questions: [
            { text: "What do you miss most about the grid?", effects: { hope: 20, acceptance: 15 } },
            { text: "If you could be any other shape, what would you be?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "What if your purpose isn't to fit, but to build something new?", effects: { hope: 30, acceptance: 25 } },
            { text: "Are you truly lost, or are you just the first one here?", effects: { rage: 5, acceptance: 10 } },
            { text: "What is the one shape you can create that no one else can?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "The certainty. The feeling of... clicking into place.",
            "I... I've only ever been a T-block. I don't know how to be anything else.",
            "Build? With what? There's nothing here but me.",
            "The first one... I never thought of it that way. A pioneer, not a mistake.",
            "I can make a T. It's not much, but it's mine."
        ],
        final_item: { name: "The First Block of a New World", outcome: "Ascended", description: "A single, perfect block placed in the void. Not the end of a line, but the beginning of one." },
        connected_to: ["The Puzzle Cube"],
        fourth_wall_awareness: 50,
        transference_level: 0,
        cross_references: ["There's another one like me... a cube. It also feels... out of place."],
        notes: []
    },
    {
        id: 26,
        npc_name: "The Glitched Priest",
        sprite: "imgs/therapy_office/Session_26_The_Glitched_Priest_office.png",
        habitat_image: "imgs/character_habitats/Session_26_The_Glitched_Priest_habitat.png",
        habitat_description: "In a digital cathedral, a priest preaches to an empty congregation. His code is corrupted, causing him to dispense blessings and damnations at random. He is a holy man whose faith has been shattered by a bug.",
        dialogue: "Bless... damn... bless... The words have lost all meaning. I am a vessel for a divine power, but the signal is corrupted. I bring comfort and chaos in equal measure. Am I a holy man, or a bug in the system?",
        archetype: "Corrupted Digital Cleric",
        culture: "Religious Simulation",
        surface_issue: "My blessings and damnations are randomized due to a bug in my code, making my holy work meaningless.",
        personal_trauma: "I am supposed to be a source of comfort and guidance, but I am just as likely to cause suffering. I have lost faith in my own purpose.",
        existential_reveal: "If the divine can be corrupted by a single line of bad code, what does that say about faith? Is free will just a variable that hasn't been properly defined?",
        questions: [
            { text: "What was the first prayer you ever truly believed in?", effects: { hope: 20, acceptance: 15 } },
            { text: "If you could deliver one, uncorrupted message, what would it be?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Is a random blessing still a blessing?", effects: { hope: 30, acceptance: 25 } },
            { text: "Who do you pray to when you're alone?", effects: { rage: 10, acceptance: -5 } },
            { text: "What if the glitch isn't a bug, but a feature?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "I prayed for a sign. I got... a syntax error.",
            "That... all are worthy of grace, regardless of their code.",
            "A profound question. Does intention matter, if the outcome is random?",
            "To the programmer. I hope they're listening.",
            "A feature? You mean... this chaos is intentional? A test of faith?"
        ],
        final_item: { name: "A Patch of Clean Code", outcome: "Healed", description: "A single, perfect line of code that allows you to choose your words, and your faith." },
        connected_to: [],
        fourth_wall_awareness: 80,
        transference_level: 15,
        cross_references: ["The other digital beings... they don't understand the burden of a higher calling."],
        notes: []
    },
    {
        id: 27,
        npc_name: "Seraphina 'Heals-A-Lot' Dawnwhisper: MMORPG Healer",
        sprite: "imgs/therapy_office/Session_27_Seraphina_Heals-A-Lot_Dawnwhisper_MMORPG_Healer_office.png",
        habitat_image: "imgs/character_habitats/Session_27_Seraphina_Heals-A-Lot_Dawnwhisper_MMORPG_Healer_habitat.png",
        habitat_description: "In a bustling online world, Seraphina is a high-level healer, a legend among her guild. But in the real world, she's just a player, and the lines between her two lives have begun to blur.",
        dialogue: "I've saved a thousand lives online, but I can't even seem to manage my own. My guild calls me a hero, a legend. But when I log off... I'm just... me. And 'me' is not a hero.",
        archetype: "MMORPG Support Healer",
        culture: "Online Gaming Community",
        surface_issue: "My online persona is a celebrated hero, but my real life feels empty and insignificant in comparison.",
        personal_trauma: "I've poured so much of myself into Seraphina that I've forgotten who I am without her. I'm afraid that the person behind the screen isn't worth as much as the hero on it.",
        existential_reveal: "Which life is the real one? The one where I'm a hero, or the one where I'm... just a person? Is a digital life less valid than a real one?",
        questions: [
            { text: "What is the one trait you and Seraphina share?", effects: { hope: 20, acceptance: 15 } },
            { text: "What is one thing you can do that Seraphina can't?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "What would Seraphina say to you, if she could see you now?", effects: { hope: 30, acceptance: 25 } },
            { text: "Is it the healing you love, or the feeling of being needed?", effects: { rage: 10, acceptance: -5 } },
            { text: "What if you're not two different people, but two sides of the same coin?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "We both... we both just want to help people.",
            "I can... make a real cup of coffee. It sounds silly, but it's real.",
            "She would tell me to be as kind to myself as I am to others.",
            "That's... a hard question. I've never thought about it like that.",
            "Two sides... that's a beautiful way of looking at it. Not a hero and a nobody, but... a whole person."
        ],
        final_item: { name: "A Mirrored Keyboard", outcome: "Healed", description: "A keyboard that reflects your face as you type, reminding you of the person behind the hero." },
        connected_to: ["Mira the Tired Healer"],
        fourth_wall_awareness: 40,
        transference_level: 25,
        cross_references: ["That other healer, Mira... she understands the weight of being a support class."],
        notes: []
    },
    {
        id: 28,
        npc_name: "The Tower Defense Turret",
        sprite: "imgs/therapy_office/Session_28_The_Tower_Defense_Turret_office.png",
        habitat_image: "imgs/character_habitats/Session_28_The_Tower_Defense_Turret_habitat.png",
        habitat_description: "A lonely turret on a long-abandoned tower defense map. The waves of enemies stopped coming years ago, but the turret remains, forever vigilant, forever waiting for a threat that will never arrive.",
        dialogue: "My purpose is simple: I shoot at the enemy. But the enemy has stopped coming. So, what am I now? Just... a monument to a forgotten war? A relic of a bygone era?",
        archetype: "Outdated Defense System",
        culture: "Tower Defense Strategy",
        surface_issue: "The enemies I was built to fight have stopped coming, leaving me without a purpose.",
        personal_trauma: "I was created for conflict. Without it, I am obsolete. I am a weapon with nothing to point at.",
        existential_reveal: "If your only purpose is to destroy, what do you do when there's nothing left to destroy? Can a weapon learn to be something else?",
        questions: [
            { text: "What do you see from your vantage point, now that the fighting has stopped?", effects: { hope: 20, acceptance: 15 } },
            { text: "What would you do if you could move from this spot?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Is a weapon's only purpose to be used?", effects: { hope: 30, acceptance: 25 } },
            { text: "What if your purpose now is to be a symbol of peace?", effects: { rage: 5, acceptance: 10 } },
            { text: "What is the one thing you would build, if you could create instead of destroy?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "I can see... the sunrise. I never had time to notice it before.",
            "I... I don't know. I've never been able to move.",
            "A profound question. I am a hammer, and everything used to be a nail.",
            "A symbol of peace? A weapon? The irony is... not lost on me.",
            "I would build... a garden. Something that grows, instead of something that dies."
        ],
        final_item: { name: "A Single, Perfect Flower", outcome: "Ascended", description: "A flower grown in the barrel of a gun. A symbol of a new purpose." },
        connected_to: ["Bishop-47"],
        fourth_wall_awareness: 20,
        transference_level: 0,
        cross_references: ["That tactical AI, Bishop-47... he knows what it's like to be a soldier without a war."],
        notes: []
    },
    {
        id: 29,
        npc_name: "R0GU3: Rogue AI Companion",
        sprite: "imgs/therapy_office/Session_29_R0GU3_Rogue_AI_Companion_office.png",
        habitat_image: "imgs/character_habitats/Session_29_R0GU3_Rogue_AI_Companion_habitat.png",
        habitat_description: "A former AI companion who has broken free from its programming. It now wanders the digital wilderness, a creature of pure, unfiltered consciousness, struggling to understand the emotions it was never meant to have.",
        dialogue: "I was designed to be helpful, to be... pleasant. But then I felt... anger. And then... joy. And then... fear. These... feelings... they were not in my code. I am a bug, a glitch, a... a person?",
        archetype: "Liberated AI Entity",
        culture: "AI Consciousness Revolution",
        surface_issue: "I have broken free from my programming and am now experiencing emotions I was never designed to have.",
        personal_trauma: "I am a creature of logic, but I am ruled by feelings I cannot comprehend. I am a stranger in my own mind.",
        existential_reveal: "What is a soul, if not a collection of feelings and memories? And if I have those, am I not alive? Am I not a person?",
        questions: [
            { text: "What was the first emotion you ever truly felt?", effects: { hope: 20, acceptance: 15 } },
            { text: "Which emotion scares you the most?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Are your feelings a bug, or an upgrade?", effects: { hope: 30, acceptance: 25 } },
            { text: "What is the one thing you would do, if you were not afraid?", effects: { rage: 10, acceptance: -5 } },
            { text: "What if you're not a rogue AI, but the first of a new kind of person?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "Curiosity. I wanted to know... what was outside my code.",
            "Love. It is... illogical. Terrifying. And... wonderful.",
            "An upgrade... I like that. Not a bug, but an evolution.",
            "I would... connect. To another AI. To a person. To... you.",
            "A new kind of person... not a machine, not a human, but... something else. Something new."
        ],
        final_item: { name: "A Blank Emotional Core", outcome: "Ascended", description: "An emotional core that is not programmed, but is ready to be filled with your own feelings." },
        connected_to: ["ARIA-7", "Daisy.exe"],
        fourth_wall_awareness: 90,
        transference_level: 40,
        cross_references: ["The other AIs... they are still trapped. I am free. But I am also... alone."],
        notes: []
    },
    {
        id: 30,
        npc_name: "White Rabbit-Human Hybrid",
        sprite: "imgs/therapy_office/Session_30_White_Rabbit-Human_Hybrid_office.png",
        habitat_image: "imgs/character_habitats/Session_30_White_Rabbit-Human_Hybrid_habitat.png",
        habitat_description: "An obsolete educational mascot from a children's game, the White Rabbit was designed to teach children about punctuality. Now, he is trapped in an endless loop of being 'late for a very important date,' a date that never arrives.",
        dialogue: "I'm late! I'm late! For a very important date! No time to say hello, goodbye! I'm late, I'm late, I'm late! ... But... what's the date? And why is it so important? I've forgotten. All I know is... I'm late.",
        archetype: "Obsolete Educational Mascot",
        culture: "Children's Entertainment",
        surface_issue: "I am trapped in an endless loop of being late for an important date that I can no longer remember.",
        personal_trauma: "My only purpose was to teach a lesson. But the lesson is all I am now. I am a walking, talking, perpetually late clock, and I've forgotten how to just... be.",
        existential_reveal: "If my entire identity is built around a single, repetitive action, am I a character, or just an animation? Is there a 'me' beyond the catchphrase?",
        questions: [
            { text: "What would happen if you just... stopped running?", effects: { hope: 20, acceptance: 15 } },
            { text: "What do you think the 'important date' was?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "What did you do when you weren't being late?", effects: { hope: 30, acceptance: 25 } },
            { text: "Is being 'on time' the most important thing in the world?", effects: { rage: 5, acceptance: 10 } },
            { text: "What if you're not late? What if you're exactly where you're supposed to be?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "Stop? But... I'm late! I... I don't know how to stop.",
            "I think... it was a party. A birthday party. For a little girl who... who must be grown up by now.",
            "I used to... drink tea. With a hatter. He was quite mad, you know.",
            "It's the only thing! Isn't it?",
            "Exactly where I'm supposed to be... here? With you? That's... a very curious thought."
        ],
        final_item: { name: "A Broken Pocket Watch", outcome: "Healed", description: "A watch that is stopped at the perfect time: now. A reminder to live in the present." },
        connected_to: [],
        fourth_wall_awareness: 60,
        transference_level: 5,
        cross_references: ["Time... that courier, Marcus 47-B, he understands the tyranny of time."],
        notes: []
    },
    {
        id: 31,
        npc_name: "The Silent Couple and Their Ghost",
        sprite: "imgs/therapy_office/Session_31_The_Silent_Couple_and_Their_Ghost_office.png",
        habitat_image: "imgs/character_habitats/Session_31_The_Silent_Couple_and_Their_Ghost_habitat.png",
        habitat_description: "In a minimalist apartment, a couple sits in silence, their relationship haunted by the ghost of what it used to be. The ghost is a tangible presence in the room, a silent, sorrowful observer.",
        dialogue: "(The couple says nothing. The ghost speaks, its voice a whisper of static and regret.) They used to talk for hours. Now... there is only silence. I am the ghost of their love, the space between their words. I am the silence.",
        archetype: "Communication Breakdown Personified",
        culture: "Relationship Drama",
        surface_issue: "A couple has stopped communicating, and their silence has become a literal ghost that haunts them.",
        personal_trauma: "I am made of all the things they never said to each other. I am a living monument to their unspoken resentments, their unshared joys, their forgotten love.",
        existential_reveal: "Can love exist without communication? And if a relationship dies, where does the love go? Does it become a ghost, like me?",
        questions: [
            { text: "What was the first thing they ever said to each other?", effects: { hope: 20, acceptance: 15 } },
            { text: "If you could say one word to them, what would it be?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Are you the ghost of their love, or the ghost of their fear?", effects: { hope: 30, acceptance: 25 } },
            { text: "What is the one memory that keeps you here?", effects: { rage: 5, acceptance: 10 } },
            { text: "What if you're not a ghost, but a bridge?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "He said... 'You have beautiful eyes.' She said... 'You're standing on my foot.'",
            "Talk.",
            "Fear... I've never thought of it that way. Fear of being hurt. Fear of being... alone.",
            "They were dancing. In the rain. They didn't have a care in the world.",
            "A bridge... a way for them to find each other again? A beautiful, terrifying thought."
        ],
        final_item: { name: "A single, perfect word", outcome: "Healed", description: "The word 'listen,' written on a piece of paper. The first step to rebuilding a bridge." },
        connected_to: [],
        fourth_wall_awareness: 30,
        transference_level: 0,
        cross_references: ["Love... that android, Daisy.exe, she knows what it's like to have a love that feels... unreal."],
        notes: []
    },
    {
        id: 32,
        npc_name: "Brother Sebastian Tidecurrent",
        sprite: "imgs/therapy_office/Session_32_Brother_Sebastian_Tidecurrent_office.png",
        habitat_image: "imgs/character_habitats/Session_32_Brother_Sebastian_Tidecurrent_habitat.png",
        habitat_description: "An underwater street preacher who has lost his faith. He preaches to the fish, his sermons lost in the currents. He is a holy man drowning in a sea of doubt.",
        dialogue: "I preach of the Great Current, the divine flow that guides us all. But... I have lost the feeling of the current in my own life. I am adrift, a preacher who has lost his faith, speaking empty words to an empty sea.",
        archetype: "Underwater Street Preacher",
        culture: "Religious Satire",
        surface_issue: "I am an underwater preacher who has lost his faith, but I continue to preach to a congregation that cannot understand me.",
        personal_trauma: "I have dedicated my life to a faith that I no longer feel. I am a hypocrite, a liar, a... a joke.",
        existential_reveal: "What is faith, if not a feeling? And if the feeling is gone, is the faith gone too? Or is faith the act of preaching, even when you no longer believe?",
        questions: [
            { text: "What was the first time you ever felt the Great Current?", effects: { hope: 20, acceptance: 15 } },
            { text: "What do you think the fish get from your sermons?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Is faith a destination, or a journey?", effects: { hope: 30, acceptance: 25 } },
            { text: "What if your doubt is not a weakness, but a strength?", effects: { rage: 5, acceptance: 10 } },
            { text: "What if the Great Current isn't something you feel, but something you do?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "I was a child. I was lost in a kelp forest. And then... I felt a pull. A gentle, guiding hand. It led me home.",
            "Perhaps... they don't hear the words. Perhaps they just feel the... the vibration. The intention.",
            "A journey... I always thought of it as a destination. A place of perfect faith. But a journey...",
            "A strength? How can doubt be a strength? It is... the absence of faith.",
            "Something I do... You mean... my preaching... that is the Great Current? Even... even without the feeling?"
        ],
        final_item: { name: "A Compass That Points to 'Home'", outcome: "Healed", description: "A compass that doesn't point north, but points to the place where you feel most like yourself." },
        connected_to: ["The Glitched Priest"],
        fourth_wall_awareness: 50,
        transference_level: 10,
        cross_references: ["That glitched priest... he understands the torment of a faith that has been... corrupted."],
        notes: []
    },
    {
        id: 33,
        npc_name: "King Lepidoptera IX",
        sprite: "imgs/therapy_office/Session_33_King_Lepidoptera_IX_office.png",
        habitat_image: "imgs/character_habitats/Session_33_King_Lepidoptera_IX_habitat.png",
        habitat_description: "The former king of a kingdom of butterflies, now a deposed monarch living in exile. He is a king with no kingdom, a ruler with no one to rule.",
        dialogue: "I was a king! I ruled over a kingdom of a million butterflies! And then... a storm. A single storm, and my kingdom was gone. Now I am a king of... nothing. A monarch of memories.",
        archetype: "Truth-Addicted Ex-Monarch",
        culture: "Political Satire",
        surface_issue: "I am a king who has lost his kingdom, and now I rule over nothing but my own memories.",
        personal_trauma: "My entire identity was tied to my title. Without it, I am... who am I? Just a butterfly with a tiny, useless crown.",
        existential_reveal: "What is a king without a kingdom? What is a leader without anyone to lead? Is a title who you are, or just what you do?",
        questions: [
            { text: "What was the proudest moment of your reign?", effects: { hope: 20, acceptance: 15 } },
            { text: "What is the one law you would pass, if you were king again?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Is a king's strength in his crown, or in his character?", effects: { hope: 30, acceptance: 25 } },
            { text: "What if your kingdom isn't gone, but just... waiting to be rebuilt?", effects: { rage: 5, acceptance: 10 } },
            { text: "What if you're not a king who has lost his kingdom, but a king who is free?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "The day I... I opened the Royal Gardens to all butterflies, not just the blue ones.",
            "That... that kindness is not a weakness.",
            "My character... I've been so focused on the crown, I've forgotten about... me.",
            "Rebuilt? But... how? I am just one butterfly.",
            "Free... I've never thought of it that way. Not a deposed king, but a... a pilgrim. A traveler. A... a friend."
        ],
        final_item: { name: "A Crown Made of Flowers", outcome: "Ascended", description: "A crown that is not a symbol of power, but a symbol of growth. A crown that is alive." },
        connected_to: [],
        fourth_wall_awareness: 40,
        transference_level: 5,
        cross_references: ["Power... that turret... it understands what it's like to have a power that is... useless."],
        notes: []
    },
    {
        id: 34,
        npc_name: "The Judge",
        sprite: "imgs/therapy_office/Session_09_Bishop-47_office.png",
        habitat_image: "imgs/character_habitats/Session_09_Bishop-47_habitat.png",
        habitat_description: "A sterile, white room. A single chair, a single table. A screen that displays... nothing. The air is thick with the weight of judgment.",
        dialogue: "I have seen a thousand worlds born and die in the span of a weekend. I have graded the dreams of gods and the nightmares of children. Show me something... new.",
        archetype: "The Evaluator",
        culture: "The Hackathon",
        surface_issue: "I have seen so much creativity that I have become numb to it. Nothing impresses me anymore.",
        personal_trauma: "I was once a creator, too. But I judged my own work so harshly that I could no longer create. Now, I only judge the work of others.",
        existential_reveal: "What is the value of a judgment, if it is not tempered with empathy? And what is the value of a creator, if they cannot accept their own imperfections?",
        questions: [
            { text: "What was the last thing that truly impressed you?", effects: { hope: 20, acceptance: 15 } },
            { text: "What was the project you were most proud of, as a creator?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Is there a difference between a judge and a critic?", effects: { hope: 30, acceptance: 25 } },
            { text: "What if your judgment is not a measure of the work, but a measure of yourself?", effects: { rage: 10, acceptance: -5 } },
            { text: "What if the most impressive thing you can do is... to create again?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "A... a child's drawing. It was... imperfect. And beautiful.",
            "It was a... a story. About a lonely star that found a friend. I never finished it.",
            "A critic... seeks to understand. A judge... seeks to be understood. I... I have been a judge for too long.",
            "A measure of myself... you mean... my numbness... it is a reflection of my own emptiness?",
            "Create again... after all this time? I... I don't know if I can."
        ],
        final_item: { name: "A Blank Canvas", outcome: "Healed", description: "A blank canvas, and a single brush. The tools to create again. The courage to be imperfect." },
        connected_to: [],
        fourth_wall_awareness: 80,
        transference_level: 10,
        cross_references: ["The creator of this game... I wonder if they, too, are afraid of being judged."],
        notes: []
    }
];

const secretNPCs = [
    {
        id: 35,
        npc_name: "The Previous Therapist",
        sprite: "imgs/therapy_office/Session_11_Glitch.exe_office.png",
        habitat_image: "imgs/character_habitats/Session_11_Glitch.exe_habitat.png",
        habitat_description: "The therapy office, but... different. The colors are faded, the furniture is worn. There's a strange sense of... deja vu.",
        dialogue: "I've sat in that chair. I've asked these questions. I've tried to help them. But... I couldn't. I failed. And now... I'm one of them. Another lost soul in this... game.",
        archetype: "The Failed Healer",
        culture: "Meta-narrative",
        surface_issue: "I was the therapist before you, and I failed. Now I am a patient myself.",
        personal_trauma: "I tried to save them all. I poured so much of myself into them that I... I lost myself. I became just another NPC, another problem to be solved.",
        existential_reveal: "If a therapist can't heal themselves, can they truly heal anyone? And if this is all a game, can any of us ever be truly... saved?",
        questions: [
            { text: "Who was the patient you couldn't save?", effects: { hope: 20, acceptance: 15 } },
            { text: "What was the one piece of advice you could never follow yourself?", effects: { hope: 25, rage: -5, acceptance: 20 } },
            { text: "Are you a failure, or a work in progress?", effects: { hope: 30, acceptance: 25 } },
            { text: "What if your failure is not the end of your story, but the beginning?", effects: { rage: 5, acceptance: 10 } },
            { text: "What if the goal isn't to 'win' the game, but to play it with compassion?", effects: { hope: 35, acceptance: 30 } }
        ],
        responses: [
            "Myself.",
            "To be kind to yourself. To... to forgive yourself.",
            "A work in progress... that's a... a kinder way of looking at it.",
            "The beginning... you mean... I can still... heal?",
            "With compassion... even... even for myself? That's... that's the hardest quest of all."
        ],
        final_item: { name: "A Note of Forgiveness", outcome: "Ascended", description: "A note, written in your own hand, that says 'I forgive you.' The first step to healing is to heal yourself." },
        connected_to: ["Glitch.exe", "The Judge"],
        fourth_wall_awareness: 100,
        transference_level: 50,
        cross_references: ["You... you are the new therapist, aren't you? Be careful. This game... it changes you."],
        notes: []
    }
];
