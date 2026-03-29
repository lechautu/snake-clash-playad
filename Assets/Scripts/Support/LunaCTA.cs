using UnityEngine;
using UnityEngine.UI;
using SnakeClash.Core;

namespace SnakeClash.Support
{
    /// <summary>
    /// Simple component to hook up to any button in the scene to trigger the store redirect.
    /// Helpful for CTA (Call-to-Action) buttons.
    /// </summary>
    public class LunaCTA : MonoBehaviour
    {
        private void Start()
        {
            Button btn = GetComponent<Button>();
            if (btn != null)
            {
                btn.onClick.AddListener(OnClicked);
            }
        }

        public void OnClicked()
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.InstallFullGame();
            }
        }
    }
}
