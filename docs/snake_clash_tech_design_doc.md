# Product Requirements Document (PRD)

## Project Title
Snake Clash Arena – Playable Ad Prototype

## Document Version
v2.0

## Author / Role
UA Playable Ads Developer

## Engine / Tech Stack
Unity 6.3

## Target Build
WebGL for mobile browsers, playable ad environments, and Luna Playground compatible deployment

## Development Timeline
6 working days

## Language
English

---

## 1. Product Overview
Snake Clash Arena is a lightweight top-down snake arena prototype designed for mobile playable ads.

The player controls a snake inside a fixed arena using a virtual joystick. The snake always moves forward in the direction it is facing, while the joystick is used to steer. Several AI-controlled snakes move in the same arena and compete for food.

The core progression loop is based on growth, survival, and chest reward moments:
- food increases both level and body length
- reaching level milestones spawns treasure chests
- opening a chest scatters coins around the arena
- only the player can collect coins
- the player wins by collecting 200 coins

The player loses if the snake dies.

This prototype is intended to be readable within seconds, visually active from the start, and lightweight enough for WebGL/mobile browser deployment.

---

## 2. Product Goal
The main goal of this prototype is to demonstrate the ability to:

- build a compact and engaging playable-ad-friendly gameplay loop
- deliver responsive mobile control using Unity 6.3
- implement readable snake growth and collision mechanics
- create satisfying reward moments through chest and coin collection
- keep the project lightweight and suitable for browser/mobile playable presentation

---

## 3. Core Fantasy
The player controls a growing snake in a small competitive arena, eats to become stronger, cuts through rivals, harvests their remains, and races to fill a coin bar through milestone chest rewards.

The intended emotional pillars are:
- immediate control satisfaction
- visible growth
- tension from rival snakes
- rewarding cut/kill moments
- a clear coin-driven victory target

---

## 4. Design Goals

### 4.1 Instant Readability
The player should understand the basic action within the first few seconds:
move, eat, grow, avoid stronger snakes, collect coins.

### 4.2 Mobile-Friendly Control
The player should be able to control the snake naturally with one thumb using a virtual joystick.

### 4.3 Clear Cause and Effect
Food, snake collisions, chest rewards, and coin collection must produce visible and immediate gameplay outcomes.

### 4.4 Short-Session Engagement
A full match should feel active and replayable in a short playable-ad-length session.

### 4.5 Lightweight Technical Execution
The prototype should remain simple, performant, and easy to deploy to WebGL/mobile environments.

---

## 5. Core Gameplay Loop
1. Start as a small snake at level 5 with 5 body segments
2. Use virtual joystick steering to navigate the arena
3. Eat food to gain +1 level and +1 body segment
4. Avoid stronger snakes and exploit weaker snakes
5. Reach defined level milestones to spawn treasure chests
6. Open chests and collect scattered coins
7. Kill or cut rival snakes to create more food opportunities
8. Continue growing and collecting coins
9. Win at 200 coins or lose when the player snake dies

---

## 6. Starting State
At match start, the player snake consists of:
- 1 head
- 5 body segments
- Level 5
- Coin progress: 0 / 200

The arena contains:
- ambient food pickups
- several AI snakes
- arena boundaries that keep the action compact and readable

---

## 7. Core Systems

### 7.1 Movement System
- The player snake always moves forward
- The player uses a virtual joystick to steer direction
- The snake cannot fully stop during gameplay
- Movement should feel smooth, immediate, and readable on mobile

### 7.2 Growth System
- Eating 1 food gives +1 level
- Eating 1 food gives +1 body segment
- Body length visually reflects growth
- Level is used to determine head-to-head combat outcome
- Losing body segments does not reduce level

### 7.3 AI Snake System
- AI snakes move in the same arena as the player
- AI snakes can eat food and grow
- AI snakes create moving threats and opportunities
- AI snakes do not collect coins from chest bursts
- AI behavior only needs to be simple, readable, and believable

### 7.4 Chest and Coin System
- Treasure chests spawn when the player reaches predefined level milestones
- When the player touches a chest, it opens and bursts coins around it
- Only the player can collect those coins
- Each collected coin increases the coin progress bar
- Reaching 200 coins triggers victory

