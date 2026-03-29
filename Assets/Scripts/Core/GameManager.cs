using UnityEngine;
using UnityEngine.Events;
using SnakeClash.Snake;

namespace SnakeClash.Core
{
    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance { get; private set; }

        [Header("References")]
        [SerializeField] private PlayerSnakeController playerSnakeController;
        public PlayerSnakeController PlayerSnakeController => playerSnakeController;

        [SerializeField] private Camera mainCamera;
        public Camera MainCamera => mainCamera;

        [Header("Settings")]
        [SerializeField] private int winCoinTarget = 200;
        [SerializeField] private int maxSegments = 50;

        public int MaxSegments => maxSegments;

        [Header("Events")]
        public UnityEvent OnGameStart;
        public UnityEvent OnGameWin;
        public UnityEvent OnGameFail;

        private GameState _currentState = GameState.Boot;
        public GameState CurrentState => _currentState;

        private static int _totalAttempts = 0;
        private int _currentCoins = 0;
        public int CurrentCoins => _currentCoins;
        public int WinCoinTarget => winCoinTarget;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
                _totalAttempts++;
                mainCamera = Camera.main;
            }
            else
            {
                Destroy(gameObject);
            }
        }

        private void Start()
        {
            SetState(GameState.Ready);
        }

        public void SetState(GameState newState)
        {
            if (_currentState == newState) return;

            _currentState = newState;
            Debug.Log($"Game State Changed: {newState}");

            switch (_currentState)
            {
                case GameState.Playing:
                    OnGameStart?.Invoke();
                    break;
                case GameState.Win:
                    OnGameWin?.Invoke();
                    LunaLifeCycleGameEnded();
                    break;
                case GameState.Fail:
                    OnGameFail?.Invoke();
                    LunaLifeCycleGameEnded();
                    break;
            }
        }

        private void LunaLifeCycleGameEnded()
        {
#if LUNA_PLAYABLE
            Luna.Unity.LifeCycle.GameEnded();
#endif
            Debug.Log("Luna API: GameEnded called");

            // If it's not the first attempt, we could also call InstallFullGame here
            // but normally it's better to wait for a user click.
        }

        public void AddCoins(int amount)
        {
            if (_currentState != GameState.Playing) return;

            _currentCoins += amount;
            if (_currentCoins >= winCoinTarget)
            {
                _currentCoins = winCoinTarget;
                SetState(GameState.Win);
            }
        }

        public void StartGame()
        {
            SetState(GameState.Playing);
        }

        public void Retry()
        {
            // If user has already retried once (total attempts >= 2), redirect to store
            if (_totalAttempts >= 2)
            {
                InstallFullGame();
                return;
            }

            UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
        }

        public void InstallFullGame()
        {
#if LUNA_PLAYABLE
            Luna.Unity.Playable.InstallFullGame();
#endif
            Debug.Log("Luna API: InstallFullGame called");
        }
    }
}
