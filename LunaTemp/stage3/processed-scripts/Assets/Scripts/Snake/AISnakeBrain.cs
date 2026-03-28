using UnityEngine;
using SnakeClash.Core;

namespace SnakeClash.Snake
{
    public class AISnakeBrain : MonoBehaviour
    {
        [Header("Settings")]
        [SerializeField] private float decisionInterval = 0.5f;
        [SerializeField] private float detectionRadius = 12f;

        [Header("References")]
        [SerializeField] private SnakeControllerBase owner;

        private float _lastDecisionTime = 0f;
        private Vector3 _currentHeading = Vector3.forward;

        private void Start()
        {
            if (owner == null) owner = GetComponent<SnakeControllerBase>();
        }

        public Vector3 GetDesiredHeading()
        {
            if (Time.time - _lastDecisionTime > decisionInterval)
            {
                UpdateDecision();
                _lastDecisionTime = Time.time;
            }
            return _currentHeading;
        }

        private void UpdateDecision()
        {
            // 1. Determine preferred direction
            Vector3 preferredHeading = _currentHeading;
            var player = Object.FindFirstObjectByType<PlayerSnakeController>();
            
            if (player != null && player.IsAlive && owner != null)
            {
                float dist = Vector3.Distance(transform.position, player.transform.position);
                if (dist < detectionRadius && player.CurrentLevel > owner.CurrentLevel)
                {
                    // Flee from player
                    preferredHeading = (transform.position - player.transform.position).normalized;
                }
                else
                {
                    // Normal Wander
                    preferredHeading = Quaternion.Euler(0, Random.Range(-45, 45), 0) * _currentHeading;
                }
            }
            else
            {
                // Fallback Wander
                preferredHeading = Quaternion.Euler(0, Random.Range(-45, 45), 0) * _currentHeading;
            }

            _currentHeading = preferredHeading;

            // 2. Bound clamping (always overrides to keep inside)
            if (ArenaManager.Instance.IsOutOfBounds(transform.position + _currentHeading * 5f))
            {
                // Turn away from bounds
                _currentHeading = Vector3.Reflect(_currentHeading, -transform.position.normalized);
            }

            _currentHeading.y = 0;
            _currentHeading.Normalize();
        }
    }
}
