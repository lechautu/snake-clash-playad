# Technical Design Document

## Project Title
Snake Clash Arena – Playable Ad Prototype

## Document Version
v1.0

## Author / Role
UA Playable Ads Developer

## Engine
Unity 6.3

## Target Platform
WebGL for mobile browsers, playable ad environments, and Luna Playground compatible deployment

## Development Goal
Build a lightweight top-down snake arena prototype with simple AI rivals, milestone chest rewards, coin-based victory, and readable collision outcomes, optimized for mobile playable ad presentation.

---

## 1. Technical Objective
This document defines the technical architecture and implementation plan for **Snake Clash Arena**.

The prototype is a fixed arena survival/growth game where:
- the player controls a snake with a virtual joystick
- the snake auto-moves forward relative to its facing direction
- AI snakes roam the same arena
- food increases both level and body length
- chest rewards spawn at player level milestones
- coins scattered from chests are collectible by the player only
- the match ends on player death or when 200 coins are collected

The implementation must remain:
- lightweight for WebGL/mobile browser execution
- readable for playable ad use
- fast to implement
- simple to tune
- robust enough to handle snake cutting and death conversion into food

---

## 2. Technical Scope
### In Scope
- Single-scene arena gameplay
- Virtual joystick movement
- Auto-forward snake locomotion
- Snake body follow chain
- Food pickup loop
- Level progression
- AI snakes with simple rule-based behavior
- Head-to-head collision resolution by level
- Head-to-body cut logic
- Body segment detachment and conversion to food
- Chest spawn at player level milestones
- Coin burst and player-only coin collection
- Coin progress bar
- Win/fail states
- Retry flow
- Lightweight VFX/SFX

### Out of Scope
- Online multiplayer
- Networking
- Save system
- Progression meta
- Shop/cosmetics
- Advanced AI tactics
- Multiple arenas
- Procedural generation
- Ads SDK integration
- Heavy third-party gameplay frameworks

---

## 3. High-Level Architecture
Main layers:
1. **Game Flow Layer**
2. **Arena Layer**
3. **Snake Runtime Layer**
4. **Interaction Layer**
5. **UI Layer**
6. **Feedback Layer**

Keep the architecture flat and implementation-oriented.

---

## 4. Scene Structure
### Suggested Root Hierarchy
- `GameRoot`
  - `GameManager`
  - `ArenaManager`
  - `SnakeFactory`
  - `FoodManager`
  - `ChestManager`
  - `CoinManager`
  - `UIRoot`
  - `CameraRoot`
  - `AudioRoot`

### Arena Content
- `ArenaBounds`
- `FoodContainer`
- `CoinContainer`
- `ChestContainer`
- `SnakeContainer`
- `VFXContainer`

Principles:
- Keep hierarchy shallow
- Keep manager references explicit
- Keep pooled objects under dedicated containers
- Share the same snake runtime between player and AI

---

## 5. Shared Snake Runtime
### Suggested Classes
- `SnakeControllerBase`
- `PlayerSnakeController`
- `AISnakeController`
- `SnakeBodyController`
- `SnakeSegmentNode`
- `SnakeCollisionResolver`

### Core Principle
A snake is a head plus an ordered list of modular body nodes. Nodes can remain linked or be detached and converted into food.

---

## 6. Game State System
### Enum
- `Boot`
- `Ready`
- `Playing`
- `Win`
- `Fail`

A centralized `GameManager` is enough. A state machine framework is unnecessary.

---

## 7. Movement System
### Player Movement
- Always moves forward
- Virtual joystick controls steering
- Transform-driven movement only
- No full stop

### Key Parameters
- `moveSpeed`
- `turnSpeed`
- `rotationLerp`

### AI Movement
Use the same movement model as the player, but steering comes from a lightweight AI brain.

### AI Priority Suggestions
1. avoid arena boundary
2. avoid nearby stronger enemy head
3. seek nearby food
4. opportunistically approach weaker target or loose food cluster
5. wander when no strong target exists

AI decisions can update at a lower frequency than rendering, such as every 0.1–0.25 seconds.

---

## 8. Snake Body System
### Representation
Use an ordered list for active body segments.
Recommended data:
- `List<SnakeSegmentNode> activeSegments`
- head transform reference
- sampled head path positions for follow behavior

### Follow Implementation
Use **position history sampling**:
- record head positions over traveled distance or time
- each segment follows an offset sample behind the leader
- prioritize readable spacing over realism

### Starting State
Player starts with:
- level 5
- 5 body segments

AI snakes may start smaller or varied.

---

## 9. Progression Model
### Level
- +1 level per food
- level never decreases when body is cut
- level is used for head-to-head comparison only

### Body Length
- +1 body segment per food
- body can shrink through cuts or death
- body length is intentionally separate from level

---

## 10. Food System
### FoodItem
- grants +1 level and +1 body segment
- can be consumed by player or AI

### Food Sources
- ambient arena food
- dead snake body conversion
- detached tail conversion

### Food Manager
Use pooling.
Responsibilities:
- spawn initial food
- maintain target food density
- convert detached/dead body nodes into food
- recycle pooled instances

---

## 11. Chest and Coin System
### Chest Milestones
Use serialized milestone levels, for example:
- 10
- 20
- 35
- 50

