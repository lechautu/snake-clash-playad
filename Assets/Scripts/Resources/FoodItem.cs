using UnityEngine;
using SnakeClash.Snake;

namespace SnakeClash.Resources
{
    public class FoodItem : MonoBehaviour
    {
        [SerializeField] private int levelReward = 1;

        public void OnConsumed(SnakeControllerBase consumer)
        {
            if (consumer != null)
            {
                consumer.AddLevel(levelReward);
            }
            // FoodManager will return this to pool
        }
    }
}
