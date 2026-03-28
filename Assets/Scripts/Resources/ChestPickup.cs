using UnityEngine;

namespace SnakeClash.Resources
{
    public class ChestPickup : MonoBehaviour
    {
        [Header("Settings")]
        [SerializeField] private int coinsPerChest = 20;
        [SerializeField] private float burstRange = 4f;
        [SerializeField] private float burstTotalDuration = 0.5f;

        private bool _isOpening = false;

        private void Start()
        {
            // Reset state for potential reuse/pooling
            transform.localScale = Vector3.one;
        }

        public void Open()
        {
            if (_isOpening) return;
            _isOpening = true;

            StartCoroutine(OpenSequence());
        }

        private System.Collections.IEnumerator OpenSequence()
        {
            float delayBetweenCoins = burstTotalDuration / coinsPerChest;

            for (int i = 0; i < coinsPerChest; i++)
            {
                if (CoinManager.Instance != null)
                {
                    // Call the modified manager function or spawn manually for fine control
                    SpawnChestCoin();
                }
                yield return new WaitForSeconds(delayBetweenCoins);
            }

            // Shrink and vanish
            float shrinkElapsed = 0f;
            float shrinkDuration = 0.25f;
            Vector3 startScale = transform.localScale;

            while (shrinkElapsed < shrinkDuration)
            {
                shrinkElapsed += Time.deltaTime;
                float t = shrinkElapsed / shrinkDuration;
                transform.localScale = Vector3.Lerp(startScale, Vector3.zero, t);
                yield return null;
            }

            Destroy(gameObject);
        }

        private void SpawnChestCoin()
        {
            // Utility to trigger coin with toss
            CoinPickup coin = CoinManager.Instance.GetCoinFromPool();
            if (coin != null)
            {
                coin.transform.position = transform.position;
                Vector2 randomCircle = Random.insideUnitCircle * burstRange;
                Vector3 targetPos = transform.position + new Vector3(randomCircle.x, 0, randomCircle.y);
                
                coin.StartTossAnimation(targetPos, 0.4f); // Quick 0.4s toss animation
            }
        }
    }
}
