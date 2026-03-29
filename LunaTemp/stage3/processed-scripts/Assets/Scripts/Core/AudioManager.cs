using UnityEngine;
using System.Collections.Generic;

namespace SnakeClash.Core
{
    public class AudioManager : MonoBehaviour
    {
        public static AudioManager Instance { get; private set; }

        [Header("Settings")]
        [SerializeField] private int poolSize = 10;
        [SerializeField] private float defaultVolume = 1.0f;

        [Header("Clips")]
        [SerializeField] private AudioClip eatClip;
        [SerializeField] private AudioClip openChestClip;
        [SerializeField] private AudioClip winClip;
        [SerializeField] private AudioClip killClip;
        [SerializeField] private AudioClip loseClip;
        [SerializeField] private AudioClip growClip;
        
        private List<AudioSource> _audioSourcePool;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
                InitializePool();
                DontDestroyOnLoad(gameObject);
            }
            else
            {
                Destroy(gameObject);
            }
        }

        private void InitializePool()
        {
            _audioSourcePool = new List<AudioSource>();
            for (int i = 0; i < poolSize; i++)
            {
                AudioSource source = gameObject.AddComponent<AudioSource>();
                source.playOnAwake = false;
                _audioSourcePool.Add(source);
            }
        }

        public void PlayEatSound()
        {
            if (eatClip != null)
            {
                PlayClip(eatClip);
            }
        }

        public void PlayChestOpenSound()
        {
            if (openChestClip != null)
            {
                PlayClip(openChestClip);
            }
        }

        public void PlayWinSound()
        {
            if (winClip != null)
            {
                PlayClip(winClip);
            }
        }

        public void PlayKillSound()
        {
            if (killClip != null)
            {
                PlayClip(killClip);
            }
        }

        public void PlayLoseSound()
        {
            if (loseClip != null)
            {
                PlayClip(loseClip);
            }
        }

        public void PlayGrowSound()
        {
            if (growClip != null)
            {
                PlayClip(growClip);
            }
        }

        public void PlayClip(AudioClip clip, float volumeScale = 1.0f)
        {
            if (clip == null) return;

            // Find an available source (not currently playing)
            AudioSource source = GetAvailableSource();
            if (source != null)
            {
                source.volume = defaultVolume * volumeScale;
                source.pitch = Random.Range(0.95f, 1.05f); // Subtle pitch variation for better feel
                source.PlayOneShot(clip);
            }
        }

        private AudioSource GetAvailableSource()
        {
            // First pass: look for a source that isn't playing
            for (int i = 0; i < _audioSourcePool.Count; i++)
            {
                if (!_audioSourcePool[i].isPlaying)
                {
                    return _audioSourcePool[i];
                }
            }

            // Fallback: If all are busy, for a lightweight ad, we just pick the oldest (first in list)
            // though PlayOneShot allows layering on the same source, but to follow "pool" request:
            return _audioSourcePool[0];
        }
    }
}
