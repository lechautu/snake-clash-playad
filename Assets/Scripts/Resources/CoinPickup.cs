using UnityEngine;
using SnakeClash.Core;

namespace SnakeClash.Resources
{
    public class CoinPickup : MonoBehaviour
    {
        [SerializeField] private int coinValue = 1;

        public void Collect()
        {
            GameManager.Instance.AddCoins(coinValue);
        }

        public void StartTossAnimation(Vector3 targetPos, float duration)
        {
            StartCoroutine(TossCoroutine(targetPos, duration));
        }

        private System.Collections.IEnumerator TossCoroutine(Vector3 targetPos, float duration)
        {
            Vector3 startPos = transform.position;
            float elapsed = 0f;
            float peakHeight = 1.5f;

            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / duration;
                
                // Horizontal Lerp
                Vector3 currentPos = Vector3.Lerp(startPos, targetPos, t);
                
                // Vertical Arc (Parabola)
                float yOffset = Mathf.Sin(t * Mathf.PI) * peakHeight;
                currentPos.y += yOffset;

                transform.position = currentPos;
                yield return null;
            }

            transform.position = targetPos;
        }
    }
}
