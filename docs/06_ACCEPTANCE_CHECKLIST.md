# Acceptance Checklist

## Core Setup
- [ ] Scene boots without null-reference issues
- [ ] Core managers are wired by inspector or initialization, not runtime scene search loops

## Input and Movement
- [ ] Virtual joystick works on mobile touch
- [ ] Mouse simulation works in editor
- [ ] Player snake always moves forward
- [ ] Steering feels responsive and readable

## Growth
- [ ] Food gives +1 level
- [ ] Food gives +1 body segment
- [ ] Player starts with level 5 and 5 body segments
- [ ] Body length and level remain separate stats

## AI
- [ ] AI snakes move in the arena
- [ ] AI snakes can eat food and grow
- [ ] AI snakes ignore coins
- [ ] AI snakes ignore chests
- [ ] AI behavior is readable and not overly chaotic

## Combat
- [ ] Head-to-head resolves by level
- [ ] Tie head-to-head kills both snakes
- [ ] Dead snake body converts into food
- [ ] Head-to-body cut consumes the contacted segment immediately for attacker reward
- [ ] Victim body splits correctly
- [ ] Detached tail becomes food
- [ ] No duplicate collision resolution corrupts body state

## Chest and Coin Loop
- [ ] Chest spawns once per milestone
- [ ] Chest opens only for player interaction
- [ ] Coin burst appears after chest open
- [ ] Only player collects coins
- [ ] Coin bar updates correctly
- [ ] Player wins at 200 coins

## Win / Fail Flow
- [ ] Player death triggers fail state
- [ ] 200 coins triggers win state
- [ ] Retry restores a valid fresh match state

## Performance / Engineering
- [ ] Food uses pooling
- [ ] Coins use pooling
- [ ] Frequent feedback objects use pooling if repeated often
- [ ] Hot paths avoid repeated `GetComponent` / `Find` patterns
- [ ] Dynamic references are cached after creation/acquisition
- [ ] Scene and prefab child references are inspector-wired where possible
- [ ] No obvious per-frame GC-heavy patterns remain in core gameplay loops

## WebGL / Playable Presentation
- [ ] The scene looks active immediately on start
- [ ] The objective is understandable quickly
- [ ] The build remains lightweight enough for browser presentation
- [ ] The prototype is suitable for Luna Playground demonstration
