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
        [SerializeField] private Slider coinProgressBar;
        [SerializeField] private GameObject onboardPanel;
        [SerializeField] private RectTransform onboardChest;
        [SerializeField] private RectTransform tutorHand;

        private void Start()
        {
            if (onboardPanel != null)
            {
                onboardPanel.SetActive(true);
                if (tutorHand != null) tutorHand.gameObject.SetActive(false);
                StartCoroutine(ShowOnboardSequence());

                // Onboard only closes when game officially starts (joystick moved)
                GameManager.Instance.OnGameStart.AddListener(DismissOnboard);
            }
        }

        private void DismissOnboard()
        {
            if (onboardPanel != null) onboardPanel.SetActive(false);
        }

        private System.Collections.IEnumerator ShowOnboardSequence()
        {
            // 1s wait
            yield return new WaitForSeconds(1.0f);

            // "Popping" scale animation for chest
            if (onboardChest != null)
            {
                float elapsed = 0f;
                float duration = 0.15f;
                Vector3 startScale = Vector3.one;
                Vector3 peekScale = new Vector3(1.2f, 1.2f, 1.2f);

                while (elapsed < duration)
                {
                    elapsed += Time.deltaTime;
                    float t = elapsed / duration;
                    onboardChest.localScale = Vector3.Lerp(startScale, peekScale, Mathf.SmoothStep(0, 1, t));
                    yield return null;
                }

                elapsed = 0f;
                duration = 0.25f;
                while (elapsed < duration)
                {
                    elapsed += Time.deltaTime;
                    float t = elapsed / duration;
                    float smoothT = t * t * t;
                    onboardChest.localScale = Vector3.Lerp(peekScale, Vector3.zero, smoothT);
                    yield return null;
                }
                onboardChest.localScale = Vector3.zero;
            }

            // Show tutor hand (MoveOnYLoop handles its own animation on Enable)
            if (tutorHand != null)
            {
                tutorHand.gameObject.SetActive(true);
            }
        }

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
