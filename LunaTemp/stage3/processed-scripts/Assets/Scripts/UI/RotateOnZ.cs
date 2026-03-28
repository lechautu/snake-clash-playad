using UnityEngine;

namespace SnakeClash.UI
{
    public class RotateOnZ : MonoBehaviour
    {
        [Header("Settings")]
        [SerializeField] private float rotationSpeed = 90f;
        [SerializeField] private bool clockwise = true;

        private void Update()
        {
            float direction = clockwise ? -1f : 1f;
            transform.Rotate(0, 0, direction * rotationSpeed * Time.deltaTime);
        }
    }
}
