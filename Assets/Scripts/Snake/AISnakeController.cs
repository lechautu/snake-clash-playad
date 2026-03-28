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
            // Optional: Respawn logic if needed, but for MVP AI can just stay dead
            Destroy(gameObject, 2f);
        }
    }
}
