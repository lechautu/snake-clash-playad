using System.Collections.Generic;
using UnityEngine;
using SnakeClash.Core;

namespace SnakeClash.Snake
{
    public class SnakeBodyController : MonoBehaviour
    {
        [Header("References")]
        [SerializeField] private GameObject segmentPrefab;
        [SerializeField] private Transform headTransform;

        [Header("Settings")]
        [SerializeField] private float segmentSpacing = 0.5f;
        [SerializeField] private int initialSegments = 5;

        private List<SnakeSegmentNode> _activeSegments = new List<SnakeSegmentNode>();
        public IReadOnlyList<SnakeSegmentNode> ActiveSegments => _activeSegments;
        private List<Vector3> _positionHistory = new List<Vector3>();

        private void Start()
        {
            if (headTransform == null) headTransform = transform;
            _positionHistory.Add(headTransform.position);
            for (int i = 0; i < initialSegments; i++) AddSegment();
        }

        private void Update()
        {
            if (GameManager.Instance.CurrentState != GameState.Playing) return;

            // 1. Update position history
            if (Vector3.Distance(headTransform.position, _positionHistory[0]) > 0.05f)
            {
                _positionHistory.Insert(0, headTransform.position);
            }

            // 2. Prune history
            int segmentsCount = _activeSegments.Count;
            int maxHistory = (segmentsCount + 10) * 10;
            if (_positionHistory.Count > maxHistory) _positionHistory.RemoveAt(_positionHistory.Count - 1);

            // 3. Update segment positions
            float traveled = 0;
            int hIndex = 0;
            for (int i = 0; i < segmentsCount; i++)
            {
                float targetDist = (i + 1) * segmentSpacing;
                while (traveled < targetDist && hIndex < _positionHistory.Count - 1)
                {
                    traveled += Vector3.Distance(_positionHistory[hIndex], _positionHistory[hIndex + 1]);
                    hIndex++;
                }
                
                if (hIndex < _positionHistory.Count)
                {
                    _activeSegments[i].transform.position = _positionHistory[hIndex];
                    if (hIndex > 0)
                    {
                        Vector3 dir = _positionHistory[hIndex - 1] - _positionHistory[hIndex];
                        if (dir != Vector3.zero) _activeSegments[i].transform.rotation = Quaternion.LookRotation(dir);
                    }
                }
            }
        }

        public void AddSegment()
        {
            if (segmentPrefab == null) return;
            GameObject seg = Instantiate(segmentPrefab, transform);
            SnakeSegmentNode node = seg.GetComponent<SnakeSegmentNode>();
            if (node != null)
            {
                node.SetOwner(this);
                _activeSegments.Add(node);
            }
        }

        public void OnSegmentConsumed(SnakeSegmentNode node)
        {
            int index = _activeSegments.IndexOf(node);
            if (index == -1) return;

            for (int i = _activeSegments.Count - 1; i >= index; i--)
            {
                SnakeSegmentNode toRemove = _activeSegments[i];
                _activeSegments.RemoveAt(i);
                // Future: FoodManager.Instance.CreateFoodFromNode(toRemove);
                Destroy(toRemove.gameObject);
            }
        }

        public void OnDeath()
        {
            foreach (var seg in _activeSegments) Destroy(seg.gameObject);
            _activeSegments.Clear();
        }
    }
}
