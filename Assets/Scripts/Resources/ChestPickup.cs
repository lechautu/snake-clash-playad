using UnityEngine;
using SnakeClash.Core;
using TMPro;

namespace SnakeClash.Resources
{
    public class ChestPickup : MonoBehaviour
    {
        [Header("Settings")]
#if LUNA_PLAYABLE
        [LunaPlaygroundField("Coins Per Chest", 20, "Chest Settings")]
#endif
        public int coinsPerChest = 20;
        [SerializeField] private float burstRange = 4f;
        [SerializeField] private float burstTotalDuration = 0.5f;
        [SerializeField] private Animator animator;
        [SerializeField] private TextMeshPro levelText;
        [SerializeField] private Transform camTransform;

        private bool _isOpening = false;
        private int _requiredLevel = 0;

        public int RequiredLevel => _requiredLevel;

        public void Initialize(int level)
        {
            _requiredLevel = level;
            if (levelText != null)
            {
                levelText.text = "Lv " + level;
            }
        }

        private void Awake()
        {
            if (levelText == null)
                levelText = GetComponentInChildren<TextMeshPro>();
        }

        private void Start()
        {
            if (camTransform == null && GameManager.Instance != null && GameManager.Instance.MainCamera != null)
                camTransform = GameManager.Instance.MainCamera.transform;

            if (animator == null) animator = GetComponent<Animator>();

            // Reset state for potential reuse/pooling
            transform.localScale = Vector3.one;
        }

        private void Update()
        {
            if (_isOpening || levelText == null) return;

            if (GameManager.Instance != null && GameManager.Instance.PlayerSnakeController != null)
            {
                int playerLevel = GameManager.Instance.PlayerSnakeController.CurrentLevel;
                levelText.color = (playerLevel >= _requiredLevel) ? Color.white : Color.red;
            }
        }

        private void LateUpdate()
        {
            if (camTransform != null && levelText != null)
            {
                levelText.transform.rotation = camTransform.rotation;
            }
        }

        public void Open(int playerLevel)
        {
            if (_isOpening || playerLevel < _requiredLevel) return;
            _isOpening = true;

            if (animator != null)
            {
                animator.SetTrigger("OpenTrigger");
            }

            if (AudioManager.Instance != null)
            {
                AudioManager.Instance.PlayChestOpenSound();
            }

            StartCoroutine(OpenSequence());
        }

        private System.Collections.IEnumerator OpenSequence()
        {
            float delayBetweenCoins = burstTotalDuration / coinsPerChest;

            for (int i = 0; i < coinsPerChest; i++)
            {
                if (CoinManager.Instance != null)
                {
                    // Call the modified manager function or spawn manually for fine control
                    SpawnChestCoin();
                }
                yield return new WaitForSeconds(delayBetweenCoins);
            }

            // Shrink and vanish
            float shrinkElapsed = 0f;
            float shrinkDuration = 0.25f;
            Vector3 startScale = transform.localScale;

            while (shrinkElapsed < shrinkDuration)
            {
                shrinkElapsed += Time.deltaTime;
                float t = shrinkElapsed / shrinkDuration;
                transform.localScale = Vector3.Lerp(startScale, Vector3.zero, t);
                yield return null;
            }

            Destroy(gameObject);
        }

        private void SpawnChestCoin()
        {
            // Utility to trigger coin with toss
            CoinPickup coin = CoinManager.Instance.GetCoinFromPool();
            if (coin != null)
            {
                coin.transform.position = transform.position;
                Vector2 randomCircle = Random.insideUnitCircle * burstRange;
                Vector3 targetPos = transform.position + new Vector3(randomCircle.x, 0, randomCircle.y);

                coin.StartTossAnimation(targetPos, 0.4f); // Quick 0.4s toss animation
            }
        }
    }
}
