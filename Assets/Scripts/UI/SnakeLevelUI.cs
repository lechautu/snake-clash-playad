using UnityEngine;
using TMPro;
using SnakeClash.Snake;

namespace SnakeClash.UI
{
    public class SnakeLevelUI : MonoBehaviour
    {
        [Header("References")]
        [SerializeField] private SnakeControllerBase owner;
        [SerializeField] private TextMeshPro levelText;

        [SerializeField] private Transform camTransform;

        private void Start()
        {
            if (camTransform == null)
                camTransform = Camera.main.transform;
            
            if (owner == null)
                owner = GetComponentInParent<SnakeControllerBase>();
        }

        private void LateUpdate()
        {
            // Update Text
            if (owner != null && levelText != null)
            {
                levelText.text = owner.CurrentLevel.ToString();
            }

            // Billboard logic
            if (camTransform != null)
            {
                transform.rotation = camTransform.rotation;
            }
        }
    }
}
