using UnityEngine;
using TMPro;
using SnakeClash.Snake;
using SnakeClash.Core;
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
            if (camTransform == null && GameManager.Instance != null)
                camTransform = GameManager.Instance.MainCamera.transform;

            if (owner == null)
                owner = GetComponentInParent<SnakeControllerBase>();

            if (levelText == null)
                levelText = GetComponent<TextMeshPro>();
        }

        private void LateUpdate()
        {
            if (owner == null || levelText == null) return;

            // Update Text
            sb.Clear();
            sb.Append("Lv");
            sb.Append(owner.CurrentLevel);
            levelText.text = sb.ToString();

            // Highlight if level is higher than player
            if (GameManager.Instance != null && GameManager.Instance.PlayerSnakeController != null)
            {
                int playerLevel = GameManager.Instance.PlayerSnakeController.CurrentLevel;
                if (owner.CurrentLevel > playerLevel)
                {
                    levelText.color = Color.red;
                }
                else
                {
                    levelText.color = Color.white;
                }
            }

            if (camTransform != null)
            {
                transform.rotation = camTransform.rotation;
            }
        }
    }
}
