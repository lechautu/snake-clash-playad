using UnityEngine;
using SnakeClash.Resources;
using SnakeClash.Snake;
using System.Collections.Generic;

namespace SnakeClash.Core
{
    public class ArenaManager : MonoBehaviour
    {
        public static ArenaManager Instance { get; private set; }

        [Header("Arena Bounds")]
        [SerializeField] private Vector2 arenaSize = new Vector2(50, 50);
        public Vector2 ArenaSize => arenaSize;

        [Header("Managers")]
        [SerializeField] private FoodManager foodManager;
        public FoodManager FoodManager => foodManager;

        [Header("AI Spawning")]
        [SerializeField] private AISnakeController aiSnakePrefab;
        [SerializeField] private int aiCount = 5;
        [SerializeField] private SnakeControllerBase playerSnake;

        private List<AISnakeController> _activeAIs = new List<AISnakeController>();
        private int _totalSpawnCount = 0;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
            }
            else
            {
                Destroy(gameObject);
            }
        }

        private void Start()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnGameStart.AddListener(OnGameStart);
            }
        }

        private void Update()
        {
            if (GameManager.Instance.CurrentState != GameState.Playing) return;

            // 1. Clean up dead AI
            for (int i = _activeAIs.Count - 1; i >= 0; i--)
            {
                if (_activeAIs[i] == null || !_activeAIs[i].IsAlive)
                {
                    _activeAIs.RemoveAt(i);
                }
            }

            // 2. Replenish
            if (_activeAIs.Count < aiCount)
            {
                SpawnOneAI();
            }
        }

        private void OnGameStart()
        {
            SpawnAIs();
        }

        private void SpawnAIs()
        {
            if (aiSnakePrefab == null) return;
            while (_activeAIs.Count < aiCount)
            {
                SpawnOneAI();
            }
        }

        private void SpawnOneAI()
        {
            if (aiSnakePrefab == null) return;

            Vector3 spawnPos = GetRandomSafePosition();
            AISnakeController ai = Instantiate(aiSnakePrefab, spawnPos, Quaternion.Euler(0, Random.Range(0, 360), 0), transform);
            
            // Tiered Spawning Logic
            int playerLevel = (playerSnake != null) ? playerSnake.CurrentLevel : 1;
            int aiLevel = playerLevel;
            
            _totalSpawnCount++;

            if (playerLevel < 15)
            {
                aiLevel = playerLevel;
            }
            else
            {
                // Every 5th snake is an Elite (+10 levels)
                if (_totalSpawnCount % 5 == 0)
                {
                    aiLevel = playerLevel + 10;
                }
                else
                {
                    aiLevel = Random.Range(playerLevel - 10, playerLevel + 1);
                }
            }

            // Segment scaling rule
            int segments = aiLevel;
            if (aiLevel > 20)
            {
                segments = Random.Range(15, 21);
            }

            ai.Initialize(aiLevel, segments);
            _activeAIs.Add(ai);
        }

        private Vector3 GetRandomSafePosition()
        {
            Vector3 pos = GetRandomArenaPosition();
            float safeDistance = 20f;
            int attempts = 0;
            bool isSafe = false;

            while (!isSafe && attempts < 50)
            {
                pos = GetRandomArenaPosition();
                attempts++;
                isSafe = true;

                // Check distance from player
                if (playerSnake != null && Vector3.Distance(pos, playerSnake.transform.position) < safeDistance)
                {
                    isSafe = false;
                    continue;
                }

                // Check distance from other active AIs
                foreach (var ai in _activeAIs)
                {
                    if (ai != null && Vector3.Distance(pos, ai.transform.position) < 5f)
                    {
                        isSafe = false;
                        break;
                    }
                }
            }
            return pos;
        }

        private Vector3 GetRandomArenaPosition()
        {
            float x = Random.Range(-arenaSize.x * 0.4f, arenaSize.x * 0.4f);
            float z = Random.Range(-arenaSize.y * 0.4f, arenaSize.y * 0.4f);
            return new Vector3(x, 0, z);
        }

        public Vector3 ClampToArena(Vector3 position)
        {
            float halfX = arenaSize.x * 0.5f;
            float halfY = arenaSize.y * 0.5f;
            position.x = Mathf.Clamp(position.x, -halfX, halfX);
            position.z = Mathf.Clamp(position.z, -halfY, halfY);
            return position;
        }

        public bool IsOutOfBounds([Bridge.Ref] Vector3 position)
        {
            float halfX = arenaSize.x * 0.5f;
            float halfY = arenaSize.y * 0.5f;
            return Mathf.Abs(position.x) > halfX || Mathf.Abs(position.z) > halfY;
        }
    }
}
