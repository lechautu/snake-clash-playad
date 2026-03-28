# Coding Rules

## 1. Scope Discipline
Do not add systems outside the required prototype scope.
Build only what is necessary for the playable loop.

## 2. Performance Discipline
This project has a strict overhead-minimization constraint.

### Required
- Cache references in `Awake`, initialization, or immediately after spawn/pool checkout
- Use serialized inspector references whenever the target object/component is already known in scene or prefab
- Keep update loops lean
- Use pooling for burst-spawn objects

### Avoid
- repeated `GetComponent`
- repeated `GetComponentInChildren`
- repeated `Find` / `FindObjectOfType`
- repeated `transform.Find`
- repeated `Camera.main`
- LINQ in hot paths
- allocations in movement/body/AI/collision loops

## 3. Unity Coding Preferences
- Use clear serialized fields for tuning and references
- Keep classes focused and small
- Prefer explicit setup over reflection-like discovery
- Keep MonoBehaviour usage practical and limited to what is needed
- Do not build large inheritance trees beyond the snake controller base split already defined

## 4. Null Safety
- Validate critical references during initialization
- Fail fast in development if required references are missing
- Do not silently rely on runtime searches to patch missing inspector setup

## 5. Collision Safety
- Use alive/dead guards
- Prevent duplicate resolution within the same interaction window
- Clamp and validate state after cuts and deaths

## 6. Readability
- Name methods by behavior intent
- Keep the code simple enough for quick interview/test review
- Prefer straightforward logic over clever abstraction

## 7. Comments
Add concise comments only where logic is non-obvious, especially in:
- body split logic
- pooled object lifecycle
- AI steering priority logic
- collision resolution guards

## 8. Testing Behavior
After each major task, verify the scene remains playable.
Do not leave the project in a partially broken state while moving to the next feature.
