using UnityEngine;
using System.Collections.Generic;

namespace SnakeClash.Snake
{
    public abstract class SnakeControllerBase : MonoBehaviour
    {
        [Header("Snake Identity")]
        [SerializeField] protected string snakeName = "Snake";
        [SerializeField] protected int initialLevel = 5;
        [SerializeField] protected int initialSegments = 5;

        public static List<SnakeControllerBase> AllSnakes = new List<SnakeControllerBase>();

        [Header("State")]
        protected int currentLevel;
        protected bool isAlive = true;

        protected virtual void OnEnable() { AllSnakes.Add(this); }
        protected virtual void OnDisable() { AllSnakes.Remove(this); }

        public int CurrentLevel => currentLevel;
        public bool IsAlive => isAlive;
        public string SnakeName => snakeName;
        public int InitialSegments { get { return initialSegments; } set { initialSegments = value; } }
        public float ScaleFactor => Mathf.Min(2f, 1.0f + (currentLevel / 50) * 0.1f);

        protected virtual void Start()
        {
            currentLevel = initialLevel;
            UpdateScale();
        }

        public void UpdateScale()
        {
            float f = ScaleFactor;
            transform.localScale = Vector3.one * f;
        }

        public virtual void AddLevel(int amount)
        {
            currentLevel += amount;
            UpdateScale();
        }

        public virtual void Kill()
        {
            if (!isAlive) return;
            isAlive = false;
        }
    }
}
