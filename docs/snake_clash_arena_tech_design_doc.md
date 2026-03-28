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
A simple modular runtime architecture is sufficient.

Main layers:

1. **Game Flow Layer**
   - controls state transitions
   - handles start, win, fail, retry

2. **Arena Layer**
   - contains food, chests, coins, AI snakes, arena bounds

3. **Snake Runtime Layer**
   - shared runtime model for player and AI snakes
   - controls movement, body chain, level, death, cut logic

4. **Interaction Layer**
   - food pickup
   - chest activation
   - coin collection
   - snake collision resolution

5. **UI Layer**
   - level display
   - coin bar
   - optional tutorial hint
   - result panel

6. **Feedback Layer**
   - hit feedback
   - pickup feedback
   - chest burst feedback
   - death feedback
   - UI reaction

Architecture must remain flat and implementation-oriented. Avoid unnecessary abstraction.

---

## 4. Scene Structure
A single gameplay scene is recommended.

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

### Principles
- Keep hierarchy shallow
- Keep managers explicit
- Keep pooled objects under dedicated containers
- Separate player snake and AI snakes only by controller type, not by fully separate systems

---

## 5. Core Runtime Model

## 5.1 Shared Snake Runtime
Both the player snake and AI snakes should use the same core snake model.

### Suggested Class Split
- `SnakeControllerBase`
- `PlayerSnakeController`
- `AISnakeController`
- `SnakeBodyController`
- `SnakeSegmentNode`
- `SnakeCollisionResolver`

### Responsibilities
`SnakeControllerBase`
- owns snake identity and references
- manages transform root, head, body, level, alive/dead state
- coordinates movement and interactions

`PlayerSnakeController`
- reads virtual joystick input
- applies steering

`AISnakeController`
- reads AI decision output
- applies steering

`SnakeBodyController`
- manages linked segment list
- updates follow positions
- adds/removes/cuts segments

`SnakeSegmentNode`
- represents a single body node
- can switch between linked body state and loose food state indirectly through conversion

`SnakeCollisionResolver`
- resolves head-to-head and head-to-body contact outcomes

### Design Principle
A snake is a head plus an ordered list of body nodes. Every body node is modular and can be detached from the chain.

---

## 6. Game State System
A simple enum-based game state is sufficient.

### Enum
- `Boot`
- `Ready`
- `Playing`
- `Win`
- `Fail`

### Responsibilities
- initialize scene systems
- enable player control at start
- stop gameplay on win/fail
- trigger retry/reset flow

A full state machine framework is unnecessary.

---

## 7. Movement System

## 7.1 Player Movement
The player snake moves forward continuously.
A virtual joystick controls steering direction.

### Suggested Class
`VirtualJoystickInput`
`PlayerSnakeController`

### Control Rules
- snake always moves forward at constant speed
- joystick controls turn direction or desired heading
- no full stop
- rotation smoothing may be used for readability

### Key Parameters
- `moveSpeed`
- `turnSpeed`
- `rotationLerp`

### Implementation Notes
- movement should be transform-driven, not physics-driven
- use screen-space joystick UI for mobile/browser compatibility
- mouse drag simulation in editor is useful for quick testing

## 7.2 AI Movement
AI snakes use the same movement model as the player but receive steering from AI logic.

### Suggested Class
`AISnakeController`
`AISnakeBrain`

### AI Strategy (MVP)
Use lightweight utility scoring or rule priority, not complex planning.

Candidate priorities:
1. avoid arena boundary
2. avoid nearby stronger enemy head
3. seek nearby food
4. opportunistically approach weaker target or loose food cluster
5. wander when no high-value target is found

### Notes
AI does not need to be smart. It only needs to create readable competition and moving obstacles.

---

## 8. Snake Body System

## 8.1 Body Representation
The snake body consists of ordered segment nodes following the head.

### Data Structure
Use an ordered list or linked-list-like model for active segments.

Recommended internal data:
- `List<SnakeSegmentNode> activeSegments`
- head transform reference
- sampled head path positions for follow behavior

### Why
This model supports:
- add segment at tail
- remove tail segments
- cut body at arbitrary index
- convert detached segments into loose food

## 8.2 Follow Implementation
Recommended approach: **position history sampling**.

