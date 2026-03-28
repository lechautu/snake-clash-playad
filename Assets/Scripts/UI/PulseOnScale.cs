using UnityEngine;

namespace SnakeClash.UI
{
    public class PulseOnScale : MonoBehaviour
    {
        [Header("Settings")]
        [SerializeField] private float pulseSpeed = 5.0f;
        [SerializeField] private float pulseAmount = 0.08f;
        [SerializeField] private bool activeOnStart = true;

        private Vector3 _baseScale;
        private bool _isActive;

        private void Start()
        {
            _baseScale = transform.localScale;
            if (activeOnStart) SetActive(true);
        }

        public void SetActive(bool isActive)
        {
            _isActive = isActive;
            if (!_isActive) transform.localScale = _baseScale;
        }

        private void Update()
        {
            if (!_isActive) return;

            float pulse = Mathf.Sin(Time.time * pulseSpeed) * pulseAmount;
            transform.localScale = _baseScale + new Vector3(pulse, pulse, pulse);
        }
    }
}
