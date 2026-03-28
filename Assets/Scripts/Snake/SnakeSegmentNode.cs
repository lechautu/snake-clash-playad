using UnityEngine;

namespace SnakeClash.Snake
{
    public class SnakeSegmentNode : MonoBehaviour
    {
        [Header("Visuals")]
        [SerializeField] private GameObject bodyVisual;
        [SerializeField] private GameObject tailVisual;

        private SnakeBodyController _owner;

        public void SetOwner(SnakeBodyController bodyOwner)
        {
            _owner = bodyOwner;
        }

        public void RefreshVisual(bool asTail)
        {
            if (bodyVisual != null) bodyVisual.SetActive(!asTail);
            if (tailVisual != null) tailVisual.SetActive(asTail);
        }

        public void OnPickup()
        {
            // Triggered via CollisionResolver
            if (_owner != null)
            {
                _owner.OnSegmentConsumed(this);
            }
        }
    }
}
