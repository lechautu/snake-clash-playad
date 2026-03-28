using UnityEngine;
using SnakeClash.Resources;
using SnakeClash.Core;

namespace SnakeClash.Snake
{
    public class SnakeCollisionResolver : MonoBehaviour
    {
        [SerializeField] private SnakeControllerBase owner;

        [Header("Settings")]
        [SerializeField] private float foodPickRadius = 1.0f;
        [SerializeField] private float combatRadius = 1.2f;

        private void Update()
        {
            if (!owner.IsAlive || GameManager.Instance.CurrentState != GameState.Playing) return;

            Vector3 headPos = transform.position;

            // 1. Resources (Food, Coins)
            CheckResourceCollisions(headPos);

            // 2. Other Snakes
            CheckSnakeCollisions(headPos);
        }

        private void CheckResourceCollisions(Vector3 headPos)
        {
            // Food
            if (FoodManager.Instance != null)
            {
                var foodList = FoodManager.Instance.ActiveFood;
                for (int i = foodList.Count - 1; i >= 0; i--)
                {
                    if (Vector3.Distance(headPos, foodList[i].transform.position) < foodPickRadius)
                    {
                        var food = foodList[i];
                        food.OnConsumed(owner);
                        FoodManager.Instance.RecycleFood(food);
                    }
                }
            }

            // Other resources are only for player
            if (owner is PlayerSnakeController)
            {
                // Coins
                if (CoinManager.Instance != null)
                {
                    var coinList = CoinManager.Instance.ActiveCoins;
                    for (int i = coinList.Count - 1; i >= 0; i--)
                    {
                        if (Vector3.Distance(headPos, coinList[i].transform.position) < foodPickRadius)
                        {
                            var coin = coinList[i];
                            coin.Collect();
                            CoinManager.Instance.RecycleCoin(coin);
                        }
                    }
                }

                // Chests
                if (ChestManager.Instance != null && ChestManager.Instance.ActiveChest != null)
                {
                    if (Vector3.Distance(headPos, ChestManager.Instance.ActiveChest.transform.position) < foodPickRadius)
                    {
                        ChestPickup chest = ChestManager.Instance.ActiveChest.GetComponent<ChestPickup>();
                        if (chest != null) chest.Open();
                    }
                }
            }
        }

        private void CheckSnakeCollisions(Vector3 headPos)
        {
            var snakes = SnakeControllerBase.AllSnakes;
            foreach (var other in snakes)
            {
                if (other == owner || !other.IsAlive) continue;

                // Head-to-Head
                if (Vector3.Distance(headPos, other.transform.position) < combatRadius)
                {
                    ResolveHeadToHead(other);
                    continue; // Skip body check for this snake
                }

                // Head-to-Body
                // Need cast or property for BodyController
                // For simplicity, find it by component if not in base
                var body = other.GetComponent<SnakeBodyController>();
                if (body != null)
                {
                    var segments = body.ActiveSegments;
                    for (int i = 0; i < segments.Count; i++)
                    {
                        if (Vector3.Distance(headPos, segments[i].transform.position) < foodPickRadius)
                        {
                            ResolveHeadToBody(segments[i]);
                            break; // Done with this body
                        }
                    }
                }
            }
        }

        private void ResolveHeadToHead(SnakeControllerBase otherSnake)
        {
            if (owner.CurrentLevel > otherSnake.CurrentLevel)
            {
                otherSnake.Kill();
            }
            else if (owner.CurrentLevel < otherSnake.CurrentLevel)
            {
                owner.Kill();
            }
            else
            {
                // Tie: Both die
                owner.Kill();
                otherSnake.Kill();
            }
        }

        private void ResolveHeadToBody(SnakeSegmentNode otherSegment)
        {
            // Head-to-Body Cutting Logic
            // The segment contacted by the head is consumed (+1 level for attacker)
            owner.AddLevel(1);
            
            // Notify the segment to trigger the cut on its owner body controller
            otherSegment.OnPickup(); 
        }
    }
}
