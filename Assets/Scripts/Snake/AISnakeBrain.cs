using UnityEngine;
using SnakeClash.Core;

namespace SnakeClash.Snake
{
    public class AISnakeBrain : MonoBehaviour
    {
        [Header("Settings")]
        [SerializeField] private float decisionInterval = 0.5f;
        // [SerializeField] private float detectionRadius = 10f;

        private float _lastDecisionTime = 0f;
        private Vector3 _currentHeading = Vector3.forward;

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
            // Simple wandering with area clamping
            if (ArenaManager.Instance.IsOutOfBounds(transform.position + _currentHeading * 5f))
            {
                // Turn away from bounds
                _currentHeading = Vector3.Reflect(_currentHeading, -transform.position.normalized);
            }
            else
            {
                // Slight random variation
                _currentHeading = Quaternion.Euler(0, Random.Range(-30, 30), 0) * _currentHeading;
            }
            _currentHeading.y = 0;
            _currentHeading.Normalize();
        }
    }
}
