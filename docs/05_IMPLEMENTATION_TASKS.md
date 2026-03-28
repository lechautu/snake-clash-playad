# Implementation Tasks

## Phase 1 – Foundation
### Task 1: Scene Bootstrap
- Create gameplay scene root structure
- Create core managers
- Wire inspector references explicitly
- Ensure no runtime scene searching is required for base setup

### Task 2: Virtual Joystick
- Implement mobile-friendly UGUI joystick
- Support mouse in editor for testing
- Expose normalized steering output
- Cache UI references once

### Task 3: Player Snake Movement
- Implement auto-forward transform-driven locomotion
- Implement steering from joystick input
- Add basic boundary-safe behavior
- Expose speed/turn tuning in inspector

### Task 4: Snake Body Follow
- Implement ordered body chain
- Use position-history-based follow logic
- Start player with 5 body segments and level 5
- Keep spacing readable and stable

## Phase 2 – Growth Loop
### Task 5: Food System
- Create pooled food prefab and manager
- Spawn initial ambient food
- Consume food on snake head contact
- Apply +1 level and +1 body segment
- Maintain target food density if needed

### Task 6: Shared Snake Runtime for AI
- Create AI snake controller using same core snake/body model
- Give AI a simple steering brain
- AI should seek food, avoid danger, and wander when idle

## Phase 3 – Combat Rules
### Task 7: Head-to-Head Collision
- Detect head-to-head collision between snakes
- Compare levels
- Lower level dies
- Tie kills both
- Convert dead snake body to food

### Task 8: Head-to-Body Cut
- Detect head contact on another snake body segment
- Attacker immediately consumes contacted segment as food reward
- Victim body splits at that point
- Connected body remains active
- Detached tail converts to food
- Prevent duplicate resolution and chain desync

## Phase 4 – Reward Loop
### Task 9: Chest Milestones
- Track player level milestones
- Spawn chest once per milestone
- AI must ignore chests

### Task 10: Coin Burst and Collection
- Open chest on player contact
- Spawn pooled coins in burst pattern
- Only player can collect coins
- Update coin bar
- Win at 200 coins

## Phase 5 – State Flow and Polish
### Task 11: Win / Fail / Retry
- Fail on player death
- Win on 200 coins
- Show result panel
- Retry via scene reload

### Task 12: Camera, Feedback, Audio
- Add simple arena follow camera
- Add lightweight feedback for pickup, cut, death, chest, coin, and result
- Keep particles/audio low-overhead

### Task 13: Performance Pass
- Verify no repeated lookup calls in hot paths
- Verify pooling works
- Verify no unnecessary allocations in update loops
- Verify inspector references are used wherever possible

## Delivery Standard
At every phase:
- keep the prototype playable
- keep references explicit and cached
- avoid introducing systems that exceed the assignment scope
