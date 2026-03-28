using UnityEngine;
using SnakeClash.UI;
using SnakeClash.Core;

namespace SnakeClash.Snake
{
    public class PlayerSnakeController : SnakeControllerBase
    {
        [Header("Movement")]
        [SerializeField] private float moveSpeed = 5f;
        [SerializeField] private float turnSpeed = 180f;

        [Header("References")]
        [SerializeField] private SnakeBodyController bodyController;

        private void Update()
        {
            if (!isAlive || GameManager.Instance.CurrentState != GameState.Playing) return;

            // Auto-forward
            transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
            
            // Boundary clamping
            transform.position = ArenaManager.Instance.ClampToArena(transform.position);

            // Steering
            Vector2 input = VirtualJoystickInput.GetInput();
            if (input != Vector2.zero)
            {
                Vector3 targetDirection = new Vector3(input.x, 0, input.y);
                if (targetDirection != Vector3.zero)
                {
                    Quaternion targetRotation = Quaternion.LookRotation(targetDirection, Vector3.up);
                    transform.rotation = Quaternion.RotateTowards(transform.rotation, targetRotation, turnSpeed * Time.deltaTime);
                }
            }
        }

        public override void AddLevel(int amount)
        {
            base.AddLevel(amount);
            if (bodyController != null)
            {
                bodyController.AddSegment();
            }
        }

        public override void Kill()
        {
            base.Kill();
            if (bodyController != null)
            {
                bodyController.OnDeath();
            }
            GameManager.Instance.SetState(GameState.Fail);
        }
    }
}
