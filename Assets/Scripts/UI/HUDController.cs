using UnityEngine;
using UnityEngine.UI;
using TMPro;
using SnakeClash.Core;
using SnakeClash.Snake;

namespace SnakeClash.UI
{
    public class HUDController : MonoBehaviour
    {
        [Header("References")]
        [SerializeField] private PlayerSnakeController player;
        // [SerializeField] private TextMeshProUGUI levelText;
        [SerializeField] private Slider coinProgressBar;
        // [SerializeField] private TextMeshProUGUI coinPercentageText;

        private void Update()
        {
            if (coinProgressBar != null)
            {
                float progress = (float)GameManager.Instance.CurrentCoins / GameManager.Instance.WinCoinTarget;
                coinProgressBar.value = progress;
            }
        }
    }
}
