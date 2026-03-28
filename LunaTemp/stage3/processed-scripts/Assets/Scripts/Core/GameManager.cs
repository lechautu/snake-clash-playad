using UnityEngine;
using UnityEngine.Events;

namespace SnakeClash.Core
{
    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance { get; private set; }

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

        private int _currentCoins = 0;
        public int CurrentCoins => _currentCoins;
        public int WinCoinTarget => winCoinTarget;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
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
                    break;
                case GameState.Fail:
                    OnGameFail?.Invoke();
                    break;
            }
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
            UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
        }
    }
}