### Flow
- record head positions over time or over traveled distance
- each segment follows an offset sample behind the previous leader
- maintain readable spacing, not physical realism

### Parameters
- `segmentSpacing`
- `positionSampleDistance`
- `followLerp`
- `maxHistoryPoints`

### Notes
Avoid joints/physics. Stability and readability matter more than realism.

## 8.3 Starting Body State
At game start, the player snake has:
- level 5
- 5 body segments

AI snakes may start with smaller or varied values for balance.

---

## 9. Progression Model

## 9.1 Level
Level is a snake stat used for head-to-head resolution.

### Rules
- each food pickup grants +1 level
- each food pickup adds +1 body segment
- losing body segments does not reduce level

### Ownership
`SnakeControllerBase` should own authoritative level state.

### API
- `AddLevel(int amount)`
- `GetLevel()`

## 9.2 Body Length
Body length is separate from level.

### Rules
- body increases when food is consumed
- body decreases when segments are cut or lost
- body count can be smaller than level

This separation is intentional and must be preserved.

---

## 10. Food System

## 10.1 Food Entity
Food is the basic growth resource for all snakes.

### Suggested Class
`FoodItem`

### Rules
- touching food consumes it immediately
- food grants +1 level and +1 body segment to the consuming snake
- food is available to player and AI snakes

### Spawn Sources
- ambient arena food
- converted dead snake body
- converted detached snake body remainder

## 10.2 Food Management
Use a pooled object system.

### Suggested Class
`FoodManager`

### Responsibilities
- spawn initial food
- respawn or maintain target density
- convert body nodes into food items
- reuse pooled food objects

### Technical Reason
Food count may spike after snake death/cut events. Pooling reduces allocation spikes in WebGL.

---

## 11. Chest and Coin System

## 11.1 Chest Milestone System
Chests spawn when the player reaches predefined level milestones.

### Suggested Milestone Model
Use serialized list of milestone levels, for example:
- 10
- 20
- 35
- 50

Final values can be tuned later.

### Suggested Class
`ChestManager`

### Responsibilities
- listen to player level changes
- spawn chest when a milestone is reached for the first time
- prevent duplicate chest spawn for the same milestone

## 11.2 Chest Entity
### Suggested Class
`ChestPickup`

### Rules
- chest remains in arena until touched by player
- touching chest triggers open state and coin burst
- AI snakes ignore chest interaction

## 11.3 Coin Entity
### Suggested Class
`CoinPickup`

### Rules
- only the player can collect coins
- each coin increases current coin total
- collecting coins updates coin progress bar
- reaching 200 total coins triggers win state

## 11.4 Coin Burst Logic
### Suggested Class
`CoinManager`

### Flow
- chest opens
- spawn a burst of coins in a radial scatter around chest position
- coins settle or float lightly for readability
- player collects them by contact

### Parameters
- `coinsPerChest`
- `burstRadius`
- `burstPattern`
- `coinValue`
- `targetCoinTotal = 200`

### Notes
Keep coin burst count moderate. The visual reward should be strong without stressing WebGL.

---

## 12. Collision and Combat Resolution

## 12.1 Collision Strategy
Use trigger/collision volumes on snake heads and body segments.

### Core Contacts
- head vs food
- head vs chest
- player head vs coin
- head vs enemy head
- head vs enemy body

Centralize snake-vs-snake rules to avoid inconsistent outcomes.

## 12.2 Head-to-Head Rule
When two snake heads collide:
- compare level values
- lower-level snake dies
- dead snake loses head and entire remaining body converts into food

### Tie Case
Recommended MVP rule:
- both snakes die on exact level tie

### Reason
This is simple, deterministic, and easy to communicate visually.

## 12.3 Head-to-Body Rule
When a snake head touches another snake’s body:
- identify the contacted body segment index
- the contacted segment is consumed by the attacker immediately as food
- the victim body is split at that point
- the portion still connected to the victim head remains active
- the detached tail remainder converts into loose food items

### Important Clarification
The attacker should gain the normal food reward from the contacted segment immediately.
This improves responsiveness and makes cutting feel rewarding.

