using UnityEngine;
using SnakeClash.Core;

namespace SnakeClash.Snake
{
    public class AISnakeController : SnakeControllerBase
    {
        [Header("Movement")]
        [SerializeField] private float moveSpeed = 4.5f;
        [SerializeField] private float turnSpeed = 150f;

        [Header("References")]
        [SerializeField] private SnakeBodyController bodyController;
        [SerializeField] private AISnakeBrain brain;

        private bool _isInitialized = false;

        public void Initialize(int level, int segments)
        {
            initialLevel = level;
            initialSegments = segments;
            currentLevel = level;
            _isInitialized = true;
        }

        protected override void Start()
        {
            if (!_isInitialized)
            {
                var player = Object.FindFirstObjectByType<PlayerSnakeController>();
                if (player != null)
                {
                    initialLevel = player.CurrentLevel;
                    initialSegments = player.CurrentLevel;
                }
            }
            base.Start();
        }

        private void Update()
        {
            if (!isAlive || GameManager.Instance.CurrentState != GameState.Playing) return;

            // Simple move forward
            transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
            
            // Boundary clamping
            transform.position = ArenaManager.Instance.ClampToArena(transform.position);

            // AI Steering
            Vector3 desiredHeading = brain.GetDesiredHeading();
            if (desiredHeading != Vector3.zero)
            {
                Quaternion targetRotation = Quaternion.LookRotation(desiredHeading, Vector3.up);
                transform.rotation = Quaternion.RotateTowards(transform.rotation, targetRotation, turnSpeed * Time.deltaTime);
            }
        }

        public override void AddLevel(int amount)
        {
            base.AddLevel(amount);
            if (bodyController != null) bodyController.AddSegment();
        }

        public override void Kill()
        {
            base.Kill();
            if (bodyController != null) bodyController.OnDeath();
            
            // Move away to avoid ghost collisions
            transform.position += Vector3.down * 100f;

            Destroy(gameObject, 2f);
        }
    }
}
