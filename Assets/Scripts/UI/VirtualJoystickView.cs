using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace SnakeClash.UI
{
    public class VirtualJoystickView : MonoBehaviour, IDragHandler, IPointerUpHandler, IPointerDownHandler
    {
        [Header("References")]
        [SerializeField] private RectTransform container;
        [SerializeField] private RectTransform handle;

        [Header("Settings")]
        [SerializeField] private float handleLimit = 1.0f;

        private Vector2 _joystickPosition = Vector2.zero;
        private Canvas _parentCanvas;

        private void Awake()
        {
            _parentCanvas = GetComponentInParent<Canvas>();
            if (container == null) container = GetComponent<RectTransform>();
        }

        private void Start()
        {
            if (container != null) container.gameObject.SetActive(false);
        }

        public void OnPointerDown(PointerEventData eventData)
        {
            if (container != null)
            {
                container.gameObject.SetActive(true);
                container.position = eventData.position;
            }
            OnDrag(eventData);
        }

        public void OnDrag(PointerEventData eventData)
        {
            Vector2 position = RectTransformUtility.WorldToScreenPoint(null, container.position);
            Vector2 radius = container.sizeDelta / 2;
            _joystickPosition = (eventData.position - position) / (radius * _parentCanvas.scaleFactor);

            HandleInput(_joystickPosition.magnitude, _joystickPosition.normalized);
            handle.anchoredPosition = _joystickPosition * radius * handleLimit;
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            _joystickPosition = Vector2.zero;
            handle.anchoredPosition = Vector2.zero;
            VirtualJoystickInput.Reset();
            if (container != null) container.gameObject.SetActive(false);
        }

        private void HandleInput(float magnitude, Vector2 normalized)
        {
            if (magnitude > 1.0f)
            {
                _joystickPosition = normalized;
            }

            VirtualJoystickInput.SetInput(_joystickPosition);
        }
    }
}