### Technical Sequence
1. detect victim segment index
2. attacker consumes contacted segment
3. remove contacted segment from victim chain
4. detach remaining tail after that index
5. convert detached remainder into food items
6. rebuild victim active body chain

## 12.4 Death Conversion
When a snake dies:
- disable its head controller
- convert all remaining linked body segments into food items
- optionally convert head into a special food item or simply despawn it

### Recommendation
Despawn head visually with feedback; only body becomes food. This is cleaner for MVP.

---

## 13. AI Design

## 13.1 AI Responsibilities
- move around arena
- eat food
- grow naturally
- create danger and opportunity for the player
- ignore coins and chests

## 13.2 AI Brain Model
Use a lightweight scoring model per update interval.

### Candidate Inputs
- nearest food distance
- nearest boundary distance
- nearby stronger enemy head threat
- nearby weaker enemy opportunity
- recent steering direction

### Candidate Outputs
- desired heading vector
- short-lived steering target

### Update Strategy
AI decisions can run at lower frequency than rendering, for example every 0.1–0.25 seconds.

### Notes
This reduces CPU overhead and still looks acceptable.

---

## 14. Arena System

## 14.1 Arena Shape
Use a compact fixed arena.

### Recommendation
A rounded rectangle or square playfield with soft steering correction near bounds.

## 14.2 Boundary Handling
Avoid hard stop where possible.

Recommended behavior:
- steer snakes away from bounds
- optionally clamp position as last fallback

### Why
Hard collision against walls can look awkward for a snake game. Steering away feels smoother.

---

## 15. UI System

## 15.1 Required UI Elements
- virtual joystick
- player level display
- coin progress bar (0 to 200)
- optional short tutorial hint
- result panel with retry

## 15.2 Suggested Classes
- `HUDController`
- `CoinBarController`
- `ResultPanelController`
- `VirtualJoystickView`

## 15.3 Tech Choice
Use **UGUI** for speed and low integration risk.

### Why
UGUI is the fastest practical option for a short playable prototype in Unity 6.3.

---

## 16. Feedback System

## 16.1 Feedback Events
Provide lightweight feedback for:
- food pickup
- level increase
- body growth
- body cut
- head-to-head kill
- chest open
- coin collection
- win/fail transition

## 16.2 Suggested Methods
- scale punch
- quick particles
- floating text for level/coin gains
- screen-space UI response
- short one-shot sounds

## 16.3 Performance Note
Feedback should remain cheap. Avoid large particle counts or expensive shaders.

---

## 17. Audio System
A minimal audio system is sufficient.

### Suggested Events
- food pickup
- coin pickup
- chest open
- body cut / hit
- death
- win
- fail

### Suggested Class
`AudioManager`

Use simple one-shot playback routing.

---

## 18. Object Pooling Strategy
Pooling is strongly recommended for:
- food items
- coins
- lightweight popups/VFX

### Why
This prototype can spawn many food items quickly from snake death or body cutting. Pooling reduces garbage and runtime spikes in WebGL/mobile.

---

## 19. Camera Design
Use a simple top-down or slightly angled follow camera.

### Suggested Behavior
- follow player smoothly
- keep enough surrounding area visible for anticipation
- maintain stable framing

### Suggested Class
`ArenaCameraFollow`

Avoid dynamic zoom or cinematic behaviors unless time remains.

---

## 20. Data Design
For this prototype, use inspector-driven serialized tuning values.

### Good Candidates for Serialized Data
- snake move speed
- turn speed
- segment spacing
- AI decision interval
- milestone levels
- coins per chest
- initial food count
- AI snake starting size
- win coin target

### Optional ScriptableObjects
Only use if clearly helpful for:
- snake config presets
- milestone config
- audio tables

Do not build a heavy data pipeline.

---

## 21. Proposed Script List

### Core
- `GameManager`
- `ArenaManager`
- `SceneBootstrap`
- `GameState`

### Player / Snake
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
- `ObjectPool<T>` or equivalent lightweight pooling utility

---

## 22. Update Order Strategy
Stable update order is important.

### Recommended Order
1. read player input / update AI decisions
2. move snake heads
3. record head positions
4. update snake body chains
5. resolve interactions/collisions
6. update UI from state changes
7. update camera

### Practical Suggestion
- input and AI in `Update`
- movement and body follow in `Update` or `LateUpdate` consistently
- camera in `LateUpdate`

