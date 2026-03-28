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
        [SerializeField] private RectTransform stageClearRoot;
        [SerializeField] private GameObject swallowedRoot;
        [SerializeField] private Button retryButton;
        [SerializeField] private RectTransform retryButtonRoot;

        private void Start()
        {
            if (panelRoot != null) panelRoot.SetActive(false);
            if (stageClearRoot != null) stageClearRoot.gameObject.SetActive(false);
            if (swallowedRoot != null) swallowedRoot.SetActive(false);
            if (retryButton != null) retryButton.gameObject.SetActive(false);

            GameManager.Instance.OnGameWin.AddListener(ShowWin);
            GameManager.Instance.OnGameFail.AddListener(ShowFail);
        }

        private void ShowWin()
        {
            panelRoot.SetActive(true);

            if (AudioManager.Instance != null)
            {
                AudioManager.Instance.PlayWinSound();
            }

            if (stageClearRoot != null)
            {
                stageClearRoot.gameObject.SetActive(true);
                StartCoroutine(AnimateStageClear());
            }
        }

        private System.Collections.IEnumerator AnimateStageClear()
        {
            stageClearRoot.localScale = Vector3.zero;

            // Phase 1: 0 -> 1.1 (0.2s)
            float elapsed = 0f;
            float duration = 0.25f;
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / duration;
                stageClearRoot.localScale = Vector3.Lerp(Vector3.zero, new Vector3(1.1f, 1.1f, 1.1f), t);
                yield return null;
            }

            // Phase 2: 1.1 -> 1.0 (0.15s)
            elapsed = 0f;
            duration = 0.15f;
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / duration;
                stageClearRoot.localScale = Vector3.Lerp(new Vector3(1.1f, 1.1f, 1.1f), Vector3.one, t);
                yield return null;
            }

            stageClearRoot.localScale = Vector3.one;
        }

        private void ShowFail()
        {
            panelRoot.SetActive(true);

            if (AudioManager.Instance != null)
            {
                AudioManager.Instance.PlayLoseSound();
            }

            if (swallowedRoot != null) swallowedRoot.SetActive(true);
            if (retryButton != null)
            {
                retryButton.gameObject.SetActive(true);
            }
        }

        public void OnRetryClicked()
        {
            GameManager.Instance.Retry();
        }
    }
}
