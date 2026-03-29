using UnityEngine;
using UnityEngine.UI;
using SnakeClash.Core;

namespace SnakeClash.UI
{
    public class OffScreenIndicator : MonoBehaviour
    {
        [Header("Settings")]
        [SerializeField] private float margin = 40f;
        [SerializeField] private float rotationOffset = 90f;
        [SerializeField] private Image iconImage;
        [SerializeField] private RectTransform chestIcon;

        private Transform _target;
        [SerializeField] private Camera mainCam;
        private RectTransform _rectTransform;

        public void SetTarget(Transform target)
        {
            _target = target;
            gameObject.SetActive(target != null);
        }

        private void Start()
        {
            if (mainCam == null && GameManager.Instance != null) mainCam = GameManager.Instance.MainCamera;
            _rectTransform = GetComponent<RectTransform>();
            if (iconImage == null) iconImage = GetComponentInChildren<Image>();
            
            // Auto-find child if not assigned
            if (chestIcon == null && transform.childCount > 0)
            {
                var child = transform.Find("ChestIcon");
                if (child != null) chestIcon = child.GetComponent<RectTransform>();
            }
        }

        private void LateUpdate()
        {
            if (_target == null)
            {
                gameObject.SetActive(false);
                return;
            }

            Vector3 screenPos = mainCam.WorldToScreenPoint(_target.position);

            // Is on screen?
            bool isOnScreen = screenPos.z > 0 && 
                              screenPos.x > 0 && screenPos.x < Screen.width && 
                              screenPos.y > 0 && screenPos.y < Screen.height;

            if (isOnScreen)
            {
                iconImage.enabled = false; 
                if (chestIcon != null) chestIcon.gameObject.SetActive(false);
            }
            else
            {
                iconImage.enabled = true;
                if (chestIcon != null) chestIcon.gameObject.SetActive(true);

                if (screenPos.z < 0)
                {
                    screenPos *= -1;
                }

                Vector3 centeredScreenPos = new Vector3(screenPos.x - Screen.width / 2, screenPos.y - Screen.height / 2, 0);
                float angle = Mathf.Atan2(centeredScreenPos.y, centeredScreenPos.x);
                float cos = Mathf.Cos(angle);
                float sin = Mathf.Sin(angle);

                float mX = (Screen.width / 2) - margin;
                float mY = (Screen.height / 2) - margin;

                // Intersection with screen edges
                if (Mathf.Abs(mX / cos) < Mathf.Abs(mY / sin))
                {
                    centeredScreenPos = new Vector3(Mathf.Sign(cos) * mX, Mathf.Sign(cos) * mX * sin / cos, 0);
                }
                else
                {
                    centeredScreenPos = new Vector3(Mathf.Sign(sin) * mY * cos / sin, Mathf.Sign(sin) * mY, 0);
                }

                _rectTransform.localPosition = centeredScreenPos;
                
                // Rotate to point at target
                float rotationAngle = angle * Mathf.Rad2Deg;
                _rectTransform.localRotation = Quaternion.Euler(0, 0, rotationAngle + rotationOffset);

                // Keep Icon Upright
                if (chestIcon != null)
                {
                    chestIcon.rotation = Quaternion.identity;
                }
            }
        }
    }
}
