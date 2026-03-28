using UnityEngine;
using SnakeClash.Support;
using SnakeClash.Snake;
using System.Collections.Generic;

namespace SnakeClash.Resources
{
    public class FoodManager : MonoBehaviour
    {
        public static FoodManager Instance { get; private set; }

        [Header("Settings")]
        [SerializeField] private FoodItem foodPrefab;
        [SerializeField] private int maxAmbientFood = 100;
        [SerializeField] private float spawnRadius = 25f;

        private ObjectPool<FoodItem> _foodPool;
        private List<FoodItem> _activeFood = new List<FoodItem>();
        public IReadOnlyList<FoodItem> ActiveFood => _activeFood;

        private void Awake()
        {
            if (Instance == null) Instance = this;
            else Destroy(gameObject);
        }

        private void Start()
        {
            if (foodPrefab != null)
            {
                _foodPool = new ObjectPool<FoodItem>(foodPrefab, maxAmbientFood, transform);
                for (int i = 0; i < maxAmbientFood; i++)
                {
                    SpawnAmbientFood();
                }
            }
        }

        public void SpawnAmbientFood()
        {
            FoodItem food = _foodPool.Get();
            food.transform.position = GetRandomPosition();
            _activeFood.Add(food);
        }

        public void RecycleFood(FoodItem food)
        {
            if (_activeFood.Remove(food))
            {
                _foodPool.Return(food);
                SpawnAmbientFood();
            }
        }

        public void CreateFoodFromNode(Vector3 position)
        {
            FoodItem food = _foodPool.Get();
            food.transform.position = position;
            _activeFood.Add(food);
        }

        private Vector3 GetRandomPosition()
        {
            float x = Random.Range(-spawnRadius, spawnRadius);
            float z = Random.Range(-spawnRadius, spawnRadius);
            return new Vector3(x, 0, z);
        }
    }
}
