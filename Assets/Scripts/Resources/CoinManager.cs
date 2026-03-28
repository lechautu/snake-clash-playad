using UnityEngine;
using SnakeClash.Support;
using System.Collections.Generic;

namespace SnakeClash.Resources
{
    public class CoinManager : MonoBehaviour
    {
        public static CoinManager Instance { get; private set; }

        [Header("Settings")]
        [SerializeField] private CoinPickup coinPrefab;
        [SerializeField] private int initialPoolSize = 50;

        private ObjectPool<CoinPickup> _coinPool;
        private List<CoinPickup> _activeCoins = new List<CoinPickup>();
        public IReadOnlyList<CoinPickup> ActiveCoins => _activeCoins;

        private void Awake()
        {
            if (Instance == null) Instance = this;
            else Destroy(gameObject);
        }

        private void Start()
        {
            if (coinPrefab != null)
            {
                _coinPool = new ObjectPool<CoinPickup>(coinPrefab, initialPoolSize, transform);
            }
        }

        public void SpawnCoinBurst(Vector3 origin, int amount, float burstRange = 2f)
        {
            for (int i = 0; i < amount; i++)
            {
                CoinPickup coin = GetCoinFromPool();
                if (coin != null)
                {
                    coin.transform.position = origin;
                    Vector2 randomCircle = Random.insideUnitCircle * burstRange;
                    Vector3 targetPos = origin + new Vector3(randomCircle.x, 0, randomCircle.y);
                    
                    // Default burst behavior: immediate or quick toss
                    coin.StartTossAnimation(targetPos, 0.4f);
                }
            }
        }

        public CoinPickup GetCoinFromPool()
        {
            if (_coinPool == null) return null;
            
            CoinPickup coin = _coinPool.Get();
            _activeCoins.Add(coin);
            return coin;
        }

        public void RecycleCoin(CoinPickup coin)
        {
            if (_activeCoins.Remove(coin))
            {
                _coinPool.Return(coin);
            }
        }
    }
}
