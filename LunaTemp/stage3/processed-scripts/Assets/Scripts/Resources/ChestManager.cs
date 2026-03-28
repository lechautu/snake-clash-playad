using System.Collections.Generic;
using UnityEngine;
using SnakeClash.Snake;
using SnakeClash.UI;

namespace SnakeClash.Resources
{
    public class ChestManager : MonoBehaviour
    {
        public static ChestManager Instance { get; private set; }

        [Header("Settings")]
        [SerializeField] private GameObject chestPrefab;
        [SerializeField] private List<int> milestoneLevels = new List<int> { 10, 20, 35, 50, 75, 100 };
        [SerializeField] private PlayerSnakeController player;
        [SerializeField] private OffScreenIndicator chestIndicator;
        [SerializeField] private Transform initialSpawnPoint;

        private HashSet<int> _reachedMilestones = new HashSet<int>();
        private Queue<int> _pendingChests = new Queue<int>();
        private GameObject _spawnedChest = null;
        public GameObject ActiveChest => _spawnedChest;
        private int _lastCheckLevel = 0;

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
            if (player == null) return;
            if (player.CurrentLevel == _lastCheckLevel) return;

            _lastCheckLevel = player.CurrentLevel;
            CheckMilestones();

            // Only spawn a new chest if one doesn't exist AND we have pending milestones
            if (_spawnedChest == null && _pendingChests.Count > 0)
            {
                _pendingChests.Dequeue();
                SpawnChest();
            }
        }

        private void CheckMilestones()
        {
            foreach (int milestone in milestoneLevels)
            {
                if (_lastCheckLevel >= milestone && !_reachedMilestones.Contains(milestone))
                {
                    _reachedMilestones.Add(milestone);
                    _pendingChests.Enqueue(milestone);
                }
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

            if (chestIndicator != null)
            {
                chestIndicator.SetTarget(_spawnedChest.transform);
            }
        }
    }
}