### Chest Rules
- spawned only for the player when milestones are reached
- each milestone triggers once
- touching chest opens it and triggers coin burst
- AI ignores chests

### Coin Rules
- only player can collect coins
- each coin increments current coin total
- at 200 coins, trigger win state

### Coin Burst
- spawn a moderate radial scatter around chest position
- keep count and VFX light enough for WebGL

---

## 12. Collision and Combat Resolution
### Core Contacts
- head vs food
- head vs chest
- player head vs coin
- head vs enemy head
- head vs enemy body

Centralize snake-vs-snake rules.

### Head-to-Head
- compare level
- lower level dies
- body converts to food
- tie => both die

### Head-to-Body
When a snake head touches another snake’s body:
1. identify contacted segment index
2. attacker consumes contacted segment immediately as normal food reward
3. victim body splits at that segment
4. section still connected to victim head remains active
5. detached tail remainder converts to loose food
6. rebuild victim active body chain

### Death Conversion
When a snake dies:
- disable head controller
- convert all remaining body nodes into food
- despawn head with feedback

---

## 13. Arena System
### Shape
Use a compact fixed arena, ideally rounded rectangle or square.

### Boundary Handling
Prefer steering away from bounds and optional clamp fallback, rather than hard wall collision.

---

## 14. UI System
### Required Elements
- virtual joystick
- level display
- coin progress bar (0–200)
- optional short tutorial hint
- result panel with retry

### Tech Choice
Use **UGUI**.

---

## 15. Feedback and Audio
### Feedback Events
- food pickup
- level increase
- body growth
- body cut
- head-to-head kill
- chest open
- coin collection
- win/fail

### Audio
Use a simple one-shot audio manager for pickup, hit, death, chest, win, and fail sounds.

---

## 16. Pooling Strategy
Strongly recommended for:
- food items
- coins
- lightweight popups/VFX

This is important because snake death and cutting can spawn many items in bursts.

---

## 17. Camera Design
Use a simple top-down or slightly angled follow camera:
- smooth follow player
- keep enough surrounding area visible for anticipation
- avoid complex zoom or cinematic logic

---

## 18. Data Design
Prefer inspector-driven serialized tuning values.

Good candidates:
- move speed
- turn speed
- segment spacing
- AI decision interval
- milestone levels
- coins per chest
- initial food count
- AI snake starting size
- win coin target

Only use ScriptableObjects if they clearly simplify config without adding overhead.

---

## 19. Performance and Reference Management Constraints
### Mandatory Constraint
Minimize overhead as much as possible.

### Rules
- Prefer explicit inspector references to pre-placed scene objects
- Prefer explicit inspector references to prefab children/components already present in the prefab
- Avoid repeated lookup-based APIs at runtime
- If a dynamically created object is needed later, cache the required references immediately after creation/acquisition
- Never rely on repeated `GetComponent`, `GetComponentInChildren`, `Find`, `FindObjectOfType`, `transform.Find`, `Camera.main`, or equivalent calls inside update loops or repeated gameplay paths when the value can be cached
- Avoid per-frame allocations, especially in movement, AI, body follow, collision, and pooling code

### Preferred Pattern
- serialize references when possible
- cache component references in `Awake` / initialization
- cache dynamic references once on spawn / pool checkout
- pass references directly where ownership is clear

---

## 20. Proposed Script List
### Core
- `GameManager`
- `ArenaManager`
- `SceneBootstrap`
- `GameState`

### Snake
- `SnakeControllerBase`
- `PlayerSnakeController`
- `AISnakeController`
- `AISnakeBrain`
- `SnakeBodyController`
- `SnakeSegmentNode`
- `SnakeCollisionResolver`

### Resources
- `FoodItem`
- `FoodManager`
- `ChestManager`
- `ChestPickup`
- `CoinManager`
- `CoinPickup`

### UI
- `HUDController`
- `CoinBarController`
- `ResultPanelController`
- `VirtualJoystickInput`
- `VirtualJoystickView`

### Support
- `ArenaCameraFollow`
- `AudioManager`
- `FeedbackManager`
- lightweight object pool utility

---

## 21. Update Order Strategy
Recommended order:
1. read player input / update AI decisions
2. move snake heads
3. record head positions
4. update body chains
5. resolve interactions/collisions
6. update UI from state changes
7. update camera

Consistency matters more than complexity.

---

## 22. Retry / Reset Strategy
Use scene reload for MVP retry.

---

## 23. Edge Cases
Guard against:
- duplicate collision resolution in one frame
- head-to-head and head-to-body resolving simultaneously
- cutting first or last segment
- dead snake still interacting
- AI collecting coins/chests by mistake
- coin total exceeding target without win state
- segment list desync after cut

---

## 24. Implementation Priorities
### Phase 1
- player movement
- body follow chain
- food consumption
- level/body growth

### Phase 2
- AI movement
- ambient food competition
- head-to-head collision

### Phase 3
- head-to-body cut logic
- detached tail conversion to food
- snake death conversion

### Phase 4
- chest milestone system
- coin burst and coin collection
- coin bar and win flow

### Phase 5
- VFX/SFX/UI polish
- WebGL tuning
- Luna presentation pass
