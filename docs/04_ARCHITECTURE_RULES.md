# Architecture Rules

## 1. General Philosophy
Build the smallest architecture that cleanly supports the required mechanics.

Priorities:
1. correctness of core gameplay rules
2. readable behavior
3. low-overhead runtime
4. easy inspector tuning
5. maintainable enough for a short prototype

Do not over-engineer this project into a production-scale framework.

---

## 2. Runtime Architecture Rules
- Use one shared snake runtime model for both player and AI
- Separate controller logic from body-chain logic
- Keep ownership explicit
- Keep managers small and single-purpose
- Prefer direct references over service locators, global searches, or runtime discovery patterns

---

## 3. Reference Management Rules
### Required
- Serialize references for scene objects that already exist in the scene
- Serialize references for prefab child objects/components that already exist in the prefab
- Cache all dynamic object references immediately after spawn, pool checkout, or initialization

### Forbidden in repeated paths unless impossible to avoid
- `Find`
- `FindObjectOfType`
- `FindFirstObjectByType`
- `GetComponent` every time an object is used
- `GetComponentInChildren` every time an object is used
- repeated `transform.Find`
- repeated `Camera.main`

### Acceptable
- one-time caching in `Awake`, `Start`, initialization, or immediately after pool retrieval

---

## 4. Update Loop Rules
Keep hot paths lean:
- movement
- body follow
- AI steering
- collision resolution
- pooling

In hot paths:
- avoid LINQ
- avoid GC-producing patterns
- avoid string formatting
- avoid repeated component lookups
- avoid unnecessary virtual dispatch if a simple direct path is clearer

---

## 5. Snake Runtime Rules
- A snake owns a head and an ordered active body chain
- Level is authoritative and independent from body length
- Body length may shrink without changing level
- Body cut must operate at segment granularity
- Detached tail nodes must be converted into loose food cleanly

---

## 6. Collision Rules
Centralize snake-vs-snake logic in a single resolution path.
Do not scatter rule decisions across many scripts.

The central resolver must handle:
- head-to-head
- head-to-body
- death conversion
- cut conversion
- alive/dead guards
- duplicate-resolution prevention

---

## 7. Pooling Rules
Pool at minimum:
- food
- coin
- lightweight popup/VFX if used frequently

Pool checkout should immediately reinitialize state and cache any required references.

---

## 8. UI Rules
Use UGUI only.
Keep the UI hierarchy small.
Do not create a complex presenter architecture for this scope.

---

## 9. Scene Rules
Prefer one gameplay scene.
Keep pre-placed references wired in inspector.
Avoid dynamic scene discovery at runtime.

---

## 10. Debug Rules
Use minimal, controlled debug helpers.
Do not leave editor-only or debug-heavy logic inside hot runtime loops.
