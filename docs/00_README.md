# Snake Clash Arena – Agent Instruction Pack

This package contains the implementation guidance for **Snake Clash Arena – Playable Ad Prototype**.

## Project Summary
- Engine: **Unity 6.3**
- Target: **WebGL mobile**, playable-ad-compatible environments, Luna Playground presentation
- Genre: **Top-down snake arena survival / growth playable prototype**
- Session Goal: **collect 200 coins to win**, or fail if the player snake dies
- Timeline Intent: **small scope, fast execution, playable polish over scalability**

## Core Concept
The player controls a snake in a fixed arena with a virtual joystick. The snake always moves forward in the direction it is facing. Food increases both level and body length. AI snakes share the arena and compete for food. Player-only chests spawn at level milestones and burst coins. The player wins by collecting 200 coins.

## Start State
- Player snake starts with:
  - 1 head
  - 5 body segments
  - Level 5
  - 0 / 200 coins

## Key Combat Rules
### Head vs Head
- Lower level snake dies
- Body converts into food
- If same level: both die

### Head vs Other Snake Body
- Contacted body segment is consumed immediately by the attacker as normal food reward
- Victim body splits at that segment
- Body still connected to victim head remains active
- Detached tail remainder converts into loose food

## Important Implementation Constraints
- Keep the architecture simple and implementation-oriented
- Prioritize readability and stability over production-scale abstraction
- Avoid expensive runtime patterns when a simpler approach works
- Use **transform-driven movement**, not physics-driven locomotion
- Use **UGUI** for joystick and HUD
- Use **object pooling** for food, coins, and lightweight popup/VFX objects

## Additional Performance Constraint
Minimize overhead aggressively:
- Prefer full inspector wiring for scene objects and prefab child/component references
- Prefer serialized references over runtime `Find*` lookups
- For dynamically created objects, cache references immediately after creation or acquisition
- Do **not** repeatedly call `GetComponent`, `Find`, `FindObjectOfType`, `GetComponentInChildren`, `Camera.main`, or similar lookup APIs every time they are needed if the reference can be cached once
- Avoid per-frame allocations wherever possible

## Recommended File Order
1. `01_PRODUCT_BRIEF.md`
2. `02_PRD.md`
3. `03_TECH_DESIGN.md`
4. `04_ARCHITECTURE_RULES.md`
5. `05_IMPLEMENTATION_TASKS.md`
6. `06_ACCEPTANCE_CHECKLIST.md`
7. `07_CODING_RULES.md`
8. `08_SCRIPT_MAP.md`

## Agent Instruction
Read all documents before implementing. Treat the PRD and Tech Design as the source of truth. If trade-offs are needed, choose the option that keeps the prototype lighter, more stable, and easier to demonstrate in WebGL mobile / Luna Playground.
