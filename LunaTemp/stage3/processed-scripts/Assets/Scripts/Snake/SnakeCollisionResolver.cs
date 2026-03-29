using UnityEngine;
using SnakeClash.Resources;
using SnakeClash.Core;

namespace SnakeClash.Snake
{
    public class SnakeCollisionResolver : MonoBehaviour
    {
        [SerializeField] private SnakeControllerBase owner;

        [Header("Settings")]
        [SerializeField] private float resourceRadius = 2.5f;
        [SerializeField] private float magnetSpeed = 15.0f;
        [SerializeField] private float combatRadius = 1.2f;

        private void FixedUpdate()
        {
            if (!owner.IsAlive || GameManager.Instance.CurrentState != GameState.Playing) return;

            float sf = owner.ScaleFactor;
            float scaledResourceRadius = resourceRadius * sf;
            float scaledCombatRadius = combatRadius * sf;
            float scaledConsumeThreshold = 0.3f * sf;

            Vector3 headPos = transform.position;

            // 1. Resources (Food, Coins)
            CheckResourceCollisions(headPos, scaledResourceRadius, scaledConsumeThreshold);

            // 2. Other Snakes
            CheckSnakeCollisions(headPos, scaledCombatRadius);
        }

        private void CheckResourceCollisions([Bridge.Ref] Vector3 headPos, float radius, float consumeThreshold)
        {
            // Food
            if (FoodManager.Instance != null)
            {
                var foodList = FoodManager.Instance.ActiveFood;
                for (int i = foodList.Count - 1; i >= 0; i--)
                {
                    float dist = Vector3.Distance(headPos, foodList[i].transform.position);
                    if (dist < radius)
                    {
                        if (dist < consumeThreshold)
                        {
                            var food = foodList[i];
                            food.OnConsumed(owner);
                            FoodManager.Instance.RecycleFood(food);
                            if (AudioManager.Instance != null) AudioManager.Instance.PlayEatSound();
                        }
                        else
                        {
                            foodList[i].transform.position = Vector3.MoveTowards(foodList[i].transform.position, headPos, magnetSpeed * Time.deltaTime);
                        }
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
                        float dist = Vector3.Distance(headPos, coinList[i].transform.position);
                        if (dist < radius)
                        {
                            if (dist < consumeThreshold)
                            {
                                var coin = coinList[i];
                                coin.Collect();
                                CoinManager.Instance.RecycleCoin(coin);
                                if (AudioManager.Instance != null) AudioManager.Instance.PlayEatSound();
                            }
                            else
                            {
                                coinList[i].transform.position = Vector3.MoveTowards(coinList[i].transform.position, headPos, magnetSpeed * Time.deltaTime);
                            }
                        }
                    }
                }

                // Chests
                if (ChestManager.Instance != null && ChestManager.Instance.ActiveChest != null)
                {
                    if (Vector3.Distance(headPos, ChestManager.Instance.ActiveChest.transform.position) < radius)
                    {
                        ChestPickup chest = ChestManager.Instance.ActiveChest.GetComponent<ChestPickup>();
                        if (chest != null) chest.Open(owner.CurrentLevel);
                    }
                }
            }
        }

        private void CheckSnakeCollisions([Bridge.Ref] Vector3 headPos, float radius)
        {
            var snakes = SnakeControllerBase.AllSnakes;
            foreach (var other in snakes)
            {
                if (other == owner || !other.IsAlive) continue;

                // Head-to-Head
                if (Vector3.Distance(headPos, other.transform.position) < radius)
                {
                    ResolveHeadToHead(other);
                    continue; // Skip body check for this snake
                }

                // Head-to-Body logic shifted to level check
                if (owner.CurrentLevel > other.CurrentLevel)
                {
                    var body = other.GetComponent<SnakeBodyController>();
                    if (body != null)
                    {
                        var segments = body.ActiveSegments;
                        for (int i = 0; i < segments.Count; i++)
                        {
                            if (Vector3.Distance(headPos, segments[i].transform.position) < radius)
                            {
                                ResolveHeadToBody(segments[i]);
                                break; // Done with this body
                            }
                        }
                    }
                }
                else
                {
                    // Bounce away from bodies if not stronger (weaker or equal)
                    var body = other.GetComponent<SnakeBodyController>();
                    if (body != null)
                    {
                        var segments = body.ActiveSegments;
                        for (int i = 0; i < segments.Count; i++)
                        {
                            if (Vector3.Distance(headPos, segments[i].transform.position) < radius)
                            {
                                BounceOwner(segments[i].transform.position);
                                break;
                            }
                        }
                    }
                }
            }
        }

        private void ResolveHeadToHead(SnakeControllerBase otherSnake)
        {
            if (owner.CurrentLevel > otherSnake.CurrentLevel)
            {
                owner.AddLevel(1); // Reward the winner
                if (owner is PlayerSnakeController)
                {
                    if (AudioManager.Instance != null) AudioManager.Instance.PlayKillSound();
                }
            }
            else if (owner.CurrentLevel < otherSnake.CurrentLevel)
            {
                owner.Kill();
            }
            else
            {
                // Tie: Both Bounce
                BounceOwner(otherSnake.transform.position);
            }
        }

        public void BounceOwner(Vector3 fromPosition)
        {
            Vector3 bounceDir = (owner.transform.position - fromPosition).normalized;
            bounceDir.y = 0;
            if (bounceDir == Vector3.zero) bounceDir = -owner.transform.forward;
            
            owner.transform.rotation = Quaternion.LookRotation(bounceDir, Vector3.up);
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
