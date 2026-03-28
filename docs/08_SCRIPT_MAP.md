# Script Map

## Core
### `GameManager`
Owns game state transitions: boot, ready, playing, win, fail, retry.

### `ArenaManager`
Owns arena-level orchestration and references to content managers.

### `SceneBootstrap`
Initializes scene-level runtime wiring if needed.

### `GameState`
Enum definition.

## Snake Runtime
### `SnakeControllerBase`
Shared runtime owner for snake identity, level, alive state, and body references.

### `PlayerSnakeController`
Reads joystick input and applies steering.

### `AISnakeController`
Reads AI steering output and applies movement.

### `AISnakeBrain`
Computes desired heading using simple rule-based or utility-scored logic.

### `SnakeBodyController`
Maintains active body chain, follow logic, add/remove/cut operations.

### `SnakeSegmentNode`
Represents one modular linked body segment.

### `SnakeCollisionResolver`
Centralizes head-to-head, head-to-body, cut, and death resolution.

## Resources
### `FoodItem`
Consumable +1 level / +1 segment resource.

### `FoodManager`
Pools, spawns, and recycles food. Converts detached body/dead bodies into food.

### `ChestManager`
Tracks player level milestones and spawns chests once.

### `ChestPickup`
Player-only chest interaction that triggers coin burst.

### `CoinManager`
Pools, spawns, and recycles coin pickups. Tracks coin reward burst behavior.

### `CoinPickup`
Player-only coin collectible.

## UI
### `HUDController`
Owns level readout, tutorial hint, and high-level HUD updates.

### `CoinBarController`
Displays progress from 0 to 200 coins.

### `ResultPanelController`
Displays win/fail state and retry action.

### `VirtualJoystickInput`
Produces joystick steering values.

### `VirtualJoystickView`
Owns joystick visuals and UI references.

## Support
### `ArenaCameraFollow`
Simple camera follow for player visibility.

### `AudioManager`
Plays one-shot SFX.

### `FeedbackManager`
Optional shared lightweight feedback entry point.

### `ObjectPool<T>`
Lightweight pooling utility for food, coins, and repeated transient objects.

## Mapping Rule
Do not create extra scripts unless there is a strong reason. If one class starts owning too many responsibilities, split it only once the benefit is obvious.
