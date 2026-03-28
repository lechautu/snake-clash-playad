using UnityEngine;
using TMPro;
using SnakeClash.Snake;
using System.Text;

namespace SnakeClash.UI
{
    public class SnakeLevelUI : MonoBehaviour
    {
        [Header("References")]
        [SerializeField] private SnakeControllerBase owner;
        [SerializeField] private TextMeshPro levelText;

        [SerializeField] private Transform camTransform;

        StringBuilder sb = new StringBuilder();

        private void Start()
        {
            if (camTransform == null && Camera.main != null)
                camTransform = Camera.main.transform;
            
            if (owner == null)
                owner = GetComponentInParent<SnakeControllerBase>();
            
            if (levelText == null)
                levelText = GetComponent<TextMeshPro>();
        }

        private void LateUpdate()
        {
            // Update Text
            if (owner != null && levelText != null)
            {
                sb.Clear();
                sb.Append("Lv");
                sb.Append(owner.CurrentLevel);
                levelText.text = sb.ToString();
            }

            if (camTransform != null)
            {
                transform.rotation = camTransform.rotation;
            }
        }
    }
}