Consistency is more important than sophistication.

---

## 23. Retry / Reset Strategy
### Recommendation
Use scene reload for MVP retry.

### Why
This is the lowest-risk reset path during a short production schedule.

If a manual reset path is implemented later, it must correctly reset:
- player snake
- AI snakes
- food state
- chest milestones
- coin total
- UI state

---

## 24. WebGL / Mobile Considerations

### Performance
- keep active object counts moderate
- pool food and coin objects
- limit particle count
- keep materials simple
- reduce per-frame allocations

### Input
- one-thumb joystick control
- mouse simulation in editor
- avoid multi-touch dependence

### Presentation
- readable UI on small screens
- compact arena to keep action visible
- strong contrast between food, coin, chest, player, and AI snakes

### Luna Playground Fit
- loading should stay light
- first interaction must be obvious
- the game should look active immediately after start

---

## 25. Edge Cases
Important edge cases to guard against:
- same collision processed twice in one frame
- head-to-head and head-to-body both firing at nearly the same moment
- cutting at first or last body segment
- dead snake still collecting food
- AI interacting with coins or chests accidentally
- coin total exceeding target without proper win trigger
- segment list desync after cut
- empty body snake continuing invalid movement state

### Mitigation Rules
- centralize collision resolution
- add alive/dead guards
- clamp coin and level transitions where needed
- rebuild segment chain immediately after cut
- use one-time activation flags on chest/open events

---

## 26. Tuning Parameters
Expose the following values in inspector:

### Snake Movement
- move speed
- turn speed
- rotation smoothing

### Snake Body
- initial player segments = 5
- initial player level = 5
- segment spacing
- follow smoothing

### AI
- number of AI snakes
- AI decision interval
- threat radius
- food seek radius
- wander weight

### Resources
- initial food count
- food respawn target
- coins per chest
- burst radius
- milestone levels
- win coin target = 200

---

## 27. Development Priorities
Recommended implementation order:

### Phase 1
- player movement
- body follow chain
- food consumption
- level/body growth

### Phase 2
- AI snake movement
- ambient food competition
- head-to-head collision

### Phase 3
- head-to-body cut logic
- detached tail conversion to food
- snake death conversion

### Phase 4
- chest milestone system
- coin burst and player coin collection
- coin bar and win flow

### Phase 5
- VFX/SFX/UI polish
- WebGL tuning
- Luna presentation pass

---

## 28. Testing Checklist

### Functional
- player joystick movement works on touch and mouse
- food grants +1 level and +1 body segment
- level does not decrease when body is cut
- head-to-head collision resolves by level correctly
- tie head-to-head kills both snakes if using tie-death rule
- head-to-body cut splits victim body correctly
- detached body becomes food
- chest spawns only once per milestone
- only player collects coins
- reaching 200 coins wins
- player death fails
- retry restores valid initial state

### UX
- movement feels immediate
- chest reward moments are noticeable
- player can understand coin objective quickly
- AI adds tension without overwhelming first-time players

### Technical
- no major GC spikes during repeated death/cut events
- pooled objects recycle correctly
- no orphaned segment nodes remain after split/death
- browser execution remains stable

---

## 29. Trade-Off Decisions

### Decision 1: Transform-driven movement over physics-based locomotion
Chosen for predictability, easier tuning, and lower WebGL risk.

### Decision 2: Shared snake runtime for player and AI
Chosen to reduce duplicated logic and keep collision/body rules consistent.

### Decision 3: Inspector-driven tuning over complex data architecture
Chosen for rapid iteration.

### Decision 4: UGUI over UI Toolkit
Chosen for implementation speed and lower risk.

### Decision 5: Rule-based AI over advanced behavior systems
Chosen because readable pressure is more important than deep AI.

### Decision 6: Segment modularity over monolithic body mesh logic
Chosen because body cutting is a core mechanic and requires segment-level control.

---

## 30. Final Notes
This technical design is intentionally optimized for fast execution and playable clarity. The most critical implementation challenge is the snake body split logic, so the project should be built around a modular body node model from the start. Everything else—AI, chest rewards, coin progression, and polish—should stay lightweight and serve the readability of the arena survival loop.

