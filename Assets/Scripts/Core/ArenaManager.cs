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

        private void OnGameStart()
        {
            SpawnAIs();
        }

        private void SpawnAIs()
        {
            if (aiSnakePrefab == null) return;

            for (int i = 0; i < aiCount; i++)
            {
                Vector3 spawnPos = GetRandomArenaPosition();
                // Ensure not too close to player
                if (playerSnake != null && Vector3.Distance(spawnPos, playerSnake.transform.position) < 10f)
                {
                    i--;
                    continue;
                }

                AISnakeController ai = Instantiate(aiSnakePrefab, spawnPos, Quaternion.Euler(0, Random.Range(0, 360), 0), transform);
                _activeAIs.Add(ai);
            }
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

        public bool IsOutOfBounds(Vector3 position)
        {
            float halfX = arenaSize.x * 0.5f;
            float halfY = arenaSize.y * 0.5f;
            return Mathf.Abs(position.x) > halfX || Mathf.Abs(position.z) > halfY;
        }
    }
}
