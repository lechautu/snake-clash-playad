using UnityEngine;

namespace SnakeClash.UI
{
    public class MoveOnYLoop : MonoBehaviour
    {
        [SerializeField] private float duration = 0.6f;
        [SerializeField] private float amount = 50f;
        [SerializeField] private bool autoStart = true;

        private RectTransform _rectTransform;
        private Vector3 _originalPos;
        private bool _isAnimating;

        private void Awake()
        {
            _rectTransform = GetComponent<RectTransform>();
            if (_rectTransform != null) _originalPos = _rectTransform.anchoredPosition;
        }

        private void OnEnable()
        {
            if (autoStart) StartAnimation();
        }

        private void OnDisable()
        {
            StopAnimation();
            if (_rectTransform != null) _rectTransform.anchoredPosition = _originalPos;
        }

        public void StartAnimation()
        {
            if (_isAnimating) return;
            _isAnimating = true;
            if (_rectTransform == null) _rectTransform = GetComponent<RectTransform>();
            if (_originalPos == Vector3.zero && _rectTransform != null) _originalPos = _rectTransform.anchoredPosition;
            
            StartCoroutine(AnimateLoop());
        }

        public void StopAnimation()
        {
            _isAnimating = false;
            StopAllCoroutines();
        }

        private System.Collections.IEnumerator AnimateLoop()
        {
            while (_isAnimating)
            {
                float elapsed = 0f;
                while (elapsed < duration)
                {
                    elapsed += Time.deltaTime;
                    float t = elapsed / duration;
                    float offset = Mathf.Lerp(0, amount, Mathf.SmoothStep(0, 1, t));
                    if (_rectTransform != null)
                    {
                        _rectTransform.anchoredPosition = _originalPos + new Vector3(0, offset, 0);
                    }
                    yield return null;
                }
                
                // Reset to repeat
                if (_rectTransform != null) _rectTransform.anchoredPosition = _originalPos;
            }
        }
    }
}
