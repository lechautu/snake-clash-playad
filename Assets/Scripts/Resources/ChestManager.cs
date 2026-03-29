using System.Collections.Generic;
using UnityEngine;
using SnakeClash.Snake;
using SnakeClash.Core;
using SnakeClash.UI;

namespace SnakeClash.Resources
{
    public class ChestManager : MonoBehaviour
    {
        public static ChestManager Instance { get; private set; }

        [Header("Settings")]
        [SerializeField] private GameObject chestPrefab;
        [SerializeField] private OffScreenIndicator chestIndicator;
        [SerializeField] private Transform initialSpawnPoint;

#if LUNA_PLAYABLE
        [LunaPlaygroundField("Level Require Increment", 50, "Chest Settings")]
#endif
        public int levelRequireIncrement = 50;


        private GameObject _spawnedChest = null;
        public GameObject ActiveChest => _spawnedChest;

        private int _currentLevelRequirement = 5;
        public int CurrentLevelRequirement => _currentLevelRequirement;

        private void Awake()
        {
            if (Instance == null) Instance = this;
            else Destroy(gameObject);
        }

        private void Start()
        {
            SpawnInitialChest();
        }

        private void Update()
        {
            if (GameManager.Instance.CurrentState != GameState.Playing) return;

            // Only spawn a new chest if one doesn't exist
            if (_spawnedChest == null)
            {
                SpawnChest();
            }
        }


        private void SpawnInitialChest()
        {
            if (initialSpawnPoint != null)
            {
                SpawnChest(initialSpawnPoint.position);
            }
        }

        private void SpawnChest(Vector3? fixedPosition = null)
        {
            if (chestPrefab == null) return;

            Vector3 spawnPos;
            if (fixedPosition.HasValue)
            {
                spawnPos = fixedPosition.Value;
            }
            else
            {
                float x = Random.Range(-20f, 20f);
                float z = Random.Range(-20f, 20f);
                spawnPos = new Vector3(x, 0, z);
            }

            _spawnedChest = Instantiate(chestPrefab, spawnPos, Quaternion.identity, transform);

            ChestPickup chest = _spawnedChest.GetComponent<ChestPickup>();
            if (chest != null)
            {
                chest.Initialize(_currentLevelRequirement);
            }

            // Increase requirement for NEXT chest
            _currentLevelRequirement += levelRequireIncrement;

            if (chestIndicator != null)
            {
                chestIndicator.SetTarget(_spawnedChest.transform);
            }
        }
    }
}