### 7.5 Snake Collision System
Snake combat has two primary rule sets.

#### Head-to-Head Collision
- When two snake heads collide, compare their levels
- The snake with the lower level dies
- The defeated snake loses its head
- Its remaining body breaks into food pieces
- If both snakes have the same level, both die

#### Head-to-Body Collision
- When a snake head touches another snake’s body, the contacted segment is consumed like food
- The body portion still connected to the original head remains active
- The detached remainder breaks apart into food pieces
- The attacking snake gains the normal reward from the contacted segment immediately

### 7.6 End Conditions
The match ends when:
- the player dies -> fail
- the player collects 200 coins -> win

---

## 8. Gameplay Rules in Detail

### 8.1 Level Rule
- Level increases only from food consumption
- Level does not decrease when body segments are lost
- Level is used only for head-to-head outcome comparison in this prototype

### 8.2 Body Rule
- Each food pickup adds one body segment
- Body can be shortened by collision-based cutting
- Detached body segments become food

### 8.3 Coin Rule
- Coins are a player-only victory resource
- AI snakes ignore coins
- Coin progress is tracked by a visible UI bar

### 8.4 Chest Rule
- Chests are milestone rewards tied to player level progression
- Each milestone should spawn only once
- Chests create burst collection moments that break up the normal food loop

---

## 9. Feature Scope

### 9.1 In Scope
- Fixed arena gameplay
- Player-controlled snake with virtual joystick
- AI-controlled snakes
- Ambient food pickups
- Snake growth through food
- Level system
- Head-to-head collision resolution
- Head-to-body cut resolution
- Body segment conversion into food
- Treasure chest spawn on player milestones
- Coin burst and player-only coin collection
- Coin progress bar
- Win/fail flow
- Retry
- Lightweight VFX/SFX

### 9.2 Out of Scope
- Online multiplayer
- Matchmaking
- Meta progression
- Shop systems
- Cosmetic systems
- Advanced AI tactics
- Procedural arena generation
- Ads SDK integration unless explicitly requested later

---

## 10. UX Requirements for Playable Ad Context
- The core action must be understandable without lengthy instruction
- The arena should look active immediately after start
- Movement and growth must be visible and satisfying
- Rival snakes must create readable tension, not visual chaos
- Chest reward moments must stand out clearly
- The player should understand that coins are the main win objective
- The session should be short and retry-friendly

---

## 11. Technical Constraints
- Must be developed in Unity 6.3
- Must remain lightweight enough for WebGL/mobile deployment
- Must be suitable for browser-based demonstration such as Luna Playground
- Must not rely on ready-made gameplay templates or frameworks
- Must favor simple, robust systems over scalability-heavy architecture

---

## 12. Success Criteria
The prototype will be considered successful if:
- movement feels responsive on mobile
- snake growth is visually clear
- collision outcomes are understandable and consistent
- chest reward moments feel satisfying
- the coin objective gives the match a clear direction
- the prototype performs acceptably in WebGL/mobile browser conditions
- the final result is polished enough to present as a strong playable ad prototype

---

## 13. Production Priorities
Priority order:
1. player movement and body follow stability
2. food growth loop
3. collision rules and body cutting
4. AI snakes
5. chest and coin system
6. UI, VFX, SFX, and polish

---

## 14. Risks and Mitigations

### Risk 1: Body cutting becomes technically complex
**Mitigation:** treat body segments as modular nodes that can remain linked or convert into food when detached.

### Risk 2: AI snakes feel unfair or too chaotic
**Mitigation:** keep AI simple, readable, and rule-based.

### Risk 3: Coin victory feels disconnected from combat
**Mitigation:** tie chest spawning directly to player level milestones so growth and aggression create more reward opportunities.

### Risk 4: WebGL performance drops when many food pieces exist
**Mitigation:** keep arena compact, limit spawn density where necessary, and use object pooling for food and coin items.

---

## 15. Deliverables
The final deliverables for this project are:
- Unity project / package
- WebGL playable build
- Gameplay video
- Brief proposal document in English
- Simple plan document

---

## 16. Final Positioning
This prototype is not intended to be a full snake .io production game. It is a focused arena survival and growth prototype built to demonstrate strong playable-ad-oriented design, technical execution, and presentation quality in Unity 6.3.