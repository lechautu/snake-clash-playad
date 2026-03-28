using System.Collections.Generic;
using UnityEngine;

namespace SnakeClash.Support
{
    /// <summary>
    /// Lightweight generic object pool for high-frequency objects.
    /// </summary>
    public class ObjectPool<T> where T : Component
    {
        private T _prefab;
        private Transform _container;
        private Stack<T> _pool = new Stack<T>();

        public ObjectPool(T prefab, int initialSize, Transform container = null)
        {
            _prefab = prefab;
            _container = container;
            for (int i = 0; i < initialSize; i++)
            {
                T obj = Object.Instantiate(_prefab, _container);
                obj.gameObject.SetActive(false);
                _pool.Push(obj);
            }
        }

        public T Get()
        {
            T obj = _pool.Count > 0 ? _pool.Pop() : Object.Instantiate(_prefab, _container);
            obj.gameObject.SetActive(true);
            return obj;
        }

        public void Return(T obj)
        {
            obj.gameObject.SetActive(false);
            _pool.Push(obj);
        }
    }
}
