using UnityEngine;

namespace SnakeClash.Snake
{
    public class SnakeSegmentNode : MonoBehaviour
    {
        [Header("References")]
        [SerializeField] private SnakeBodyController owner;

        public void SetOwner(SnakeBodyController bodyOwner)
        {
            owner = bodyOwner;
        }

        public void OnPickup()
        {
            // Triggered via CollisionResolver
            if (owner != null)
            {
                owner.OnSegmentConsumed(this);
            }
        }
    }
}
