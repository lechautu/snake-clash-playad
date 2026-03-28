using UnityEngine;
using UnityEngine.UI;
using TMPro;
using SnakeClash.Core;

namespace SnakeClash.UI
{
    public class ResultPanel : MonoBehaviour
    {
        [Header("References")]
        [SerializeField] private GameObject panelRoot;
        [SerializeField] private TextMeshProUGUI titleText;
        [SerializeField] private Button retryButton;

        private void Start()
        {
            if (panelRoot != null) panelRoot.SetActive(false);
            if (retryButton != null) retryButton.onClick.AddListener(OnRetryClicked);

            GameManager.Instance.OnGameWin.AddListener(ShowWin);
            GameManager.Instance.OnGameFail.AddListener(ShowFail);
        }

        private void ShowWin()
        {
            panelRoot.SetActive(true);
            titleText.text = "YOU WIN!";
            titleText.color = Color.yellow;
        }

        private void ShowFail()
        {
            panelRoot.SetActive(true);
            titleText.text = "GAME OVER";
            titleText.color = Color.red;
        }

        private void OnRetryClicked()
        {
            GameManager.Instance.Retry();
        }
    }
}
