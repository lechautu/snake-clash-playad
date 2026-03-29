using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace SnakeClash.UI
{
    public class VirtualJoystickView : MonoBehaviour, IDragHandler, IPointerUpHandler, IPointerDownHandler
    {
        [Header("References")]
        [SerializeField] private RectTransform container;
        [SerializeField] private RectTransform joystickHandle;

        [Header("Settings")]
        [SerializeField] private float joystickLimit = 1.0f;

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

            UpdateJoystickInput(_joystickPosition.magnitude, _joystickPosition.normalized);
            joystickHandle.anchoredPosition = _joystickPosition * radius * joystickLimit;
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            _joystickPosition = Vector2.zero;
            joystickHandle.anchoredPosition = Vector2.zero;
            VirtualJoystickInput.Reset();
            if (container != null) container.gameObject.SetActive(false);
        }

        private void UpdateJoystickInput(float magnitude, [Bridge.Ref] Vector2 normalized)
        {
            if (magnitude > 1.0f)
            {
                _joystickPosition = normalized;
            }

            VirtualJoystickInput.SetInput(_joystickPosition);
        }
    }
}
