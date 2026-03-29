if ( TRACE ) { TRACE( JSON.parse( '["SnakeClash.Core.ArenaManager#ArenaSize#get","SnakeClash.Core.ArenaManager#FoodManager#get","SnakeClash.Core.ArenaManager#init","SnakeClash.Core.ArenaManager#Awake","SnakeClash.Core.ArenaManager#Start","SnakeClash.Core.ArenaManager#Update","SnakeClash.Core.ArenaManager#OnGameStart","SnakeClash.Core.ArenaManager#SpawnAIs","SnakeClash.Core.ArenaManager#SpawnOneAI","SnakeClash.Core.ArenaManager#GetRandomSafePosition","SnakeClash.Core.ArenaManager#GetRandomArenaPosition","SnakeClash.Core.ArenaManager#ClampToArena","SnakeClash.Core.ArenaManager#IsOutOfBounds","SnakeClash.Core.AudioManager#init","SnakeClash.Core.AudioManager#Awake","SnakeClash.Core.AudioManager#InitializePool","SnakeClash.Core.AudioManager#PlayEatSound","SnakeClash.Core.AudioManager#PlayChestOpenSound","SnakeClash.Core.AudioManager#PlayWinSound","SnakeClash.Core.AudioManager#PlayKillSound","SnakeClash.Core.AudioManager#PlayLoseSound","SnakeClash.Core.AudioManager#PlayGrowSound","SnakeClash.Core.AudioManager#PlayClip","SnakeClash.Core.AudioManager#GetAvailableSource","SnakeClash.Core.GameManager#PlayerSnakeController#get","SnakeClash.Core.GameManager#MainCamera#get","SnakeClash.Core.GameManager#MaxSegments#get","SnakeClash.Core.GameManager#CurrentState#get","SnakeClash.Core.GameManager#CurrentCoins#get","SnakeClash.Core.GameManager#WinCoinTarget#get","SnakeClash.Core.GameManager#init","SnakeClash.Core.GameManager#Awake","SnakeClash.Core.GameManager#Start","SnakeClash.Core.GameManager#SetState","SnakeClash.Core.GameManager#LunaLifeCycleGameEnded","SnakeClash.Core.GameManager#AddCoins","SnakeClash.Core.GameManager#StartGame","SnakeClash.Core.GameManager#InstallFullGame","SnakeClash.Resources.CoinManager#ActiveCoins#get","SnakeClash.Resources.CoinManager#init","SnakeClash.Resources.CoinManager#Awake","SnakeClash.Resources.CoinManager#Start","SnakeClash.Resources.CoinManager#SpawnCoinBurst","SnakeClash.Resources.CoinManager#GetCoinFromPool","SnakeClash.Resources.CoinManager#RecycleCoin","SnakeClash.Resources.CoinPickup#init","SnakeClash.Resources.CoinPickup#Collect","SnakeClash.Resources.CoinPickup#StartTossAnimation","SnakeClash.Resources.CoinPickup#TossCoroutine","SnakeClash.Resources.ChestManager#ActiveChest#get","SnakeClash.Resources.ChestManager#CurrentLevelRequirement#get","SnakeClash.Resources.ChestManager#init","SnakeClash.Resources.ChestManager#Awake","SnakeClash.Resources.ChestManager#Start","SnakeClash.Resources.ChestManager#Update","SnakeClash.Resources.ChestManager#SpawnInitialChest","SnakeClash.Resources.ChestManager#SpawnChest","SnakeClash.Resources.ChestPickup#RequiredLevel#get","SnakeClash.Resources.ChestPickup#init","SnakeClash.Resources.ChestPickup#Initialize","SnakeClash.Resources.ChestPickup#Awake","SnakeClash.Resources.ChestPickup#Start","SnakeClash.Resources.ChestPickup#Update","SnakeClash.Resources.ChestPickup#LateUpdate","SnakeClash.Resources.ChestPickup#Open","SnakeClash.Resources.ChestPickup#OpenSequence","SnakeClash.Resources.ChestPickup#SpawnChestCoin","SnakeClash.Resources.FoodItem#init","SnakeClash.Resources.FoodItem#OnConsumed","SnakeClash.Resources.FoodManager#ActiveFood#get","SnakeClash.Resources.FoodManager#init","SnakeClash.Resources.FoodManager#Awake","SnakeClash.Resources.FoodManager#Start","SnakeClash.Resources.FoodManager#SpawnAmbientFood","SnakeClash.Resources.FoodManager#RecycleFood","SnakeClash.Resources.FoodManager#CreateFoodFromNode","SnakeClash.Resources.FoodManager#GetRandomPosition","SnakeClash.Snake.AISnakeBrain#init","SnakeClash.Snake.AISnakeBrain#Start","SnakeClash.Snake.AISnakeBrain#GetDesiredHeading","SnakeClash.Snake.AISnakeBrain#UpdateDecision","SnakeClash.Snake.SnakeControllerBase#init","SnakeClash.Snake.SnakeControllerBase#CurrentLevel#get","SnakeClash.Snake.SnakeControllerBase#IsAlive#get","SnakeClash.Snake.SnakeControllerBase#SnakeName#get","SnakeClash.Snake.SnakeControllerBase#InitialSegments#get","SnakeClash.Snake.SnakeControllerBase#InitialSegments#set","SnakeClash.Snake.SnakeControllerBase#ScaleFactor#get","SnakeClash.Snake.SnakeControllerBase#init","SnakeClash.Snake.SnakeControllerBase#OnEnable","SnakeClash.Snake.SnakeControllerBase#OnDisable","SnakeClash.Snake.SnakeControllerBase#Start","SnakeClash.Snake.SnakeControllerBase#UpdateScale","SnakeClash.Snake.SnakeControllerBase#AddLevel","SnakeClash.Snake.SnakeControllerBase#Kill","SnakeClash.Snake.SnakeBodyController#ActiveSegments#get","SnakeClash.Snake.SnakeBodyController#init","SnakeClash.Snake.SnakeBodyController#Start","SnakeClash.Snake.SnakeBodyController#Update","SnakeClash.Snake.SnakeBodyController#AddSegment","SnakeClash.Snake.SnakeBodyController#RefreshAllSegments","SnakeClash.Snake.SnakeBodyController#OnSegmentConsumed","SnakeClash.Snake.SnakeBodyController#OnDeath","SnakeClash.Snake.SnakeCollisionResolver#init","SnakeClash.Snake.SnakeCollisionResolver#FixedUpdate","SnakeClash.Snake.SnakeCollisionResolver#CheckResourceCollisions","SnakeClash.Snake.SnakeCollisionResolver#CheckSnakeCollisions","SnakeClash.Snake.SnakeCollisionResolver#ResolveHeadToHead","SnakeClash.Snake.SnakeCollisionResolver#BounceOwner","SnakeClash.Snake.SnakeCollisionResolver#ResolveHeadToBody","SnakeClash.Snake.SnakeSegmentNode#SetOwner","SnakeClash.Snake.SnakeSegmentNode#RefreshVisual","SnakeClash.Snake.SnakeSegmentNode#OnPickup","SnakeClash.Support.ArenaCameraFollow#init","SnakeClash.Support.ArenaCameraFollow#LateUpdate","SnakeClash.Support.ArenaCameraFollow#SetTarget","SnakeClash.Support.LunaCTA#OnClicked","SnakeClash.Support.ObjectPool$1#init","SnakeClash.Support.ObjectPool$1#ctor","SnakeClash.Support.ObjectPool$1#Get","SnakeClash.Support.ObjectPool$1#Return","SnakeClash.UI.HUDController#Start","SnakeClash.UI.HUDController#DismissOnboard","SnakeClash.UI.HUDController#ShowOnboardSequence","SnakeClash.UI.HUDController#Update","SnakeClash.UI.MoveOnYLoop#init","SnakeClash.UI.MoveOnYLoop#Awake","SnakeClash.UI.MoveOnYLoop#OnEnable","SnakeClash.UI.MoveOnYLoop#OnDisable","SnakeClash.UI.MoveOnYLoop#StartAnimation","SnakeClash.UI.MoveOnYLoop#StopAnimation","SnakeClash.UI.MoveOnYLoop#AnimateLoop","SnakeClash.UI.OffScreenIndicator#init","SnakeClash.UI.OffScreenIndicator#SetTarget","SnakeClash.UI.OffScreenIndicator#Start","SnakeClash.UI.OffScreenIndicator#LateUpdate","SnakeClash.UI.PulseOnScale#init","SnakeClash.UI.PulseOnScale#Start","SnakeClash.UI.PulseOnScale#SetActive","SnakeClash.UI.PulseOnScale#Update","SnakeClash.UI.ResultPanel#Start","SnakeClash.UI.ResultPanel#ShowWin","SnakeClash.UI.ResultPanel#AnimateStageClear","SnakeClash.UI.ResultPanel#ShowFail","SnakeClash.UI.RotateOnZ#init","SnakeClash.UI.RotateOnZ#Update","SnakeClash.UI.SnakeLevelUI#init","SnakeClash.UI.SnakeLevelUI#Start","SnakeClash.UI.SnakeLevelUI#LateUpdate","SnakeClash.UI.VirtualJoystickInput#init","SnakeClash.UI.VirtualJoystickInput#SetInput","SnakeClash.UI.VirtualJoystickInput#GetInput","SnakeClash.UI.VirtualJoystickInput#Reset","SnakeClash.UI.VirtualJoystickView#init","SnakeClash.UI.VirtualJoystickView#Awake","SnakeClash.UI.VirtualJoystickView#Start","SnakeClash.UI.VirtualJoystickView#OnPointerDown","SnakeClash.UI.VirtualJoystickView#OnDrag","SnakeClash.UI.VirtualJoystickView#OnPointerUp","SnakeClash.UI.VirtualJoystickView#UpdateJoystickInput","SnakeClash.Snake.AISnakeController#init","SnakeClash.Snake.AISnakeController#Initialize","SnakeClash.Snake.AISnakeController#Start","SnakeClash.Snake.AISnakeController#Update","SnakeClash.Snake.AISnakeController#AddLevel","SnakeClash.Snake.AISnakeController#Kill","SnakeClash.Snake.PlayerSnakeController#init","SnakeClash.Snake.PlayerSnakeController#Update","SnakeClash.Snake.PlayerSnakeController#AddLevel","SnakeClash.Snake.PlayerSnakeController#Kill"]' ) ); }
/**
 * @version 1.0.9584.35558
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*SnakeClash.Core.ArenaManager start.*/
    Bridge.define("SnakeClash.Core.ArenaManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            arenaSize: null,
            foodManager: null,
            aiSnakePrefab: null,
            aiCount: 0,
            playerSnake: null,
            _activeAIs: null,
            _totalSpawnCount: 0
        },
        props: {
            ArenaSize: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#ArenaSize#get", this ); }

                    return this.arenaSize.$clone();
                }
            },
            FoodManager: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#FoodManager#get", this ); }

                    return this.foodManager;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#init", this ); }

                this.arenaSize = new UnityEngine.Vector2();
                this.arenaSize = new pc.Vec2( 50, 50 );
                this.aiCount = 5;
                this._activeAIs = new (System.Collections.Generic.List$1(SnakeClash.Snake.AISnakeController)).ctor();
                this._totalSpawnCount = 0;
            }
        },
        methods: {
            /*SnakeClash.Core.ArenaManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SnakeClash.Core.ArenaManager.Instance, null)) {
                    SnakeClash.Core.ArenaManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*SnakeClash.Core.ArenaManager.Awake end.*/

            /*SnakeClash.Core.ArenaManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance, null)) {
                    SnakeClash.Core.GameManager.Instance.OnGameStart.AddListener(Bridge.fn.cacheBind(this, this.OnGameStart));
                }
            },
            /*SnakeClash.Core.ArenaManager.Start end.*/

            /*SnakeClash.Core.ArenaManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#Update", this ); }

                if (SnakeClash.Core.GameManager.Instance.CurrentState !== SnakeClash.Core.GameState.Playing) {
                    return;
                }

                // 1. Clean up dead AI
                for (var i = (this._activeAIs.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this._activeAIs.getItem(i), null) || !this._activeAIs.getItem(i).IsAlive) {
                        this._activeAIs.removeAt(i);
                    }
                }

                // 2. Replenish
                if (this._activeAIs.Count < this.aiCount) {
                    this.SpawnOneAI();
                }
            },
            /*SnakeClash.Core.ArenaManager.Update end.*/

            /*SnakeClash.Core.ArenaManager.OnGameStart start.*/
            OnGameStart: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#OnGameStart", this ); }

                this.SpawnAIs();
            },
            /*SnakeClash.Core.ArenaManager.OnGameStart end.*/

            /*SnakeClash.Core.ArenaManager.SpawnAIs start.*/
            SpawnAIs: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#SpawnAIs", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.aiSnakePrefab, null)) {
                    return;
                }
                while (this._activeAIs.Count < this.aiCount) {
                    this.SpawnOneAI();
                }
            },
            /*SnakeClash.Core.ArenaManager.SpawnAIs end.*/

            /*SnakeClash.Core.ArenaManager.SpawnOneAI start.*/
            SpawnOneAI: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#SpawnOneAI", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.aiSnakePrefab, null)) {
                    return;
                }

                var spawnPos = this.GetRandomSafePosition();
                var ai = UnityEngine.Object.Instantiate$3(SnakeClash.Snake.AISnakeController, this.aiSnakePrefab, spawnPos, new pc.Quat().setFromEulerAngles_Unity( 0, UnityEngine.Random.Range(0, 360), 0 ), this.transform);

                // Tiered Spawning Logic
                var playerLevel = (UnityEngine.MonoBehaviour.op_Inequality(this.playerSnake, null)) ? this.playerSnake.CurrentLevel : 1;
                var aiLevel = playerLevel;

                this._totalSpawnCount = (this._totalSpawnCount + 1) | 0;

                if (playerLevel < 15) {
                    aiLevel = playerLevel;
                } else {
                    // Every 5th snake is an Elite (+10 levels)
                    if (this._totalSpawnCount % 5 === 0) {
                        aiLevel = (playerLevel + 10) | 0;
                    } else {
                        aiLevel = UnityEngine.Random.Range(((playerLevel - 10) | 0), ((playerLevel + 1) | 0));
                    }
                }

                // Segment scaling rule
                var segments = aiLevel;
                if (aiLevel > 20) {
                    segments = UnityEngine.Random.Range(15, 21);
                }

                ai.Initialize(aiLevel, segments);
                this._activeAIs.add(ai);
            },
            /*SnakeClash.Core.ArenaManager.SpawnOneAI end.*/

            /*SnakeClash.Core.ArenaManager.GetRandomSafePosition start.*/
            GetRandomSafePosition: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#GetRandomSafePosition", this ); }

                var $t;
                var pos = this.GetRandomArenaPosition();
                var safeDistance = 20.0;
                var attempts = 0;
                var isSafe = false;

                while (!isSafe && attempts < 50) {
                    pos = this.GetRandomArenaPosition();
                    attempts = (attempts + 1) | 0;
                    isSafe = true;

                    // Check distance from player
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.playerSnake, null) && pc.Vec3.distance( pos, this.playerSnake.transform.position ) < safeDistance) {
                        isSafe = false;
                        continue;
                    }

                    // Check distance from other active AIs
                    $t = Bridge.getEnumerator(this._activeAIs);
                    try {
                        while ($t.moveNext()) {
                            var ai = $t.Current;
                            if (UnityEngine.MonoBehaviour.op_Inequality(ai, null) && pc.Vec3.distance( pos, ai.transform.position ) < 5.0) {
                                isSafe = false;
                                break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
                return pos.$clone();
            },
            /*SnakeClash.Core.ArenaManager.GetRandomSafePosition end.*/

            /*SnakeClash.Core.ArenaManager.GetRandomArenaPosition start.*/
            GetRandomArenaPosition: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#GetRandomArenaPosition", this ); }

                var x = UnityEngine.Random.Range$1(-this.arenaSize.x * 0.4, this.arenaSize.x * 0.4);
                var z = UnityEngine.Random.Range$1(-this.arenaSize.y * 0.4, this.arenaSize.y * 0.4);
                return new pc.Vec3( x, 0, z );
            },
            /*SnakeClash.Core.ArenaManager.GetRandomArenaPosition end.*/

            /*SnakeClash.Core.ArenaManager.ClampToArena start.*/
            ClampToArena: function (position) {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#ClampToArena", this ); }

                var halfX = this.arenaSize.x * 0.5;
                var halfY = this.arenaSize.y * 0.5;
                position.x = Math.max(-halfX, Math.min(position.x, halfX));
                position.z = Math.max(-halfY, Math.min(position.z, halfY));
                return position.$clone();
            },
            /*SnakeClash.Core.ArenaManager.ClampToArena end.*/

            /*SnakeClash.Core.ArenaManager.IsOutOfBounds start.*/
            IsOutOfBounds: function (position) {
if ( TRACE ) { TRACE( "SnakeClash.Core.ArenaManager#IsOutOfBounds", this ); }

                var halfX = this.arenaSize.x * 0.5;
                var halfY = this.arenaSize.y * 0.5;
                return Math.abs(position.x) > halfX || Math.abs(position.z) > halfY;
            },
            /*SnakeClash.Core.ArenaManager.IsOutOfBounds end.*/


        }
    });
    /*SnakeClash.Core.ArenaManager end.*/

    /*SnakeClash.Core.AudioManager start.*/
    Bridge.define("SnakeClash.Core.AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            poolSize: 0,
            defaultVolume: 0,
            eatClip: null,
            openChestClip: null,
            winClip: null,
            killClip: null,
            loseClip: null,
            growClip: null,
            _audioSourcePool: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#init", this ); }

                this.poolSize = 10;
                this.defaultVolume = 1.0;
            }
        },
        methods: {
            /*SnakeClash.Core.AudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SnakeClash.Core.AudioManager.Instance, null)) {
                    SnakeClash.Core.AudioManager.Instance = this;
                    this.InitializePool();
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*SnakeClash.Core.AudioManager.Awake end.*/

            /*SnakeClash.Core.AudioManager.InitializePool start.*/
            InitializePool: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#InitializePool", this ); }

                this._audioSourcePool = new (System.Collections.Generic.List$1(UnityEngine.AudioSource)).ctor();
                for (var i = 0; i < this.poolSize; i = (i + 1) | 0) {
                    var source = this.gameObject.AddComponent(UnityEngine.AudioSource);
                    source.playOnAwake = false;
                    this._audioSourcePool.add(source);
                }
            },
            /*SnakeClash.Core.AudioManager.InitializePool end.*/

            /*SnakeClash.Core.AudioManager.PlayEatSound start.*/
            PlayEatSound: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#PlayEatSound", this ); }

                if (this.eatClip != null) {
                    this.PlayClip(this.eatClip);
                }
            },
            /*SnakeClash.Core.AudioManager.PlayEatSound end.*/

            /*SnakeClash.Core.AudioManager.PlayChestOpenSound start.*/
            PlayChestOpenSound: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#PlayChestOpenSound", this ); }

                if (this.openChestClip != null) {
                    this.PlayClip(this.openChestClip);
                }
            },
            /*SnakeClash.Core.AudioManager.PlayChestOpenSound end.*/

            /*SnakeClash.Core.AudioManager.PlayWinSound start.*/
            PlayWinSound: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#PlayWinSound", this ); }

                if (this.winClip != null) {
                    this.PlayClip(this.winClip);
                }
            },
            /*SnakeClash.Core.AudioManager.PlayWinSound end.*/

            /*SnakeClash.Core.AudioManager.PlayKillSound start.*/
            PlayKillSound: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#PlayKillSound", this ); }

                if (this.killClip != null) {
                    this.PlayClip(this.killClip);
                }
            },
            /*SnakeClash.Core.AudioManager.PlayKillSound end.*/

            /*SnakeClash.Core.AudioManager.PlayLoseSound start.*/
            PlayLoseSound: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#PlayLoseSound", this ); }

                if (this.loseClip != null) {
                    this.PlayClip(this.loseClip);
                }
            },
            /*SnakeClash.Core.AudioManager.PlayLoseSound end.*/

            /*SnakeClash.Core.AudioManager.PlayGrowSound start.*/
            PlayGrowSound: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#PlayGrowSound", this ); }

                if (this.growClip != null) {
                    this.PlayClip(this.growClip);
                }
            },
            /*SnakeClash.Core.AudioManager.PlayGrowSound end.*/

            /*SnakeClash.Core.AudioManager.PlayClip start.*/
            PlayClip: function (clip, volumeScale) {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#PlayClip", this ); }

                if (volumeScale === void 0) { volumeScale = 1.0; }
                if (clip == null) {
                    return;
                }

                // Find an available source (not currently playing)
                var source = this.GetAvailableSource();
                if (UnityEngine.Component.op_Inequality(source, null)) {
                    source.volume = this.defaultVolume * volumeScale;
                    source.pitch = UnityEngine.Random.Range$1(0.95, 1.05); // Subtle pitch variation for better feel
                    source.PlayOneShot(clip);
                }
            },
            /*SnakeClash.Core.AudioManager.PlayClip end.*/

            /*SnakeClash.Core.AudioManager.GetAvailableSource start.*/
            GetAvailableSource: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.AudioManager#GetAvailableSource", this ); }

                // First pass: look for a source that isn't playing
                for (var i = 0; i < this._audioSourcePool.Count; i = (i + 1) | 0) {
                    if (!this._audioSourcePool.getItem(i).isPlaying) {
                        return this._audioSourcePool.getItem(i);
                    }
                }

                // Fallback: If all are busy, for a lightweight ad, we just pick the oldest (first in list)
                // though PlayOneShot allows layering on the same source, but to follow "pool" request:
                return this._audioSourcePool.getItem(0);
            },
            /*SnakeClash.Core.AudioManager.GetAvailableSource end.*/


        }
    });
    /*SnakeClash.Core.AudioManager end.*/

    /*SnakeClash.Core.GameManager start.*/
    Bridge.define("SnakeClash.Core.GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            playerSnakeController: null,
            mainCamera: null,
            winCoinTarget: 0,
            maxSegments: 0,
            OnGameStart: null,
            OnGameWin: null,
            OnGameFail: null,
            _currentState: 0,
            _currentCoins: 0
        },
        props: {
            PlayerSnakeController: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#PlayerSnakeController#get", this ); }

                    return this.playerSnakeController;
                }
            },
            MainCamera: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#MainCamera#get", this ); }

                    return this.mainCamera;
                }
            },
            MaxSegments: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#MaxSegments#get", this ); }

                    return this.maxSegments;
                }
            },
            CurrentState: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#CurrentState#get", this ); }

                    return this._currentState;
                }
            },
            CurrentCoins: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#CurrentCoins#get", this ); }

                    return this._currentCoins;
                }
            },
            WinCoinTarget: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#WinCoinTarget#get", this ); }

                    return this.winCoinTarget;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#init", this ); }

                this.winCoinTarget = 200;
                this.maxSegments = 50;
                this._currentState = SnakeClash.Core.GameState.Boot;
                this._currentCoins = 0;
            }
        },
        methods: {
            /*SnakeClash.Core.GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SnakeClash.Core.GameManager.Instance, null)) {
                    SnakeClash.Core.GameManager.Instance = this;
                    this.mainCamera = UnityEngine.Camera.main;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*SnakeClash.Core.GameManager.Awake end.*/

            /*SnakeClash.Core.GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#Start", this ); }

                this.SetState(SnakeClash.Core.GameState.Ready);
            },
            /*SnakeClash.Core.GameManager.Start end.*/

            /*SnakeClash.Core.GameManager.SetState start.*/
            SetState: function (newState) {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#SetState", this ); }

                if (this._currentState === newState) {
                    return;
                }

                this._currentState = newState;
                UnityEngine.Debug.Log$1(System.String.format("Game State Changed: {0}", [Bridge.box(newState, SnakeClash.Core.GameState, System.Enum.toStringFn(SnakeClash.Core.GameState))]));

                switch (this._currentState) {
                    case SnakeClash.Core.GameState.Playing: 
                        this.OnGameStart != null ? this.OnGameStart.Invoke() : null;
                        break;
                    case SnakeClash.Core.GameState.Win: 
                        this.OnGameWin != null ? this.OnGameWin.Invoke() : null;
                        this.LunaLifeCycleGameEnded();
                        break;
                    case SnakeClash.Core.GameState.Fail: 
                        this.OnGameFail != null ? this.OnGameFail.Invoke() : null;
                        this.LunaLifeCycleGameEnded();
                        break;
                }
            },
            /*SnakeClash.Core.GameManager.SetState end.*/

            /*SnakeClash.Core.GameManager.LunaLifeCycleGameEnded start.*/
            LunaLifeCycleGameEnded: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#LunaLifeCycleGameEnded", this ); }

                UnityEngine.Debug.Log$1("Luna API: GameEnded called");

                // If it's not the first attempt, we could also call InstallFullGame here
                // but normally it's better to wait for a user click.
            },
            /*SnakeClash.Core.GameManager.LunaLifeCycleGameEnded end.*/

            /*SnakeClash.Core.GameManager.AddCoins start.*/
            AddCoins: function (amount) {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#AddCoins", this ); }

                if (this._currentState !== SnakeClash.Core.GameState.Playing) {
                    return;
                }

                this._currentCoins = (this._currentCoins + amount) | 0;
                if (this._currentCoins >= this.winCoinTarget) {
                    this._currentCoins = this.winCoinTarget;
                    this.SetState(SnakeClash.Core.GameState.Win);
                }
            },
            /*SnakeClash.Core.GameManager.AddCoins end.*/

            /*SnakeClash.Core.GameManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#StartGame", this ); }

                this.SetState(SnakeClash.Core.GameState.Playing);
            },
            /*SnakeClash.Core.GameManager.StartGame end.*/

            /*SnakeClash.Core.GameManager.InstallFullGame start.*/
            InstallFullGame: function () {
if ( TRACE ) { TRACE( "SnakeClash.Core.GameManager#InstallFullGame", this ); }

                UnityEngine.Debug.Log$1("Luna API: InstallFullGame called");
            },
            /*SnakeClash.Core.GameManager.InstallFullGame end.*/


        }
    });
    /*SnakeClash.Core.GameManager end.*/

    /*SnakeClash.Core.GameState start.*/
    Bridge.define("SnakeClash.Core.GameState", {
        $kind: 6,
        statics: {
            fields: {
                Boot: 0,
                Ready: 1,
                Playing: 2,
                Win: 3,
                Fail: 4
            }
        }
    });
    /*SnakeClash.Core.GameState end.*/

    /*SnakeClash.Resources.CoinManager start.*/
    Bridge.define("SnakeClash.Resources.CoinManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            coinPrefab: null,
            initialPoolSize: 0,
            _coinPool: null,
            _activeCoins: null
        },
        props: {
            ActiveCoins: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinManager#ActiveCoins#get", this ); }

                    return this._activeCoins;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinManager#init", this ); }

                this.initialPoolSize = 50;
                this._activeCoins = new (System.Collections.Generic.List$1(SnakeClash.Resources.CoinPickup)).ctor();
            }
        },
        methods: {
            /*SnakeClash.Resources.CoinManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SnakeClash.Resources.CoinManager.Instance, null)) {
                    SnakeClash.Resources.CoinManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*SnakeClash.Resources.CoinManager.Awake end.*/

            /*SnakeClash.Resources.CoinManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.coinPrefab, null)) {
                    this._coinPool = new (SnakeClash.Support.ObjectPool$1(SnakeClash.Resources.CoinPickup))(this.coinPrefab, this.initialPoolSize, this.transform);
                }
            },
            /*SnakeClash.Resources.CoinManager.Start end.*/

            /*SnakeClash.Resources.CoinManager.SpawnCoinBurst start.*/
            SpawnCoinBurst: function (origin, amount, burstRange) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinManager#SpawnCoinBurst", this ); }

                if (burstRange === void 0) { burstRange = 2.0; }
                for (var i = 0; i < amount; i = (i + 1) | 0) {
                    var coin = this.GetCoinFromPool();
                    if (UnityEngine.MonoBehaviour.op_Inequality(coin, null)) {
                        coin.transform.position = origin.$clone();
                        var randomCircle = UnityEngine.Random.insideUnitCircle.$clone().scale( burstRange );
                        var targetPos = origin.$clone().add( new pc.Vec3( randomCircle.x, 0, randomCircle.y ) );

                        // Default burst behavior: immediate or quick toss
                        coin.StartTossAnimation(targetPos, 0.4);
                    }
                }
            },
            /*SnakeClash.Resources.CoinManager.SpawnCoinBurst end.*/

            /*SnakeClash.Resources.CoinManager.GetCoinFromPool start.*/
            GetCoinFromPool: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinManager#GetCoinFromPool", this ); }

                if (this._coinPool == null) {
                    return null;
                }

                var coin = this._coinPool.Get();
                this._activeCoins.add(coin);
                return coin;
            },
            /*SnakeClash.Resources.CoinManager.GetCoinFromPool end.*/

            /*SnakeClash.Resources.CoinManager.RecycleCoin start.*/
            RecycleCoin: function (coin) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinManager#RecycleCoin", this ); }

                if (this._activeCoins.remove(coin)) {
                    this._coinPool.Return(coin);
                }
            },
            /*SnakeClash.Resources.CoinManager.RecycleCoin end.*/


        }
    });
    /*SnakeClash.Resources.CoinManager end.*/

    /*SnakeClash.Resources.CoinPickup start.*/
    Bridge.define("SnakeClash.Resources.CoinPickup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            coinValue: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinPickup#init", this ); }

                this.coinValue = 1;
            }
        },
        methods: {
            /*SnakeClash.Resources.CoinPickup.Collect start.*/
            Collect: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinPickup#Collect", this ); }

                SnakeClash.Core.GameManager.Instance.AddCoins(this.coinValue);
            },
            /*SnakeClash.Resources.CoinPickup.Collect end.*/

            /*SnakeClash.Resources.CoinPickup.StartTossAnimation start.*/
            StartTossAnimation: function (targetPos, duration) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinPickup#StartTossAnimation", this ); }

                this.StartCoroutine$1(this.TossCoroutine(targetPos.$clone(), duration));
            },
            /*SnakeClash.Resources.CoinPickup.StartTossAnimation end.*/

            /*SnakeClash.Resources.CoinPickup.TossCoroutine start.*/
            TossCoroutine: function (targetPos, duration) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.CoinPickup#TossCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    elapsed,
                    peakHeight,
                    t,
                    currentPos,
                    yOffset,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = this.transform.position.$clone();
                                        elapsed = 0.0;
                                        peakHeight = 1.5;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;

                                        // Horizontal Lerp
                                        currentPos = new pc.Vec3().lerp( startPos, targetPos, t );

                                        // Vertical Arc (Parabola)
                                        yOffset = Math.sin(t * UnityEngine.Mathf.PI) * peakHeight;
                                        currentPos.y += yOffset;

                                        this.transform.position = currentPos.$clone();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = targetPos.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SnakeClash.Resources.CoinPickup.TossCoroutine end.*/


        }
    });
    /*SnakeClash.Resources.CoinPickup end.*/

    /*SnakeClash.Resources.ChestManager start.*/
    Bridge.define("SnakeClash.Resources.ChestManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            chestPrefab: null,
            chestIndicator: null,
            initialSpawnPoint: null,
            levelRequireIncrement: 0,
            _spawnedChest: null,
            _currentLevelRequirement: 0
        },
        props: {
            ActiveChest: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestManager#ActiveChest#get", this ); }

                    return this._spawnedChest;
                }
            },
            CurrentLevelRequirement: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestManager#CurrentLevelRequirement#get", this ); }

                    return this._currentLevelRequirement;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestManager#init", this ); }

                this.levelRequireIncrement = 50;
                this._currentLevelRequirement = 5;
            }
        },
        methods: {
            /*SnakeClash.Resources.ChestManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SnakeClash.Resources.ChestManager.Instance, null)) {
                    SnakeClash.Resources.ChestManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*SnakeClash.Resources.ChestManager.Awake end.*/

            /*SnakeClash.Resources.ChestManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestManager#Start", this ); }

                this.SpawnInitialChest();
            },
            /*SnakeClash.Resources.ChestManager.Start end.*/

            /*SnakeClash.Resources.ChestManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestManager#Update", this ); }

                if (SnakeClash.Core.GameManager.Instance.CurrentState !== SnakeClash.Core.GameState.Playing) {
                    return;
                }

                // Only spawn a new chest if one doesn't exist
                if (UnityEngine.GameObject.op_Equality(this._spawnedChest, null)) {
                    this.SpawnChest();
                }
            },
            /*SnakeClash.Resources.ChestManager.Update end.*/

            /*SnakeClash.Resources.ChestManager.SpawnInitialChest start.*/
            SpawnInitialChest: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestManager#SpawnInitialChest", this ); }

                if (UnityEngine.Component.op_Inequality(this.initialSpawnPoint, null)) {
                    this.SpawnChest(this.initialSpawnPoint.position.$clone());
                }
            },
            /*SnakeClash.Resources.ChestManager.SpawnInitialChest end.*/

            /*SnakeClash.Resources.ChestManager.SpawnChest start.*/
            SpawnChest: function (fixedPosition) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestManager#SpawnChest", this ); }

                if (fixedPosition === void 0) { fixedPosition = null; }
                if (UnityEngine.GameObject.op_Equality(this.chestPrefab, null)) {
                    return;
                }

                var spawnPos = new UnityEngine.Vector3();
                if (System.Nullable.hasValue(fixedPosition)) {
                    spawnPos = System.Nullable.getValue(fixedPosition).$clone();
                } else {
                    var x = UnityEngine.Random.Range$1(-20.0, 20.0);
                    var z = UnityEngine.Random.Range$1(-20.0, 20.0);
                    spawnPos = new pc.Vec3( x, 0, z );
                }

                this._spawnedChest = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.chestPrefab, spawnPos, pc.Quat.IDENTITY.clone(), this.transform);

                var chest = this._spawnedChest.GetComponent(SnakeClash.Resources.ChestPickup);
                if (UnityEngine.MonoBehaviour.op_Inequality(chest, null)) {
                    chest.Initialize(this._currentLevelRequirement);
                }

                // Increase requirement for NEXT chest
                this._currentLevelRequirement = (this._currentLevelRequirement + this.levelRequireIncrement) | 0;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.chestIndicator, null)) {
                    this.chestIndicator.SetTarget(this._spawnedChest.transform);
                }
            },
            /*SnakeClash.Resources.ChestManager.SpawnChest end.*/


        }
    });
    /*SnakeClash.Resources.ChestManager end.*/

    /*SnakeClash.Resources.ChestPickup start.*/
    Bridge.define("SnakeClash.Resources.ChestPickup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            coinsPerChest: 0,
            burstRange: 0,
            burstTotalDuration: 0,
            animator: null,
            levelText: null,
            camTransform: null,
            _isOpening: false,
            _requiredLevel: 0
        },
        props: {
            RequiredLevel: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#RequiredLevel#get", this ); }

                    return this._requiredLevel;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#init", this ); }

                this.coinsPerChest = 20;
                this.burstRange = 4.0;
                this.burstTotalDuration = 0.5;
                this._isOpening = false;
                this._requiredLevel = 0;
            }
        },
        methods: {
            /*SnakeClash.Resources.ChestPickup.Initialize start.*/
            Initialize: function (level) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#Initialize", this ); }

                this._requiredLevel = level;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.levelText, null)) {
                    this.levelText.text = "Lv " + level;
                }
            },
            /*SnakeClash.Resources.ChestPickup.Initialize end.*/

            /*SnakeClash.Resources.ChestPickup.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.levelText, null)) {
                    this.levelText = this.GetComponentInChildren(TMPro.TextMeshPro);
                }
            },
            /*SnakeClash.Resources.ChestPickup.Awake end.*/

            /*SnakeClash.Resources.ChestPickup.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.camTransform, null) && UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance, null) && UnityEngine.Component.op_Inequality(SnakeClash.Core.GameManager.Instance.MainCamera, null)) {
                    this.camTransform = SnakeClash.Core.GameManager.Instance.MainCamera.transform;
                }

                if (UnityEngine.Component.op_Equality(this.animator, null)) {
                    this.animator = this.GetComponent(UnityEngine.Animator);
                }

                // Reset state for potential reuse/pooling
                this.transform.localScale = new pc.Vec3( 1, 1, 1 );
            },
            /*SnakeClash.Resources.ChestPickup.Start end.*/

            /*SnakeClash.Resources.ChestPickup.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#Update", this ); }

                if (this._isOpening || UnityEngine.MonoBehaviour.op_Equality(this.levelText, null)) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance.PlayerSnakeController, null)) {
                    var playerLevel = SnakeClash.Core.GameManager.Instance.PlayerSnakeController.CurrentLevel;
                    this.levelText.color = (playerLevel >= this._requiredLevel) ? new pc.Color( 1, 1, 1, 1 ) : new pc.Color( 1, 0, 0, 1 );
                }
            },
            /*SnakeClash.Resources.ChestPickup.Update end.*/

            /*SnakeClash.Resources.ChestPickup.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#LateUpdate", this ); }

                if (UnityEngine.Component.op_Inequality(this.camTransform, null) && UnityEngine.MonoBehaviour.op_Inequality(this.levelText, null)) {
                    this.levelText.transform$2.rotation = this.camTransform.rotation.$clone();
                }
            },
            /*SnakeClash.Resources.ChestPickup.LateUpdate end.*/

            /*SnakeClash.Resources.ChestPickup.Open start.*/
            Open: function (playerLevel) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#Open", this ); }

                if (this._isOpening || playerLevel < this._requiredLevel) {
                    return;
                }
                this._isOpening = true;

                if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                    this.animator.SetTrigger$1("OpenTrigger");
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.AudioManager.Instance, null)) {
                    SnakeClash.Core.AudioManager.Instance.PlayChestOpenSound();
                }

                this.StartCoroutine$1(this.OpenSequence());
            },
            /*SnakeClash.Resources.ChestPickup.Open end.*/

            /*SnakeClash.Resources.ChestPickup.OpenSequence start.*/
            OpenSequence: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#OpenSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    delayBetweenCoins,
                    i,
                    shrinkElapsed,
                    shrinkDuration,
                    startScale,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    delayBetweenCoins = this.burstTotalDuration / this.coinsPerChest;

                                        i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < this.coinsPerChest ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Resources.CoinManager.Instance, null)) {
                                            // Call the modified manager function or spawn manually for fine control
                                            this.SpawnChestCoin();
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delayBetweenCoins);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    // Shrink and vanish
                                        shrinkElapsed = 0.0;
                                        shrinkDuration = 0.25;
                                        startScale = this.transform.localScale.$clone();
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    if ( shrinkElapsed < shrinkDuration ) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 7: {
                                    shrinkElapsed += UnityEngine.Time.deltaTime;
                                        t = shrinkElapsed / shrinkDuration;
                                        this.transform.localScale = new pc.Vec3().lerp( startScale, pc.Vec3.ZERO.clone(), t );
                                        $enumerator.current = null;
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    
                                        $step = 6;
                                        continue;
                                }
                                case 9: {
                                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SnakeClash.Resources.ChestPickup.OpenSequence end.*/

            /*SnakeClash.Resources.ChestPickup.SpawnChestCoin start.*/
            SpawnChestCoin: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.ChestPickup#SpawnChestCoin", this ); }

                // Utility to trigger coin with toss
                var coin = SnakeClash.Resources.CoinManager.Instance.GetCoinFromPool();
                if (UnityEngine.MonoBehaviour.op_Inequality(coin, null)) {
                    coin.transform.position = this.transform.position.$clone();
                    var randomCircle = UnityEngine.Random.insideUnitCircle.$clone().scale( this.burstRange );
                    var targetPos = this.transform.position.$clone().add( new pc.Vec3( randomCircle.x, 0, randomCircle.y ) );

                    coin.StartTossAnimation(targetPos, 0.4); // Quick 0.4s toss animation
                }
            },
            /*SnakeClash.Resources.ChestPickup.SpawnChestCoin end.*/


        }
    });
    /*SnakeClash.Resources.ChestPickup end.*/

    /*SnakeClash.Resources.FoodItem start.*/
    Bridge.define("SnakeClash.Resources.FoodItem", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            levelReward: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodItem#init", this ); }

                this.levelReward = 1;
            }
        },
        methods: {
            /*SnakeClash.Resources.FoodItem.OnConsumed start.*/
            OnConsumed: function (consumer) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodItem#OnConsumed", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(consumer, null)) {
                    consumer.AddLevel(this.levelReward);
                }
                // FoodManager will return this to pool
            },
            /*SnakeClash.Resources.FoodItem.OnConsumed end.*/


        }
    });
    /*SnakeClash.Resources.FoodItem end.*/

    /*SnakeClash.Resources.FoodManager start.*/
    Bridge.define("SnakeClash.Resources.FoodManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            foodPrefab: null,
            maxAmbientFood: 0,
            spawnRadius: 0,
            _foodPool: null,
            _activeFood: null
        },
        props: {
            ActiveFood: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodManager#ActiveFood#get", this ); }

                    return this._activeFood;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodManager#init", this ); }

                this.maxAmbientFood = 100;
                this.spawnRadius = 25.0;
                this._activeFood = new (System.Collections.Generic.List$1(SnakeClash.Resources.FoodItem)).ctor();
            }
        },
        methods: {
            /*SnakeClash.Resources.FoodManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SnakeClash.Resources.FoodManager.Instance, null)) {
                    SnakeClash.Resources.FoodManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*SnakeClash.Resources.FoodManager.Awake end.*/

            /*SnakeClash.Resources.FoodManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.foodPrefab, null)) {
                    this._foodPool = new (SnakeClash.Support.ObjectPool$1(SnakeClash.Resources.FoodItem))(this.foodPrefab, this.maxAmbientFood, this.transform);
                    for (var i = 0; i < this.maxAmbientFood; i = (i + 1) | 0) {
                        this.SpawnAmbientFood();
                    }
                }
            },
            /*SnakeClash.Resources.FoodManager.Start end.*/

            /*SnakeClash.Resources.FoodManager.SpawnAmbientFood start.*/
            SpawnAmbientFood: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodManager#SpawnAmbientFood", this ); }

                var food = this._foodPool.Get();
                food.transform.position = this.GetRandomPosition();
                this._activeFood.add(food);
            },
            /*SnakeClash.Resources.FoodManager.SpawnAmbientFood end.*/

            /*SnakeClash.Resources.FoodManager.RecycleFood start.*/
            RecycleFood: function (food) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodManager#RecycleFood", this ); }

                if (this._activeFood.remove(food)) {
                    this._foodPool.Return(food);

                    // Only spawn new natural food if we are below the limit
                    if (this._activeFood.Count < this.maxAmbientFood) {
                        this.SpawnAmbientFood();
                    }
                }
            },
            /*SnakeClash.Resources.FoodManager.RecycleFood end.*/

            /*SnakeClash.Resources.FoodManager.CreateFoodFromNode start.*/
            CreateFoodFromNode: function (position) {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodManager#CreateFoodFromNode", this ); }

                var food = this._foodPool.Get();
                food.transform.position = position.$clone();
                this._activeFood.add(food);
            },
            /*SnakeClash.Resources.FoodManager.CreateFoodFromNode end.*/

            /*SnakeClash.Resources.FoodManager.GetRandomPosition start.*/
            GetRandomPosition: function () {
if ( TRACE ) { TRACE( "SnakeClash.Resources.FoodManager#GetRandomPosition", this ); }

                var x = UnityEngine.Random.Range$1(-this.spawnRadius, this.spawnRadius);
                var z = UnityEngine.Random.Range$1(-this.spawnRadius, this.spawnRadius);
                return new pc.Vec3( x, 0, z );
            },
            /*SnakeClash.Resources.FoodManager.GetRandomPosition end.*/


        }
    });
    /*SnakeClash.Resources.FoodManager end.*/

    /*SnakeClash.Snake.AISnakeBrain start.*/
    Bridge.define("SnakeClash.Snake.AISnakeBrain", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            decisionInterval: 0,
            detectionRadius: 0,
            owner: null,
            _lastDecisionTime: 0,
            _currentHeading: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeBrain#init", this ); }

                this._currentHeading = new UnityEngine.Vector3();
                this.decisionInterval = 0.5;
                this.detectionRadius = 12.0;
                this._lastDecisionTime = 0.0;
                this._currentHeading = new pc.Vec3( 0, 0, 1 );
            }
        },
        methods: {
            /*SnakeClash.Snake.AISnakeBrain.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeBrain#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.owner, null)) {
                    this.owner = this.GetComponent(SnakeClash.Snake.SnakeControllerBase);
                }
            },
            /*SnakeClash.Snake.AISnakeBrain.Start end.*/

            /*SnakeClash.Snake.AISnakeBrain.GetDesiredHeading start.*/
            GetDesiredHeading: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeBrain#GetDesiredHeading", this ); }

                if (UnityEngine.Time.time - this._lastDecisionTime > this.decisionInterval) {
                    this.UpdateDecision();
                    this._lastDecisionTime = UnityEngine.Time.time;
                }
                return this._currentHeading.$clone();
            },
            /*SnakeClash.Snake.AISnakeBrain.GetDesiredHeading end.*/

            /*SnakeClash.Snake.AISnakeBrain.UpdateDecision start.*/
            UpdateDecision: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeBrain#UpdateDecision", this ); }

                // 1. Determine preferred direction
                var preferredHeading = this._currentHeading.$clone();
                var player = SnakeClash.Core.GameManager.Instance.PlayerSnakeController;

                if (UnityEngine.MonoBehaviour.op_Inequality(player, null) && player.IsAlive && UnityEngine.MonoBehaviour.op_Inequality(this.owner, null)) {
                    var dist = pc.Vec3.distance( this.transform.position, player.transform.position );
                    if (dist < this.detectionRadius && player.CurrentLevel > this.owner.CurrentLevel) {
                        // Flee from player
                        preferredHeading = (this.transform.position.$clone().sub( player.transform.position )).clone().normalize().$clone();
                    } else {
                        // Normal Wander
                        preferredHeading = new pc.Quat().setFromEulerAngles_Unity( 0, UnityEngine.Random.Range(-45, 45), 0 ).transformVector( this._currentHeading );
                    }
                } else {
                    // Fallback Wander
                    preferredHeading = new pc.Quat().setFromEulerAngles_Unity( 0, UnityEngine.Random.Range(-45, 45), 0 ).transformVector( this._currentHeading );
                }

                this._currentHeading = preferredHeading.$clone();

                // 2. Bound clamping (always overrides to keep inside)
                if (SnakeClash.Core.ArenaManager.Instance.IsOutOfBounds(this.transform.position.$clone().add( this._currentHeading.$clone().clone().scale( 5.0 ) ))) {
                    // Turn away from bounds
                    this._currentHeading = pc.Vec3.reflect( this._currentHeading, this.transform.position.clone().normalize().$clone().scale( -1 ) );
                }

                this._currentHeading.y = 0;
                this._currentHeading.normalize();
            },
            /*SnakeClash.Snake.AISnakeBrain.UpdateDecision end.*/


        }
    });
    /*SnakeClash.Snake.AISnakeBrain end.*/

    /*SnakeClash.Snake.SnakeControllerBase start.*/
    Bridge.define("SnakeClash.Snake.SnakeControllerBase", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                AllSnakes: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#init", this ); }

                    this.AllSnakes = new (System.Collections.Generic.List$1(SnakeClash.Snake.SnakeControllerBase)).ctor();
                }
            }
        },
        fields: {
            snakeName: null,
            initialLevel: 0,
            initialSegments: 0,
            currentLevel: 0,
            isAlive: false
        },
        props: {
            CurrentLevel: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#CurrentLevel#get", this ); }

                    return this.currentLevel;
                }
            },
            IsAlive: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#IsAlive#get", this ); }

                    return this.isAlive;
                }
            },
            SnakeName: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#SnakeName#get", this ); }

                    return this.snakeName;
                }
            },
            InitialSegments: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#InitialSegments#get", this ); }

                    return this.initialSegments;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#InitialSegments#set", this ); }

                    this.initialSegments = value;
                }
            },
            ScaleFactor: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#ScaleFactor#get", this ); }

                    return UnityEngine.Mathf.Min(2.0, 1.0 + (((Bridge.Int.div(this.currentLevel, 50)) | 0)) * 0.1);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#init", this ); }

                this.snakeName = "Snake";
                this.initialLevel = 5;
                this.initialSegments = 5;
                this.isAlive = true;
            }
        },
        methods: {
            /*SnakeClash.Snake.SnakeControllerBase.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#OnEnable", this ); }

                SnakeClash.Snake.SnakeControllerBase.AllSnakes.add(this);
            },
            /*SnakeClash.Snake.SnakeControllerBase.OnEnable end.*/

            /*SnakeClash.Snake.SnakeControllerBase.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#OnDisable", this ); }

                SnakeClash.Snake.SnakeControllerBase.AllSnakes.remove(this);
            },
            /*SnakeClash.Snake.SnakeControllerBase.OnDisable end.*/

            /*SnakeClash.Snake.SnakeControllerBase.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#Start", this ); }

                this.currentLevel = this.initialLevel;
                this.UpdateScale();
            },
            /*SnakeClash.Snake.SnakeControllerBase.Start end.*/

            /*SnakeClash.Snake.SnakeControllerBase.UpdateScale start.*/
            UpdateScale: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#UpdateScale", this ); }

                var f = this.ScaleFactor;
                this.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( f );
            },
            /*SnakeClash.Snake.SnakeControllerBase.UpdateScale end.*/

            /*SnakeClash.Snake.SnakeControllerBase.AddLevel start.*/
            AddLevel: function (amount) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#AddLevel", this ); }

                this.currentLevel = (this.currentLevel + amount) | 0;
                this.UpdateScale();
            },
            /*SnakeClash.Snake.SnakeControllerBase.AddLevel end.*/

            /*SnakeClash.Snake.SnakeControllerBase.Kill start.*/
            Kill: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeControllerBase#Kill", this ); }

                if (!this.isAlive) {
                    return;
                }
                this.isAlive = false;
            },
            /*SnakeClash.Snake.SnakeControllerBase.Kill end.*/


        }
    });
    /*SnakeClash.Snake.SnakeControllerBase end.*/

    /*SnakeClash.Snake.SnakeBodyController start.*/
    Bridge.define("SnakeClash.Snake.SnakeBodyController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            headVisual: null,
            segmentPrefab: null,
            headTransform: null,
            segmentSpacing: 0,
            initialSegments: 0,
            _activeSegments: null,
            _positionHistory: null
        },
        props: {
            ActiveSegments: {
                get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeBodyController#ActiveSegments#get", this ); }

                    return this._activeSegments;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeBodyController#init", this ); }

                this.segmentSpacing = 0.5;
                this.initialSegments = 5;
                this._activeSegments = new (System.Collections.Generic.List$1(SnakeClash.Snake.SnakeSegmentNode)).ctor();
                this._positionHistory = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
            }
        },
        methods: {
            /*SnakeClash.Snake.SnakeBodyController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeBodyController#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.headTransform, null)) {
                    this.headTransform = this.transform;
                }
                this._positionHistory.add(this.headTransform.position.$clone());

                // Inherit initial segments from owner if available
                var owner = this.GetComponent(SnakeClash.Snake.SnakeControllerBase);
                var count = (UnityEngine.MonoBehaviour.op_Inequality(owner, null)) ? owner.InitialSegments : this.initialSegments;

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    this.AddSegment();
                }
                this.RefreshAllSegments();
            },
            /*SnakeClash.Snake.SnakeBodyController.Start end.*/

            /*SnakeClash.Snake.SnakeBodyController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeBodyController#Update", this ); }

                if (SnakeClash.Core.GameManager.Instance.CurrentState !== SnakeClash.Core.GameState.Playing) {
                    return;
                }

                // 1. Update position history
                if (pc.Vec3.distance( this.headTransform.position, this._positionHistory.getItem(0) ) > 0.05) {
                    this._positionHistory.insert(0, this.headTransform.position.$clone());
                }

                // 2. Prune history
                var segmentsCount = this._activeSegments.Count;
                var maxHistory = Bridge.Int.mul((((segmentsCount + 10) | 0)), 10);
                if (this._positionHistory.Count > maxHistory) {
                    this._positionHistory.removeAt(((this._positionHistory.Count - 1) | 0));
                }

                // 3. Update segment positions
                var traveled = 0;
                var hIndex = 0;
                for (var i = 0; i < segmentsCount; i = (i + 1) | 0) {
                    var targetDist = (((i + 1) | 0)) * this.segmentSpacing;
                    while (traveled < targetDist && hIndex < ((this._positionHistory.Count - 1) | 0)) {
                        traveled += pc.Vec3.distance( this._positionHistory.getItem(hIndex), this._positionHistory.getItem(((hIndex + 1) | 0)) );
                        hIndex = (hIndex + 1) | 0;
                    }

                    if (hIndex < this._positionHistory.Count) {
                        this._activeSegments.getItem(i).transform.position = this._positionHistory.getItem(hIndex).$clone();
                        if (hIndex > 0) {
                            var dir = this._positionHistory.getItem(((hIndex - 1) | 0)).$clone().sub( this._positionHistory.getItem(hIndex) );
                            if (!pc.Vec3.equals( dir, pc.Vec3.ZERO.clone() )) {
                                this._activeSegments.getItem(i).transform.rotation = new pc.Quat().lookRotation( dir, pc.Vec3.UP );
                            }
                        }
                    }
                }
            },
            /*SnakeClash.Snake.SnakeBodyController.Update end.*/

            /*SnakeClash.Snake.SnakeBodyController.AddSegment start.*/
            AddSegment: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeBodyController#AddSegment", this ); }

                if (UnityEngine.GameObject.op_Equality(this.segmentPrefab, null)) {
                    return;
                }

                var limit = (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance, null)) ? SnakeClash.Core.GameManager.Instance.MaxSegments : 100;
                if (this._activeSegments.Count >= limit) {
                    return;
                }

                var seg = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.segmentPrefab, this.transform);
                var node = seg.GetComponent(SnakeClash.Snake.SnakeSegmentNode);
                if (UnityEngine.MonoBehaviour.op_Inequality(node, null)) {
                    node.SetOwner(this);
                    this._activeSegments.add(node);
                    this.RefreshAllSegments();
                }
            },
            /*SnakeClash.Snake.SnakeBodyController.AddSegment end.*/

            /*SnakeClash.Snake.SnakeBodyController.RefreshAllSegments start.*/
            RefreshAllSegments: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeBodyController#RefreshAllSegments", this ); }

                for (var i = 0; i < this._activeSegments.Count; i = (i + 1) | 0) {
                    var isTail = (i === ((this._activeSegments.Count - 1) | 0));
                    this._activeSegments.getItem(i).RefreshVisual(isTail);
                }
            },
            /*SnakeClash.Snake.SnakeBodyController.RefreshAllSegments end.*/

            /*SnakeClash.Snake.SnakeBodyController.OnSegmentConsumed start.*/
            OnSegmentConsumed: function (node) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeBodyController#OnSegmentConsumed", this ); }

                var index = this._activeSegments.indexOf(node);
                if (index === -1) {
                    return;
                }

                for (var i = (this._activeSegments.Count - 1) | 0; i >= index; i = (i - 1) | 0) {
                    var toRemove = this._activeSegments.getItem(i);
                    var pos = toRemove.transform.position.$clone();
                    this._activeSegments.removeAt(i);

                    // Convert back to food
                    if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Resources.FoodManager.Instance, null)) {
                        SnakeClash.Resources.FoodManager.Instance.CreateFoodFromNode(pos);
                    }

                    UnityEngine.MonoBehaviour.Destroy(toRemove.gameObject);
                }

                this.RefreshAllSegments();
            },
            /*SnakeClash.Snake.SnakeBodyController.OnSegmentConsumed end.*/

            /*SnakeClash.Snake.SnakeBodyController.OnDeath start.*/
            OnDeath: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeBodyController#OnDeath", this ); }

                var $t, $t1;
                if (UnityEngine.GameObject.op_Inequality(this.headVisual, null)) {
                    this.headVisual.SetActive(false);
                }

                // Hide the actual root visual container or any Level UI children
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        child.gameObject.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                $t1 = Bridge.getEnumerator(this._activeSegments);
                try {
                    while ($t1.moveNext()) {
                        var seg = $t1.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Resources.FoodManager.Instance, null)) {
                            SnakeClash.Resources.FoodManager.Instance.CreateFoodFromNode(seg.transform.position);
                        }
                        UnityEngine.MonoBehaviour.Destroy(seg.gameObject);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                this._activeSegments.clear();
            },
            /*SnakeClash.Snake.SnakeBodyController.OnDeath end.*/


        }
    });
    /*SnakeClash.Snake.SnakeBodyController end.*/

    /*SnakeClash.Snake.SnakeCollisionResolver start.*/
    Bridge.define("SnakeClash.Snake.SnakeCollisionResolver", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            owner: null,
            resourceRadius: 0,
            magnetSpeed: 0,
            combatRadius: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeCollisionResolver#init", this ); }

                this.resourceRadius = 2.5;
                this.magnetSpeed = 15.0;
                this.combatRadius = 1.2;
            }
        },
        methods: {
            /*SnakeClash.Snake.SnakeCollisionResolver.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeCollisionResolver#FixedUpdate", this ); }

                if (!this.owner.IsAlive || SnakeClash.Core.GameManager.Instance.CurrentState !== SnakeClash.Core.GameState.Playing) {
                    return;
                }

                var sf = this.owner.ScaleFactor;
                var scaledResourceRadius = this.resourceRadius * sf;
                var scaledCombatRadius = this.combatRadius * sf;
                var scaledConsumeThreshold = 0.3 * sf;

                var headPos = this.transform.position.$clone();

                // 1. Resources (Food, Coins)
                this.CheckResourceCollisions(headPos, scaledResourceRadius, scaledConsumeThreshold);

                // 2. Other Snakes
                this.CheckSnakeCollisions(headPos, scaledCombatRadius);
            },
            /*SnakeClash.Snake.SnakeCollisionResolver.FixedUpdate end.*/

            /*SnakeClash.Snake.SnakeCollisionResolver.CheckResourceCollisions start.*/
            CheckResourceCollisions: function (headPos, radius, consumeThreshold) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeCollisionResolver#CheckResourceCollisions", this ); }

                // Food
                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Resources.FoodManager.Instance, null)) {
                    var foodList = SnakeClash.Resources.FoodManager.Instance.ActiveFood;
                    for (var i = (System.Array.getCount(foodList, SnakeClash.Resources.FoodItem) - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        var dist = pc.Vec3.distance( headPos, System.Array.getItem(foodList, i, SnakeClash.Resources.FoodItem).transform.position );
                        if (dist < radius) {
                            if (dist < consumeThreshold) {
                                var food = System.Array.getItem(foodList, i, SnakeClash.Resources.FoodItem);
                                food.OnConsumed(this.owner);
                                SnakeClash.Resources.FoodManager.Instance.RecycleFood(food);
                                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.AudioManager.Instance, null)) {
                                    SnakeClash.Core.AudioManager.Instance.PlayEatSound();
                                }
                            } else {
                                System.Array.getItem(foodList, i, SnakeClash.Resources.FoodItem).transform.position = pc.Vec3.moveTowards( System.Array.getItem(foodList, i, SnakeClash.Resources.FoodItem).transform.position, headPos, this.magnetSpeed * UnityEngine.Time.deltaTime );
                            }
                        }
                    }
                }

                // Other resources are only for player
                if (Bridge.is(this.owner, SnakeClash.Snake.PlayerSnakeController)) {
                    // Coins
                    if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Resources.CoinManager.Instance, null)) {
                        var coinList = SnakeClash.Resources.CoinManager.Instance.ActiveCoins;
                        for (var i1 = (System.Array.getCount(coinList, SnakeClash.Resources.CoinPickup) - 1) | 0; i1 >= 0; i1 = (i1 - 1) | 0) {
                            var dist1 = pc.Vec3.distance( headPos, System.Array.getItem(coinList, i1, SnakeClash.Resources.CoinPickup).transform.position );
                            if (dist1 < radius) {
                                if (dist1 < consumeThreshold) {
                                    var coin = System.Array.getItem(coinList, i1, SnakeClash.Resources.CoinPickup);
                                    coin.Collect();
                                    SnakeClash.Resources.CoinManager.Instance.RecycleCoin(coin);
                                    if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.AudioManager.Instance, null)) {
                                        SnakeClash.Core.AudioManager.Instance.PlayEatSound();
                                    }
                                } else {
                                    System.Array.getItem(coinList, i1, SnakeClash.Resources.CoinPickup).transform.position = pc.Vec3.moveTowards( System.Array.getItem(coinList, i1, SnakeClash.Resources.CoinPickup).transform.position, headPos, this.magnetSpeed * UnityEngine.Time.deltaTime );
                                }
                            }
                        }
                    }

                    // Chests
                    if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Resources.ChestManager.Instance, null) && UnityEngine.GameObject.op_Inequality(SnakeClash.Resources.ChestManager.Instance.ActiveChest, null)) {
                        if (pc.Vec3.distance( headPos, SnakeClash.Resources.ChestManager.Instance.ActiveChest.transform.position ) < radius) {
                            var chest = SnakeClash.Resources.ChestManager.Instance.ActiveChest.GetComponent(SnakeClash.Resources.ChestPickup);
                            if (UnityEngine.MonoBehaviour.op_Inequality(chest, null)) {
                                chest.Open(this.owner.CurrentLevel);
                            }
                        }
                    }
                }
            },
            /*SnakeClash.Snake.SnakeCollisionResolver.CheckResourceCollisions end.*/

            /*SnakeClash.Snake.SnakeCollisionResolver.CheckSnakeCollisions start.*/
            CheckSnakeCollisions: function (headPos, radius) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeCollisionResolver#CheckSnakeCollisions", this ); }

                var $t;
                var snakes = SnakeClash.Snake.SnakeControllerBase.AllSnakes;
                $t = Bridge.getEnumerator(snakes);
                try {
                    while ($t.moveNext()) {
                        var other = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(other, this.owner) || !other.IsAlive) {
                            continue;
                        }

                        // Head-to-Head
                        if (pc.Vec3.distance( headPos, other.transform.position ) < radius) {
                            this.ResolveHeadToHead(other);
                            continue; // Skip body check for this snake
                        }

                        // Head-to-Body logic shifted to level check
                        if (this.owner.CurrentLevel > other.CurrentLevel) {
                            var body = other.GetComponent(SnakeClash.Snake.SnakeBodyController);
                            if (UnityEngine.MonoBehaviour.op_Inequality(body, null)) {
                                var segments = body.ActiveSegments;
                                for (var i = 0; i < System.Array.getCount(segments, SnakeClash.Snake.SnakeSegmentNode); i = (i + 1) | 0) {
                                    if (pc.Vec3.distance( headPos, System.Array.getItem(segments, i, SnakeClash.Snake.SnakeSegmentNode).transform.position ) < radius) {
                                        this.ResolveHeadToBody(System.Array.getItem(segments, i, SnakeClash.Snake.SnakeSegmentNode));
                                        break; // Done with this body
                                    }
                                }
                            }
                        } else {
                            // Bounce away from bodies if not stronger (weaker or equal)
                            var body1 = other.GetComponent(SnakeClash.Snake.SnakeBodyController);
                            if (UnityEngine.MonoBehaviour.op_Inequality(body1, null)) {
                                var segments1 = body1.ActiveSegments;
                                for (var i1 = 0; i1 < System.Array.getCount(segments1, SnakeClash.Snake.SnakeSegmentNode); i1 = (i1 + 1) | 0) {
                                    if (pc.Vec3.distance( headPos, System.Array.getItem(segments1, i1, SnakeClash.Snake.SnakeSegmentNode).transform.position ) < radius) {
                                        this.BounceOwner(System.Array.getItem(segments1, i1, SnakeClash.Snake.SnakeSegmentNode).transform.position.$clone());
                                        break;
                                    }
                                }
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SnakeClash.Snake.SnakeCollisionResolver.CheckSnakeCollisions end.*/

            /*SnakeClash.Snake.SnakeCollisionResolver.ResolveHeadToHead start.*/
            ResolveHeadToHead: function (otherSnake) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeCollisionResolver#ResolveHeadToHead", this ); }

                if (this.owner.CurrentLevel > otherSnake.CurrentLevel) {
                    this.owner.AddLevel(1); // Reward the winner
                    if (Bridge.is(this.owner, SnakeClash.Snake.PlayerSnakeController)) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.AudioManager.Instance, null)) {
                            SnakeClash.Core.AudioManager.Instance.PlayKillSound();
                        }
                    }
                } else if (this.owner.CurrentLevel < otherSnake.CurrentLevel) {
                    this.owner.Kill();
                } else {
                    // Tie: Both Bounce
                    this.BounceOwner(otherSnake.transform.position.$clone());
                }
            },
            /*SnakeClash.Snake.SnakeCollisionResolver.ResolveHeadToHead end.*/

            /*SnakeClash.Snake.SnakeCollisionResolver.BounceOwner start.*/
            BounceOwner: function (fromPosition) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeCollisionResolver#BounceOwner", this ); }

                var bounceDir = (this.owner.transform.position.$clone().sub( fromPosition )).clone().normalize().$clone();
                bounceDir.y = 0;
                if (pc.Vec3.equals( bounceDir, pc.Vec3.ZERO.clone() )) {
                    bounceDir = this.owner.transform.forward.$clone().scale( -1 );
                }

                this.owner.transform.rotation = new pc.Quat().lookRotation( bounceDir, pc.Vec3.UP.clone() );
            },
            /*SnakeClash.Snake.SnakeCollisionResolver.BounceOwner end.*/

            /*SnakeClash.Snake.SnakeCollisionResolver.ResolveHeadToBody start.*/
            ResolveHeadToBody: function (otherSegment) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeCollisionResolver#ResolveHeadToBody", this ); }

                // Head-to-Body Cutting Logic
                // The segment contacted by the head is consumed (+1 level for attacker)
                this.owner.AddLevel(1);

                // Notify the segment to trigger the cut on its owner body controller
                otherSegment.OnPickup();
            },
            /*SnakeClash.Snake.SnakeCollisionResolver.ResolveHeadToBody end.*/


        }
    });
    /*SnakeClash.Snake.SnakeCollisionResolver end.*/

    /*SnakeClash.Snake.SnakeSegmentNode start.*/
    Bridge.define("SnakeClash.Snake.SnakeSegmentNode", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bodyVisual: null,
            tailVisual: null,
            _owner: null
        },
        methods: {
            /*SnakeClash.Snake.SnakeSegmentNode.SetOwner start.*/
            SetOwner: function (bodyOwner) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeSegmentNode#SetOwner", this ); }

                this._owner = bodyOwner;
            },
            /*SnakeClash.Snake.SnakeSegmentNode.SetOwner end.*/

            /*SnakeClash.Snake.SnakeSegmentNode.RefreshVisual start.*/
            RefreshVisual: function (asTail) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeSegmentNode#RefreshVisual", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.bodyVisual, null)) {
                    this.bodyVisual.SetActive(!asTail);
                }
                if (UnityEngine.GameObject.op_Inequality(this.tailVisual, null)) {
                    this.tailVisual.SetActive(asTail);
                }
            },
            /*SnakeClash.Snake.SnakeSegmentNode.RefreshVisual end.*/

            /*SnakeClash.Snake.SnakeSegmentNode.OnPickup start.*/
            OnPickup: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.SnakeSegmentNode#OnPickup", this ); }

                // Triggered via CollisionResolver
                if (UnityEngine.MonoBehaviour.op_Inequality(this._owner, null)) {
                    this._owner.OnSegmentConsumed(this);
                }
            },
            /*SnakeClash.Snake.SnakeSegmentNode.OnPickup end.*/


        }
    });
    /*SnakeClash.Snake.SnakeSegmentNode end.*/

    /*SnakeClash.Support.ArenaCameraFollow start.*/
    Bridge.define("SnakeClash.Support.ArenaCameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            offset: null,
            smoothSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Support.ArenaCameraFollow#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.offset = new pc.Vec3( 0, 20, -10 );
                this.smoothSpeed = 0.125;
            }
        },
        methods: {
            /*SnakeClash.Support.ArenaCameraFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "SnakeClash.Support.ArenaCameraFollow#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this.target, null)) {
                    return;
                }

                var zoomFactor = 1.0;
                var targetSnake = this.target.GetComponent(SnakeClash.Snake.SnakeControllerBase);
                if (UnityEngine.MonoBehaviour.op_Inequality(targetSnake, null)) {
                    zoomFactor = targetSnake.ScaleFactor;
                }

                var desiredPosition = this.target.position.$clone().add( this.offset.$clone().clone().scale( zoomFactor ) );
                var smoothedPosition = new pc.Vec3().lerp( this.transform.position, desiredPosition, this.smoothSpeed );
                this.transform.position = smoothedPosition.$clone();

                this.transform.LookAt$2(this.target.position);
            },
            /*SnakeClash.Support.ArenaCameraFollow.LateUpdate end.*/

            /*SnakeClash.Support.ArenaCameraFollow.SetTarget start.*/
            SetTarget: function (newTarget) {
if ( TRACE ) { TRACE( "SnakeClash.Support.ArenaCameraFollow#SetTarget", this ); }

                this.target = newTarget;
            },
            /*SnakeClash.Support.ArenaCameraFollow.SetTarget end.*/


        }
    });
    /*SnakeClash.Support.ArenaCameraFollow end.*/

    /*SnakeClash.Support.LunaCTA start.*/
    /** @namespace SnakeClash.Support */

    /**
     * Simple component to hook up to any button in the scene to trigger the store redirect.
     Helpful for CTA (Call-to-Action) buttons.
     *
     * @public
     * @class SnakeClash.Support.LunaCTA
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("SnakeClash.Support.LunaCTA", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*SnakeClash.Support.LunaCTA.OnClicked start.*/
            OnClicked: function () {
if ( TRACE ) { TRACE( "SnakeClash.Support.LunaCTA#OnClicked", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance, null)) {
                    SnakeClash.Core.GameManager.Instance.InstallFullGame();
                }
            },
            /*SnakeClash.Support.LunaCTA.OnClicked end.*/


        }
    });
    /*SnakeClash.Support.LunaCTA end.*/

    /*SnakeClash.Support.ObjectPool$1 start.*/
    /**
     * Lightweight generic object pool for high-frequency objects.
     *
     * @public
     * @class SnakeClash.Support.ObjectPool$1
     */
    Bridge.define("SnakeClash.Support.ObjectPool$1", function (T) { return {
        fields: {
            _prefab: Bridge.getDefaultValue(T),
            _container: null,
            _pool: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Support.ObjectPool$1#init", this ); }

                this._prefab = Bridge.getDefaultValue(T);
                this._pool = new (System.Collections.Generic.Stack$1(T)).ctor();
            },
            ctor: function (prefab, initialSize, container) {
if ( TRACE ) { TRACE( "SnakeClash.Support.ObjectPool$1#ctor", this ); }

                if (container === void 0) { container = null; }

                this.$initialize();
                this._prefab = Bridge.rValue(prefab);
                this._container = container;
                for (var i = 0; i < initialSize; i = (i + 1) | 0) {
                    var obj = Bridge.rValue(UnityEngine.Object.Instantiate(T, Bridge.rValue(this._prefab), this._container));
Bridge.rValue(                    obj).gameObject.SetActive(false);
                    this._pool.Push(Bridge.rValue(obj));
                }
            }
        },
        methods: {
            /*SnakeClash.Support.ObjectPool$1.Get start.*/
            Get: function () {
if ( TRACE ) { TRACE( "SnakeClash.Support.ObjectPool$1#Get", this ); }

                var obj = this._pool.Count > 0 ? this._pool.Pop() : UnityEngine.Object.Instantiate(T, Bridge.rValue(this._prefab), this._container);
Bridge.rValue(                obj).gameObject.SetActive(true);
                return Bridge.rValue(obj);
            },
            /*SnakeClash.Support.ObjectPool$1.Get end.*/

            /*SnakeClash.Support.ObjectPool$1.Return start.*/
            Return: function (obj) {
if ( TRACE ) { TRACE( "SnakeClash.Support.ObjectPool$1#Return", this ); }

Bridge.rValue(                obj).gameObject.SetActive(false);
                this._pool.Push(Bridge.rValue(obj));
            },
            /*SnakeClash.Support.ObjectPool$1.Return end.*/


        }
    }; });
    /*SnakeClash.Support.ObjectPool$1 end.*/

    /*SnakeClash.UI.HUDController start.*/
    Bridge.define("SnakeClash.UI.HUDController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            coinProgressBar: null,
            onboardPanel: null,
            onboardChest: null,
            tutorHand: null
        },
        methods: {
            /*SnakeClash.UI.HUDController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.HUDController#Start", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.onboardPanel, null)) {
                    this.onboardPanel.SetActive(true);
                    if (UnityEngine.Component.op_Inequality(this.tutorHand, null)) {
                        this.tutorHand.gameObject.SetActive(false);
                    }
                    this.StartCoroutine$1(this.ShowOnboardSequence());

                    // Onboard only closes when game officially starts (joystick moved)
                    SnakeClash.Core.GameManager.Instance.OnGameStart.AddListener(Bridge.fn.cacheBind(this, this.DismissOnboard));
                }
            },
            /*SnakeClash.UI.HUDController.Start end.*/

            /*SnakeClash.UI.HUDController.DismissOnboard start.*/
            DismissOnboard: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.HUDController#DismissOnboard", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.onboardPanel, null)) {
                    this.onboardPanel.SetActive(false);
                }
            },
            /*SnakeClash.UI.HUDController.DismissOnboard end.*/

            /*SnakeClash.UI.HUDController.ShowOnboardSequence start.*/
            ShowOnboardSequence: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.HUDController#ShowOnboardSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    duration,
                    startScale,
                    peekScale,
                    t,
                    t1,
                    smoothT,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // 1s wait
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // "Popping" scale animation for chest
                                        if (UnityEngine.Component.op_Inequality(this.onboardChest, null)) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 2: {
                                    elapsed = 0.0;
                                        duration = 0.15;
                                        startScale = new pc.Vec3( 1, 1, 1 );
                                        peekScale = new pc.Vec3( 1.2, 1.2, 1.2 );
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsed < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        this.onboardChest.localScale = new pc.Vec3().lerp( startScale, peekScale, pc.math.smoothstep(0, 1, t) );
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    elapsed = 0.0;
                                        duration = 0.25;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    if ( elapsed < duration ) {
                                            $step = 8;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 8: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t1 = elapsed / duration;
                                        smoothT = t1 * t1 * t1;
                                        this.onboardChest.localScale = new pc.Vec3().lerp( peekScale, pc.Vec3.ZERO.clone(), smoothT );
                                        $enumerator.current = null;
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    
                                        $step = 7;
                                        continue;
                                }
                                case 10: {
                                    this.onboardChest.localScale = pc.Vec3.ZERO.clone();
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    // Show tutor hand (MoveOnYLoop handles its own animation on Enable)
                                        if (UnityEngine.Component.op_Inequality(this.tutorHand, null)) {
                                            this.tutorHand.gameObject.SetActive(true);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SnakeClash.UI.HUDController.ShowOnboardSequence end.*/

            /*SnakeClash.UI.HUDController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.HUDController#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.coinProgressBar, null)) {
                    var progress = SnakeClash.Core.GameManager.Instance.CurrentCoins / SnakeClash.Core.GameManager.Instance.WinCoinTarget;
                    this.coinProgressBar.value = progress;
                }
            },
            /*SnakeClash.UI.HUDController.Update end.*/


        }
    });
    /*SnakeClash.UI.HUDController end.*/

    /*SnakeClash.UI.MoveOnYLoop start.*/
    Bridge.define("SnakeClash.UI.MoveOnYLoop", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            duration: 0,
            amount: 0,
            autoStart: false,
            _rectTransform: null,
            _originalPos: null,
            _isAnimating: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.MoveOnYLoop#init", this ); }

                this._originalPos = new UnityEngine.Vector3();
                this.duration = 0.6;
                this.amount = 50.0;
                this.autoStart = true;
            }
        },
        methods: {
            /*SnakeClash.UI.MoveOnYLoop.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.MoveOnYLoop#Awake", this ); }

                this._rectTransform = this.GetComponent(UnityEngine.RectTransform);
                if (UnityEngine.Component.op_Inequality(this._rectTransform, null)) {
                    this._originalPos = UnityEngine.Vector3.FromVector2(this._rectTransform.anchoredPosition.$clone());
                }
            },
            /*SnakeClash.UI.MoveOnYLoop.Awake end.*/

            /*SnakeClash.UI.MoveOnYLoop.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.MoveOnYLoop#OnEnable", this ); }

                if (this.autoStart) {
                    this.StartAnimation();
                }
            },
            /*SnakeClash.UI.MoveOnYLoop.OnEnable end.*/

            /*SnakeClash.UI.MoveOnYLoop.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.MoveOnYLoop#OnDisable", this ); }

                this.StopAnimation();
                if (UnityEngine.Component.op_Inequality(this._rectTransform, null)) {
                    this._rectTransform.anchoredPosition = UnityEngine.Vector2.FromVector3(this._originalPos.$clone());
                }
            },
            /*SnakeClash.UI.MoveOnYLoop.OnDisable end.*/

            /*SnakeClash.UI.MoveOnYLoop.StartAnimation start.*/
            StartAnimation: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.MoveOnYLoop#StartAnimation", this ); }

                if (this._isAnimating) {
                    return;
                }
                this._isAnimating = true;
                if (UnityEngine.Component.op_Equality(this._rectTransform, null)) {
                    this._rectTransform = this.GetComponent(UnityEngine.RectTransform);
                }
                if (pc.Vec3.equals( this._originalPos, pc.Vec3.ZERO.clone() ) && UnityEngine.Component.op_Inequality(this._rectTransform, null)) {
                    this._originalPos = UnityEngine.Vector3.FromVector2(this._rectTransform.anchoredPosition.$clone());
                }

                this.StartCoroutine$1(this.AnimateLoop());
            },
            /*SnakeClash.UI.MoveOnYLoop.StartAnimation end.*/

            /*SnakeClash.UI.MoveOnYLoop.StopAnimation start.*/
            StopAnimation: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.MoveOnYLoop#StopAnimation", this ); }

                this._isAnimating = false;
                this.StopAllCoroutines();
            },
            /*SnakeClash.UI.MoveOnYLoop.StopAnimation end.*/

            /*SnakeClash.UI.MoveOnYLoop.AnimateLoop start.*/
            AnimateLoop: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.MoveOnYLoop#AnimateLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    t,
                    offset,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this._isAnimating ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 1: {
                                    elapsed = 0.0;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( elapsed < this.duration ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / this.duration;
                                        offset = pc.math.lerp(0, this.amount, pc.math.smoothstep(0, 1, t));
                                        if (UnityEngine.Component.op_Inequality(this._rectTransform, null)) {
                                            this._rectTransform.anchoredPosition = UnityEngine.Vector2.FromVector3(this._originalPos.$clone().add( new pc.Vec3( 0, offset, 0 ) ));
                                        }
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    // Reset to repeat
                                        if (UnityEngine.Component.op_Inequality(this._rectTransform, null)) {
                                            this._rectTransform.anchoredPosition = UnityEngine.Vector2.FromVector3(this._originalPos.$clone());
                                        }

                                        $step = 0;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SnakeClash.UI.MoveOnYLoop.AnimateLoop end.*/


        }
    });
    /*SnakeClash.UI.MoveOnYLoop end.*/

    /*SnakeClash.UI.OffScreenIndicator start.*/
    Bridge.define("SnakeClash.UI.OffScreenIndicator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            margin: 0,
            rotationOffset: 0,
            iconImage: null,
            chestIcon: null,
            _target: null,
            mainCam: null,
            _rectTransform: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.OffScreenIndicator#init", this ); }

                this.margin = 40.0;
                this.rotationOffset = 90.0;
            }
        },
        methods: {
            /*SnakeClash.UI.OffScreenIndicator.SetTarget start.*/
            SetTarget: function (target) {
if ( TRACE ) { TRACE( "SnakeClash.UI.OffScreenIndicator#SetTarget", this ); }

                this._target = target;
                this.gameObject.SetActive(UnityEngine.Component.op_Inequality(target, null));
            },
            /*SnakeClash.UI.OffScreenIndicator.SetTarget end.*/

            /*SnakeClash.UI.OffScreenIndicator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.OffScreenIndicator#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.mainCam, null) && UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance, null)) {
                    this.mainCam = SnakeClash.Core.GameManager.Instance.MainCamera;
                }
                this._rectTransform = this.GetComponent(UnityEngine.RectTransform);
                if (UnityEngine.MonoBehaviour.op_Equality(this.iconImage, null)) {
                    this.iconImage = this.GetComponentInChildren(UnityEngine.UI.Image);
                }

                // Auto-find child if not assigned
                if (UnityEngine.Component.op_Equality(this.chestIcon, null) && this.transform.childCount > 0) {
                    var child = this.transform.Find("ChestIcon");
                    if (UnityEngine.Component.op_Inequality(child, null)) {
                        this.chestIcon = child.GetComponent(UnityEngine.RectTransform);
                    }
                }
            },
            /*SnakeClash.UI.OffScreenIndicator.Start end.*/

            /*SnakeClash.UI.OffScreenIndicator.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.OffScreenIndicator#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this._target, null)) {
                    this.gameObject.SetActive(false);
                    return;
                }

                var screenPos = this.mainCam.WorldToScreenPoint(this._target.position);

                // Is on screen?
                var isOnScreen = screenPos.z > 0 && screenPos.x > 0 && screenPos.x < UnityEngine.Screen.width && screenPos.y > 0 && screenPos.y < UnityEngine.Screen.height;

                if (isOnScreen) {
                    this.iconImage.enabled = false;
                    if (UnityEngine.Component.op_Inequality(this.chestIcon, null)) {
                        this.chestIcon.gameObject.SetActive(false);
                    }
                } else {
                    this.iconImage.enabled = true;
                    if (UnityEngine.Component.op_Inequality(this.chestIcon, null)) {
                        this.chestIcon.gameObject.SetActive(true);
                    }

                    if (screenPos.z < 0) {
                        screenPos = screenPos.$clone().clone().scale( -1 );
                    }

                    var centeredScreenPos = new pc.Vec3( screenPos.x - ((Bridge.Int.div(UnityEngine.Screen.width, 2)) | 0), screenPos.y - ((Bridge.Int.div(UnityEngine.Screen.height, 2)) | 0), 0 );
                    var angle = Math.atan2(centeredScreenPos.y, centeredScreenPos.x);
                    var cos = Math.cos(angle);
                    var sin = Math.sin(angle);

                    var mX = (((Bridge.Int.div(UnityEngine.Screen.width, 2)) | 0)) - this.margin;
                    var mY = (((Bridge.Int.div(UnityEngine.Screen.height, 2)) | 0)) - this.margin;

                    // Intersection with screen edges
                    if (Math.abs(mX / cos) < Math.abs(mY / sin)) {
                        centeredScreenPos = new pc.Vec3( (cos === 0 ? 1 : Math.sign(cos)) * mX, (cos === 0 ? 1 : Math.sign(cos)) * mX * sin / cos, 0 );
                    } else {
                        centeredScreenPos = new pc.Vec3( (sin === 0 ? 1 : Math.sign(sin)) * mY * cos / sin, (sin === 0 ? 1 : Math.sign(sin)) * mY, 0 );
                    }

                    this._rectTransform.localPosition = centeredScreenPos.$clone();

                    // Rotate to point at target
                    var rotationAngle = angle * UnityEngine.Mathf.Rad2Deg;
                    this._rectTransform.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, rotationAngle + this.rotationOffset );

                    // Keep Icon Upright
                    if (UnityEngine.Component.op_Inequality(this.chestIcon, null)) {
                        this.chestIcon.rotation = pc.Quat.IDENTITY.clone();
                    }
                }
            },
            /*SnakeClash.UI.OffScreenIndicator.LateUpdate end.*/


        }
    });
    /*SnakeClash.UI.OffScreenIndicator end.*/

    /*SnakeClash.UI.PulseOnScale start.*/
    Bridge.define("SnakeClash.UI.PulseOnScale", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pulseSpeed: 0,
            pulseAmount: 0,
            activeOnStart: false,
            _baseScale: null,
            _isActive: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.PulseOnScale#init", this ); }

                this._baseScale = new UnityEngine.Vector3();
                this.pulseSpeed = 5.0;
                this.pulseAmount = 0.08;
                this.activeOnStart = true;
            }
        },
        methods: {
            /*SnakeClash.UI.PulseOnScale.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.PulseOnScale#Start", this ); }

                this._baseScale = this.transform.localScale.$clone();
                if (this.activeOnStart) {
                    this.SetActive(true);
                }
            },
            /*SnakeClash.UI.PulseOnScale.Start end.*/

            /*SnakeClash.UI.PulseOnScale.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "SnakeClash.UI.PulseOnScale#SetActive", this ); }

                this._isActive = isActive;
                if (!this._isActive) {
                    this.transform.localScale = this._baseScale.$clone();
                }
            },
            /*SnakeClash.UI.PulseOnScale.SetActive end.*/

            /*SnakeClash.UI.PulseOnScale.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.PulseOnScale#Update", this ); }

                if (!this._isActive) {
                    return;
                }

                var pulse = Math.sin(UnityEngine.Time.time * this.pulseSpeed) * this.pulseAmount;
                this.transform.localScale = this._baseScale.$clone().add( new pc.Vec3( pulse, pulse, pulse ) );
            },
            /*SnakeClash.UI.PulseOnScale.Update end.*/


        }
    });
    /*SnakeClash.UI.PulseOnScale end.*/

    /*SnakeClash.UI.ResultPanel start.*/
    Bridge.define("SnakeClash.UI.ResultPanel", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            panelRoot: null,
            stageClearRoot: null,
            swallowedRoot: null,
            retryButton: null,
            retryButtonRoot: null
        },
        methods: {
            /*SnakeClash.UI.ResultPanel.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.ResultPanel#Start", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.panelRoot, null)) {
                    this.panelRoot.SetActive(false);
                }
                if (UnityEngine.Component.op_Inequality(this.stageClearRoot, null)) {
                    this.stageClearRoot.gameObject.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.swallowedRoot, null)) {
                    this.swallowedRoot.SetActive(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.retryButton, null)) {
                    this.retryButton.gameObject.SetActive(false);
                }

                SnakeClash.Core.GameManager.Instance.OnGameWin.AddListener(Bridge.fn.cacheBind(this, this.ShowWin));
                SnakeClash.Core.GameManager.Instance.OnGameFail.AddListener(Bridge.fn.cacheBind(this, this.ShowFail));
            },
            /*SnakeClash.UI.ResultPanel.Start end.*/

            /*SnakeClash.UI.ResultPanel.ShowWin start.*/
            ShowWin: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.ResultPanel#ShowWin", this ); }

                this.panelRoot.SetActive(true);

                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.AudioManager.Instance, null)) {
                    SnakeClash.Core.AudioManager.Instance.PlayWinSound();
                }

                if (UnityEngine.Component.op_Inequality(this.stageClearRoot, null)) {
                    this.stageClearRoot.gameObject.SetActive(true);
                    this.StartCoroutine$1(this.AnimateStageClear());
                }
            },
            /*SnakeClash.UI.ResultPanel.ShowWin end.*/

            /*SnakeClash.UI.ResultPanel.AnimateStageClear start.*/
            AnimateStageClear: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.ResultPanel#AnimateStageClear", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    duration,
                    t,
                    t1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.stageClearRoot.localScale = pc.Vec3.ZERO.clone();

                                        // Phase 1: 0 -> 1.1 (0.2s)
                                        elapsed = 0.0;
                                        duration = 0.25;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        this.stageClearRoot.localScale = new pc.Vec3().lerp( pc.Vec3.ZERO.clone(), new pc.Vec3( 1.1, 1.1, 1.1 ), t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    // Phase 2: 1.1 -> 1.0 (0.15s)
                                        elapsed = 0.0;
                                        duration = 0.15;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed < duration ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t1 = elapsed / duration;
                                        this.stageClearRoot.localScale = new pc.Vec3().lerp( new pc.Vec3( 1.1, 1.1, 1.1 ), new pc.Vec3( 1, 1, 1 ), t1 );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this.stageClearRoot.localScale = new pc.Vec3( 1, 1, 1 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SnakeClash.UI.ResultPanel.AnimateStageClear end.*/

            /*SnakeClash.UI.ResultPanel.ShowFail start.*/
            ShowFail: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.ResultPanel#ShowFail", this ); }

                this.panelRoot.SetActive(true);

                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.AudioManager.Instance, null)) {
                    SnakeClash.Core.AudioManager.Instance.PlayLoseSound();
                }

                if (UnityEngine.GameObject.op_Inequality(this.swallowedRoot, null)) {
                    this.swallowedRoot.SetActive(true);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.retryButton, null)) {
                    this.retryButton.gameObject.SetActive(true);
                }
            },
            /*SnakeClash.UI.ResultPanel.ShowFail end.*/


        }
    });
    /*SnakeClash.UI.ResultPanel end.*/

    /*SnakeClash.UI.RotateOnZ start.*/
    Bridge.define("SnakeClash.UI.RotateOnZ", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rotationSpeed: 0,
            clockwise: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.RotateOnZ#init", this ); }

                this.rotationSpeed = 90.0;
                this.clockwise = true;
            }
        },
        methods: {
            /*SnakeClash.UI.RotateOnZ.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.RotateOnZ#Update", this ); }

                var direction = this.clockwise ? -1.0 : 1.0;
                this.transform.Rotate(0, 0, direction * this.rotationSpeed * UnityEngine.Time.deltaTime);
            },
            /*SnakeClash.UI.RotateOnZ.Update end.*/


        }
    });
    /*SnakeClash.UI.RotateOnZ end.*/

    /*SnakeClash.UI.SnakeLevelUI start.*/
    Bridge.define("SnakeClash.UI.SnakeLevelUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            owner: null,
            levelText: null,
            camTransform: null,
            sb: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.SnakeLevelUI#init", this ); }

                this.sb = new System.Text.StringBuilder();
            }
        },
        methods: {
            /*SnakeClash.UI.SnakeLevelUI.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.SnakeLevelUI#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.camTransform, null) && UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance, null)) {
                    this.camTransform = SnakeClash.Core.GameManager.Instance.MainCamera.transform;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.owner, null)) {
                    this.owner = this.GetComponentInParent(SnakeClash.Snake.SnakeControllerBase);
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.levelText, null)) {
                    this.levelText = this.GetComponent(TMPro.TextMeshPro);
                }
            },
            /*SnakeClash.UI.SnakeLevelUI.Start end.*/

            /*SnakeClash.UI.SnakeLevelUI.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.SnakeLevelUI#LateUpdate", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.owner, null) || UnityEngine.MonoBehaviour.op_Equality(this.levelText, null)) {
                    return;
                }

                // Update Text
                this.sb.clear();
                this.sb.append("Lv");
                this.sb.append(this.owner.CurrentLevel);
                this.levelText.text = this.sb.toString();

                // Highlight if level is higher than player
                if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.GameManager.Instance.PlayerSnakeController, null)) {
                    var playerLevel = SnakeClash.Core.GameManager.Instance.PlayerSnakeController.CurrentLevel;
                    if (this.owner.CurrentLevel > playerLevel) {
                        this.levelText.color = new pc.Color( 1, 0, 0, 1 );
                    } else {
                        this.levelText.color = new pc.Color( 1, 1, 1, 1 );
                    }
                }

                if (UnityEngine.Component.op_Inequality(this.camTransform, null)) {
                    this.transform.rotation = this.camTransform.rotation.$clone();
                }
            },
            /*SnakeClash.UI.SnakeLevelUI.LateUpdate end.*/


        }
    });
    /*SnakeClash.UI.SnakeLevelUI end.*/

    /*SnakeClash.UI.VirtualJoystickInput start.*/
    /** @namespace SnakeClash.UI */

    /**
     * Pure logic for virtual joystick input.
     *
     * @static
     * @abstract
     * @public
     * @class SnakeClash.UI.VirtualJoystickInput
     */
    Bridge.define("SnakeClash.UI.VirtualJoystickInput", {
        statics: {
            fields: {
                _inputVector: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickInput#init", this ); }

                    this._inputVector = new UnityEngine.Vector2();
                    this._inputVector = pc.Vec2.ZERO.clone();
                }
            },
            methods: {
                /*SnakeClash.UI.VirtualJoystickInput.SetInput:static start.*/
                SetInput: function (input) {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickInput#SetInput", this ); }

                    SnakeClash.UI.VirtualJoystickInput._inputVector = input.$clone();
                },
                /*SnakeClash.UI.VirtualJoystickInput.SetInput:static end.*/

                /*SnakeClash.UI.VirtualJoystickInput.GetInput:static start.*/
                GetInput: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickInput#GetInput", this ); }

                    // Support WASD/Arrows for editor testing via Standalone Input
                    var keyboardInput = new pc.Vec2( UnityEngine.Input.GetAxisRaw("Horizontal"), UnityEngine.Input.GetAxisRaw("Vertical") );

                    if (!pc.Vec2.equals( keyboardInput, pc.Vec2.ZERO.clone() )) {
                        return keyboardInput.clone().normalize().$clone();
                    }

                    return SnakeClash.UI.VirtualJoystickInput._inputVector.$clone();
                },
                /*SnakeClash.UI.VirtualJoystickInput.GetInput:static end.*/

                /*SnakeClash.UI.VirtualJoystickInput.Reset:static start.*/
                Reset: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickInput#Reset", this ); }

                    SnakeClash.UI.VirtualJoystickInput._inputVector = pc.Vec2.ZERO.clone();
                },
                /*SnakeClash.UI.VirtualJoystickInput.Reset:static end.*/


            }
        }
    });
    /*SnakeClash.UI.VirtualJoystickInput end.*/

    /*SnakeClash.UI.VirtualJoystickView start.*/
    Bridge.define("SnakeClash.UI.VirtualJoystickView", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler,UnityEngine.EventSystems.IPointerDownHandler],
        fields: {
            container: null,
            joystickHandle: null,
            joystickLimit: 0,
            _joystickPosition: null,
            _parentCanvas: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickView#init", this ); }

                this._joystickPosition = new UnityEngine.Vector2();
                this.joystickLimit = 1.0;
                this._joystickPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*SnakeClash.UI.VirtualJoystickView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickView#Awake", this ); }

                this._parentCanvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.container, null)) {
                    this.container = this.GetComponent(UnityEngine.RectTransform);
                }
            },
            /*SnakeClash.UI.VirtualJoystickView.Awake end.*/

            /*SnakeClash.UI.VirtualJoystickView.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickView#Start", this ); }

                if (UnityEngine.Component.op_Inequality(this.container, null)) {
                    this.container.gameObject.SetActive(false);
                }
            },
            /*SnakeClash.UI.VirtualJoystickView.Start end.*/

            /*SnakeClash.UI.VirtualJoystickView.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickView#OnPointerDown", this ); }

                if (UnityEngine.Component.op_Inequality(this.container, null)) {
                    this.container.gameObject.SetActive(true);
                    this.container.position = UnityEngine.Vector3.FromVector2(eventData.position.$clone());
                }
                this.OnDrag(eventData);
            },
            /*SnakeClash.UI.VirtualJoystickView.OnPointerDown end.*/

            /*SnakeClash.UI.VirtualJoystickView.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickView#OnDrag", this ); }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, this.container.position);
                var radius = this.container.sizeDelta.$clone().scale( 1.0 / ( 2 ) );
                this._joystickPosition = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this._parentCanvas.scaleFactor )) );

                this.UpdateJoystickInput(this._joystickPosition.length(), this._joystickPosition.clone().normalize());
                this.joystickHandle.anchoredPosition = this._joystickPosition.$clone().mul( radius ).scale( this.joystickLimit );
            },
            /*SnakeClash.UI.VirtualJoystickView.OnDrag end.*/

            /*SnakeClash.UI.VirtualJoystickView.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickView#OnPointerUp", this ); }

                this._joystickPosition = pc.Vec2.ZERO.clone();
                this.joystickHandle.anchoredPosition = pc.Vec2.ZERO.clone();
                SnakeClash.UI.VirtualJoystickInput.Reset();
                if (UnityEngine.Component.op_Inequality(this.container, null)) {
                    this.container.gameObject.SetActive(false);
                }
            },
            /*SnakeClash.UI.VirtualJoystickView.OnPointerUp end.*/

            /*SnakeClash.UI.VirtualJoystickView.UpdateJoystickInput start.*/
            UpdateJoystickInput: function (magnitude, normalized) {
if ( TRACE ) { TRACE( "SnakeClash.UI.VirtualJoystickView#UpdateJoystickInput", this ); }

                if (magnitude > 1.0) {
                    this._joystickPosition = normalized.$clone();
                }

                SnakeClash.UI.VirtualJoystickInput.SetInput(this._joystickPosition);
            },
            /*SnakeClash.UI.VirtualJoystickView.UpdateJoystickInput end.*/


        }
    });
    /*SnakeClash.UI.VirtualJoystickView end.*/

    /*SnakeClash.Snake.AISnakeController start.*/
    Bridge.define("SnakeClash.Snake.AISnakeController", {
        inherits: [SnakeClash.Snake.SnakeControllerBase],
        fields: {
            moveSpeed: 0,
            turnSpeed: 0,
            bodyController: null,
            brain: null,
            _isInitialized: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeController#init", this ); }

                this.moveSpeed = 4.5;
                this.turnSpeed = 150.0;
                this._isInitialized = false;
            }
        },
        methods: {
            /*SnakeClash.Snake.AISnakeController.Initialize start.*/
            Initialize: function (level, segments) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeController#Initialize", this ); }

                this.initialLevel = level;
                this.initialSegments = segments;
                this.currentLevel = level;
                this._isInitialized = true;
            },
            /*SnakeClash.Snake.AISnakeController.Initialize end.*/

            /*SnakeClash.Snake.AISnakeController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeController#Start", this ); }

                if (!this._isInitialized) {
                    var player = SnakeClash.Core.GameManager.Instance.PlayerSnakeController;
                    if (UnityEngine.MonoBehaviour.op_Inequality(player, null)) {
                        this.initialLevel = player.CurrentLevel;
                        this.initialSegments = player.CurrentLevel;
                    }
                }
                SnakeClash.Snake.SnakeControllerBase.prototype.Start.call(this);
            },
            /*SnakeClash.Snake.AISnakeController.Start end.*/

            /*SnakeClash.Snake.AISnakeController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeController#Update", this ); }

                if (!this.isAlive || SnakeClash.Core.GameManager.Instance.CurrentState !== SnakeClash.Core.GameState.Playing) {
                    return;
                }

                // Simple move forward
                this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).clone().scale( this.moveSpeed ).clone().scale( UnityEngine.Time.deltaTime ));

                // Boundary clamping
                this.transform.position = SnakeClash.Core.ArenaManager.Instance.ClampToArena(this.transform.position.$clone());

                // AI Steering
                var desiredHeading = this.brain.GetDesiredHeading();
                if (!pc.Vec3.equals( desiredHeading, pc.Vec3.ZERO.clone() )) {
                    var targetRotation = new pc.Quat().lookRotation( desiredHeading, pc.Vec3.UP.clone() );
                    this.transform.rotation = pc.Quat.rotateTowards( this.transform.rotation.$clone(), targetRotation.$clone(), this.turnSpeed * UnityEngine.Time.deltaTime );
                }
            },
            /*SnakeClash.Snake.AISnakeController.Update end.*/

            /*SnakeClash.Snake.AISnakeController.AddLevel start.*/
            AddLevel: function (amount) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeController#AddLevel", this ); }

                SnakeClash.Snake.SnakeControllerBase.prototype.AddLevel.call(this, amount);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.bodyController, null)) {
                    this.bodyController.AddSegment();
                }
            },
            /*SnakeClash.Snake.AISnakeController.AddLevel end.*/

            /*SnakeClash.Snake.AISnakeController.Kill start.*/
            Kill: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.AISnakeController#Kill", this ); }

                SnakeClash.Snake.SnakeControllerBase.prototype.Kill.call(this);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.bodyController, null)) {
                    this.bodyController.OnDeath();
                }

                // Move away to avoid ghost collisions
                this.transform.position = this.transform.position.$clone().add( pc.Vec3.DOWN.clone().clone().scale( 100.0 ) );

                this.Destroy(this.gameObject, 2.0);
            },
            /*SnakeClash.Snake.AISnakeController.Kill end.*/


        }
    });
    /*SnakeClash.Snake.AISnakeController end.*/

    /*SnakeClash.Snake.PlayerSnakeController start.*/
    Bridge.define("SnakeClash.Snake.PlayerSnakeController", {
        inherits: [SnakeClash.Snake.SnakeControllerBase],
        fields: {
            moveSpeed: 0,
            turnSpeed: 0,
            bodyController: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.PlayerSnakeController#init", this ); }

                this.moveSpeed = 5.0;
                this.turnSpeed = 180.0;
            }
        },
        methods: {
            /*SnakeClash.Snake.PlayerSnakeController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.PlayerSnakeController#Update", this ); }

                if (!this.isAlive) {
                    return;
                }

                // Trigger game start on joystick movement
                if (SnakeClash.Core.GameManager.Instance.CurrentState === SnakeClash.Core.GameState.Ready) {
                    if (!pc.Vec2.equals( SnakeClash.UI.VirtualJoystickInput.GetInput(), pc.Vec2.ZERO.clone() )) {
                        SnakeClash.Core.GameManager.Instance.StartGame();
                    }
                    return;
                }

                if (SnakeClash.Core.GameManager.Instance.CurrentState !== SnakeClash.Core.GameState.Playing) {
                    return;
                }

                // Auto-forward
                this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).clone().scale( this.moveSpeed ).clone().scale( UnityEngine.Time.deltaTime ));

                // Boundary clamping
                this.transform.position = SnakeClash.Core.ArenaManager.Instance.ClampToArena(this.transform.position.$clone());

                // Steering
                var input = SnakeClash.UI.VirtualJoystickInput.GetInput();
                if (!pc.Vec2.equals( input, pc.Vec2.ZERO.clone() )) {
                    var targetDirection = new pc.Vec3( input.x, 0, input.y );
                    if (!pc.Vec3.equals( targetDirection, pc.Vec3.ZERO.clone() )) {
                        var targetRotation = new pc.Quat().lookRotation( targetDirection, pc.Vec3.UP.clone() );
                        this.transform.rotation = pc.Quat.rotateTowards( this.transform.rotation.$clone(), targetRotation.$clone(), this.turnSpeed * UnityEngine.Time.deltaTime );
                    }
                }
            },
            /*SnakeClash.Snake.PlayerSnakeController.Update end.*/

            /*SnakeClash.Snake.PlayerSnakeController.AddLevel start.*/
            AddLevel: function (amount) {
if ( TRACE ) { TRACE( "SnakeClash.Snake.PlayerSnakeController#AddLevel", this ); }

                var prevScale = this.ScaleFactor;
                SnakeClash.Snake.SnakeControllerBase.prototype.AddLevel.call(this, amount);

                if (UnityEngine.MonoBehaviour.op_Inequality(this.bodyController, null)) {
                    this.bodyController.AddSegment();
                }

                // Only play grow sound if the visual scale factor actually increased
                if (this.ScaleFactor > prevScale) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(SnakeClash.Core.AudioManager.Instance, null)) {
                        SnakeClash.Core.AudioManager.Instance.PlayGrowSound();
                    }
                }
            },
            /*SnakeClash.Snake.PlayerSnakeController.AddLevel end.*/

            /*SnakeClash.Snake.PlayerSnakeController.Kill start.*/
            Kill: function () {
if ( TRACE ) { TRACE( "SnakeClash.Snake.PlayerSnakeController#Kill", this ); }

                SnakeClash.Snake.SnakeControllerBase.prototype.Kill.call(this);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.bodyController, null)) {
                    this.bodyController.OnDeath();
                }

                SnakeClash.Core.GameManager.Instance.SetState(SnakeClash.Core.GameState.Fail);
            },
            /*SnakeClash.Snake.PlayerSnakeController.Kill end.*/


        }
    });
    /*SnakeClash.Snake.PlayerSnakeController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine.UI","UnityEngine","TMPro","SnakeClash.Snake","System.Text","UnityEngine.EventSystems","System.Collections.Generic","SnakeClash.Resources","SnakeClash.UI","SnakeClash.Support","SnakeClash.Core","UnityEngine.Events"];

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*SnakeClash.UI.HUDController start.*/
    $m("SnakeClash.UI.HUDController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DismissOnboard","t":8,"sn":"DismissOnboard","rt":$n[0].Void},{"a":1,"n":"ShowOnboardSequence","t":8,"sn":"ShowOnboardSequence","rt":$n[1].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"coinProgressBar","t":4,"rt":$n[2].Slider,"sn":"coinProgressBar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"onboardChest","t":4,"rt":$n[3].RectTransform,"sn":"onboardChest"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"onboardPanel","t":4,"rt":$n[3].GameObject,"sn":"onboardPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorHand","t":4,"rt":$n[3].RectTransform,"sn":"tutorHand"}]}; }, $n);
    /*SnakeClash.UI.HUDController end.*/

    /*SnakeClash.UI.MoveOnYLoop start.*/
    $m("SnakeClash.UI.MoveOnYLoop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateLoop","t":8,"sn":"AnimateLoop","rt":$n[1].IEnumerator},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"StartAnimation","t":8,"sn":"StartAnimation","rt":$n[0].Void},{"a":2,"n":"StopAnimation","t":8,"sn":"StopAnimation","rt":$n[0].Void},{"a":1,"n":"_isAnimating","t":4,"rt":$n[0].Boolean,"sn":"_isAnimating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_originalPos","t":4,"rt":$n[3].Vector3,"sn":"_originalPos"},{"a":1,"n":"_rectTransform","t":4,"rt":$n[3].RectTransform,"sn":"_rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"amount","t":4,"rt":$n[0].Single,"sn":"amount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoStart","t":4,"rt":$n[0].Boolean,"sn":"autoStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.UI.MoveOnYLoop end.*/

    /*SnakeClash.UI.OffScreenIndicator start.*/
    $m("SnakeClash.UI.OffScreenIndicator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"target","pt":$n[3].Transform,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[3].Transform]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_rectTransform","t":4,"rt":$n[3].RectTransform,"sn":"_rectTransform"},{"a":1,"n":"_target","t":4,"rt":$n[3].Transform,"sn":"_target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chestIcon","t":4,"rt":$n[3].RectTransform,"sn":"chestIcon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconImage","t":4,"rt":$n[2].Image,"sn":"iconImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCam","t":4,"rt":$n[3].Camera,"sn":"mainCam"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"margin","t":4,"rt":$n[0].Single,"sn":"margin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationOffset","t":4,"rt":$n[0].Single,"sn":"rotationOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.UI.OffScreenIndicator end.*/

    /*SnakeClash.UI.PulseOnScale start.*/
    $m("SnakeClash.UI.PulseOnScale", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[0].Boolean,"ps":0}],"sn":"SetActive","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_baseScale","t":4,"rt":$n[3].Vector3,"sn":"_baseScale"},{"a":1,"n":"_isActive","t":4,"rt":$n[0].Boolean,"sn":"_isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"activeOnStart","t":4,"rt":$n[0].Boolean,"sn":"activeOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseAmount","t":4,"rt":$n[0].Single,"sn":"pulseAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseSpeed","t":4,"rt":$n[0].Single,"sn":"pulseSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.UI.PulseOnScale end.*/

    /*SnakeClash.UI.ResultPanel start.*/
    $m("SnakeClash.UI.ResultPanel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateStageClear","t":8,"sn":"AnimateStageClear","rt":$n[1].IEnumerator},{"a":1,"n":"ShowFail","t":8,"sn":"ShowFail","rt":$n[0].Void},{"a":1,"n":"ShowWin","t":8,"sn":"ShowWin","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelRoot","t":4,"rt":$n[3].GameObject,"sn":"panelRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"retryButton","t":4,"rt":$n[2].Button,"sn":"retryButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"retryButtonRoot","t":4,"rt":$n[3].RectTransform,"sn":"retryButtonRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stageClearRoot","t":4,"rt":$n[3].RectTransform,"sn":"stageClearRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"swallowedRoot","t":4,"rt":$n[3].GameObject,"sn":"swallowedRoot"}]}; }, $n);
    /*SnakeClash.UI.ResultPanel end.*/

    /*SnakeClash.UI.RotateOnZ start.*/
    $m("SnakeClash.UI.RotateOnZ", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clockwise","t":4,"rt":$n[0].Boolean,"sn":"clockwise","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.UI.RotateOnZ end.*/

    /*SnakeClash.UI.SnakeLevelUI start.*/
    $m("SnakeClash.UI.SnakeLevelUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"camTransform","t":4,"rt":$n[3].Transform,"sn":"camTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelText","t":4,"rt":$n[4].TextMeshPro,"sn":"levelText"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"owner","t":4,"rt":$n[5].SnakeControllerBase,"sn":"owner"},{"a":1,"n":"sb","t":4,"rt":$n[6].StringBuilder,"sn":"sb"}]}; }, $n);
    /*SnakeClash.UI.SnakeLevelUI end.*/

    /*SnakeClash.UI.VirtualJoystickInput start.*/
    $m("SnakeClash.UI.VirtualJoystickInput", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetInput","is":true,"t":8,"sn":"GetInput","rt":$n[3].Vector2},{"a":2,"n":"Reset","is":true,"t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"SetInput","is":true,"t":8,"pi":[{"n":"input","pt":$n[3].Vector2,"ps":0}],"sn":"SetInput","rt":$n[0].Void,"p":[$n[3].Vector2]},{"a":1,"n":"_inputVector","is":true,"t":4,"rt":$n[3].Vector2,"sn":"_inputVector"}]}; }, $n);
    /*SnakeClash.UI.VirtualJoystickInput end.*/

    /*SnakeClash.UI.VirtualJoystickView start.*/
    $m("SnakeClash.UI.VirtualJoystickView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[7].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[7].PointerEventData]},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[7].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[7].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[7].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[7].PointerEventData]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"UpdateJoystickInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalized","pt":$n[3].Vector2,"ps":1}],"sn":"UpdateJoystickInput","rt":$n[0].Void,"p":[$n[0].Single,$n[3].Vector2]},{"a":1,"n":"_joystickPosition","t":4,"rt":$n[3].Vector2,"sn":"_joystickPosition"},{"a":1,"n":"_parentCanvas","t":4,"rt":$n[3].Canvas,"sn":"_parentCanvas"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"container","t":4,"rt":$n[3].RectTransform,"sn":"container"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickHandle","t":4,"rt":$n[3].RectTransform,"sn":"joystickHandle"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickLimit","t":4,"rt":$n[0].Single,"sn":"joystickLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.UI.VirtualJoystickView end.*/

    /*SnakeClash.Support.ArenaCameraFollow start.*/
    $m("SnakeClash.Support.ArenaCameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"newTarget","pt":$n[3].Transform,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[3].Transform]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"offset","t":4,"rt":$n[3].Vector3,"sn":"offset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothSpeed","t":4,"rt":$n[0].Single,"sn":"smoothSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[3].Transform,"sn":"target"}]}; }, $n);
    /*SnakeClash.Support.ArenaCameraFollow end.*/

    /*SnakeClash.Support.LunaCTA start.*/
    $m("SnakeClash.Support.LunaCTA", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnClicked","t":8,"sn":"OnClicked","rt":$n[0].Void}]}; }, $n);
    /*SnakeClash.Support.LunaCTA end.*/

    /*SnakeClash.Support.ObjectPool$1 start.*/
    $m("SnakeClash.Support.ObjectPool$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[T,$n[0].Int32,$n[3].Transform],"pi":[{"n":"prefab","pt":T,"ps":0},{"n":"initialSize","pt":$n[0].Int32,"ps":1},{"n":"container","dv":null,"o":true,"pt":$n[3].Transform,"ps":2}],"sn":"ctor"},{"a":2,"n":"Get","t":8,"sn":"Get","rt":T},{"a":2,"n":"Return","t":8,"pi":[{"n":"obj","pt":T,"ps":0}],"sn":"Return","rt":$n[0].Void,"p":[T]},{"a":1,"n":"_container","t":4,"rt":$n[3].Transform,"sn":"_container"},{"a":1,"n":"_pool","t":4,"rt":$n[8].Stack$1(T),"sn":"_pool"},{"a":1,"n":"_prefab","t":4,"rt":T,"sn":"_prefab"}]}; }, $n);
    /*SnakeClash.Support.ObjectPool$1 end.*/

    /*SnakeClash.Snake.AISnakeBrain start.*/
    $m("SnakeClash.Snake.AISnakeBrain", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetDesiredHeading","t":8,"sn":"GetDesiredHeading","rt":$n[3].Vector3},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"UpdateDecision","t":8,"sn":"UpdateDecision","rt":$n[0].Void},{"a":1,"n":"_currentHeading","t":4,"rt":$n[3].Vector3,"sn":"_currentHeading"},{"a":1,"n":"_lastDecisionTime","t":4,"rt":$n[0].Single,"sn":"_lastDecisionTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"decisionInterval","t":4,"rt":$n[0].Single,"sn":"decisionInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"detectionRadius","t":4,"rt":$n[0].Single,"sn":"detectionRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"owner","t":4,"rt":$n[5].SnakeControllerBase,"sn":"owner"}]}; }, $n);
    /*SnakeClash.Snake.AISnakeBrain end.*/

    /*SnakeClash.Snake.AISnakeController start.*/
    $m("SnakeClash.Snake.AISnakeController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"AddLevel","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"AddLevel","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"level","pt":$n[0].Int32,"ps":0},{"n":"segments","pt":$n[0].Int32,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"ov":true,"a":2,"n":"Kill","t":8,"sn":"Kill","rt":$n[0].Void},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_isInitialized","t":4,"rt":$n[0].Boolean,"sn":"_isInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bodyController","t":4,"rt":$n[5].SnakeBodyController,"sn":"bodyController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"brain","t":4,"rt":$n[5].AISnakeBrain,"sn":"brain"},{"at":[new UnityEngine.HeaderAttribute("Movement"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"turnSpeed","t":4,"rt":$n[0].Single,"sn":"turnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.Snake.AISnakeController end.*/

    /*SnakeClash.Snake.PlayerSnakeController start.*/
    $m("SnakeClash.Snake.PlayerSnakeController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"AddLevel","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"AddLevel","rt":$n[0].Void,"p":[$n[0].Int32]},{"ov":true,"a":2,"n":"Kill","t":8,"sn":"Kill","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bodyController","t":4,"rt":$n[5].SnakeBodyController,"sn":"bodyController"},{"at":[new UnityEngine.HeaderAttribute("Movement"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"turnSpeed","t":4,"rt":$n[0].Single,"sn":"turnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.Snake.PlayerSnakeController end.*/

    /*SnakeClash.Snake.SnakeBodyController start.*/
    $m("SnakeClash.Snake.SnakeBodyController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddSegment","t":8,"sn":"AddSegment","rt":$n[0].Void},{"a":2,"n":"OnDeath","t":8,"sn":"OnDeath","rt":$n[0].Void},{"a":2,"n":"OnSegmentConsumed","t":8,"pi":[{"n":"node","pt":$n[5].SnakeSegmentNode,"ps":0}],"sn":"OnSegmentConsumed","rt":$n[0].Void,"p":[$n[5].SnakeSegmentNode]},{"a":1,"n":"RefreshAllSegments","t":8,"sn":"RefreshAllSegments","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ActiveSegments","t":16,"rt":$n[8].IReadOnlyList$1(SnakeClash.Snake.SnakeSegmentNode),"g":{"a":2,"n":"get_ActiveSegments","t":8,"rt":$n[8].IReadOnlyList$1(SnakeClash.Snake.SnakeSegmentNode),"fg":"ActiveSegments"},"fn":"ActiveSegments"},{"a":1,"n":"_activeSegments","t":4,"rt":$n[8].List$1(SnakeClash.Snake.SnakeSegmentNode),"sn":"_activeSegments"},{"a":1,"n":"_positionHistory","t":4,"rt":$n[8].List$1(UnityEngine.Vector3),"sn":"_positionHistory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"headTransform","t":4,"rt":$n[3].Transform,"sn":"headTransform"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"headVisual","t":4,"rt":$n[3].GameObject,"sn":"headVisual"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialSegments","t":4,"rt":$n[0].Int32,"sn":"initialSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"segmentPrefab","t":4,"rt":$n[3].GameObject,"sn":"segmentPrefab"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"segmentSpacing","t":4,"rt":$n[0].Single,"sn":"segmentSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.Snake.SnakeBodyController end.*/

    /*SnakeClash.Snake.SnakeCollisionResolver start.*/
    $m("SnakeClash.Snake.SnakeCollisionResolver", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BounceOwner","t":8,"pi":[{"n":"fromPosition","pt":$n[3].Vector3,"ps":0}],"sn":"BounceOwner","rt":$n[0].Void,"p":[$n[3].Vector3]},{"a":1,"n":"CheckResourceCollisions","t":8,"pi":[{"n":"headPos","pt":$n[3].Vector3,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1},{"n":"consumeThreshold","pt":$n[0].Single,"ps":2}],"sn":"CheckResourceCollisions","rt":$n[0].Void,"p":[$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":1,"n":"CheckSnakeCollisions","t":8,"pi":[{"n":"headPos","pt":$n[3].Vector3,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1}],"sn":"CheckSnakeCollisions","rt":$n[0].Void,"p":[$n[3].Vector3,$n[0].Single]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"ResolveHeadToBody","t":8,"pi":[{"n":"otherSegment","pt":$n[5].SnakeSegmentNode,"ps":0}],"sn":"ResolveHeadToBody","rt":$n[0].Void,"p":[$n[5].SnakeSegmentNode]},{"a":1,"n":"ResolveHeadToHead","t":8,"pi":[{"n":"otherSnake","pt":$n[5].SnakeControllerBase,"ps":0}],"sn":"ResolveHeadToHead","rt":$n[0].Void,"p":[$n[5].SnakeControllerBase]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"combatRadius","t":4,"rt":$n[0].Single,"sn":"combatRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"magnetSpeed","t":4,"rt":$n[0].Single,"sn":"magnetSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"owner","t":4,"rt":$n[5].SnakeControllerBase,"sn":"owner"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"resourceRadius","t":4,"rt":$n[0].Single,"sn":"resourceRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SnakeClash.Snake.SnakeCollisionResolver end.*/

    /*SnakeClash.Snake.SnakeControllerBase start.*/
    $m("SnakeClash.Snake.SnakeControllerBase", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"AddLevel","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"AddLevel","rt":$n[0].Void,"p":[$n[0].Int32]},{"v":true,"a":2,"n":"Kill","t":8,"sn":"Kill","rt":$n[0].Void},{"v":true,"a":3,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"v":true,"a":3,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UpdateScale","t":8,"sn":"UpdateScale","rt":$n[0].Void},{"a":2,"n":"CurrentLevel","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentLevel","t":8,"rt":$n[0].Int32,"fg":"CurrentLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentLevel"},{"a":2,"n":"InitialSegments","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_InitialSegments","t":8,"rt":$n[0].Int32,"fg":"InitialSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_InitialSegments","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"InitialSegments"},"fn":"InitialSegments"},{"a":2,"n":"IsAlive","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsAlive","t":8,"rt":$n[0].Boolean,"fg":"IsAlive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsAlive"},{"a":2,"n":"ScaleFactor","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_ScaleFactor","t":8,"rt":$n[0].Single,"fg":"ScaleFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"ScaleFactor"},{"a":2,"n":"SnakeName","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_SnakeName","t":8,"rt":$n[0].String,"fg":"SnakeName"},"fn":"SnakeName"},{"a":2,"n":"AllSnakes","is":true,"t":4,"rt":$n[8].List$1(SnakeClash.Snake.SnakeControllerBase),"sn":"AllSnakes"},{"at":[new UnityEngine.HeaderAttribute("State")],"a":3,"n":"currentLevel","t":4,"rt":$n[0].Int32,"sn":"currentLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"initialLevel","t":4,"rt":$n[0].Int32,"sn":"initialLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"initialSegments","t":4,"rt":$n[0].Int32,"sn":"initialSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":3,"n":"isAlive","t":4,"rt":$n[0].Boolean,"sn":"isAlive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Snake Identity"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"snakeName","t":4,"rt":$n[0].String,"sn":"snakeName"}]}; }, $n);
    /*SnakeClash.Snake.SnakeControllerBase end.*/

    /*SnakeClash.Snake.SnakeSegmentNode start.*/
    $m("SnakeClash.Snake.SnakeSegmentNode", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnPickup","t":8,"sn":"OnPickup","rt":$n[0].Void},{"a":2,"n":"RefreshVisual","t":8,"pi":[{"n":"asTail","pt":$n[0].Boolean,"ps":0}],"sn":"RefreshVisual","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetOwner","t":8,"pi":[{"n":"bodyOwner","pt":$n[5].SnakeBodyController,"ps":0}],"sn":"SetOwner","rt":$n[0].Void,"p":[$n[5].SnakeBodyController]},{"a":1,"n":"_owner","t":4,"rt":$n[5].SnakeBodyController,"sn":"_owner"},{"at":[new UnityEngine.HeaderAttribute("Visuals"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bodyVisual","t":4,"rt":$n[3].GameObject,"sn":"bodyVisual"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tailVisual","t":4,"rt":$n[3].GameObject,"sn":"tailVisual"}]}; }, $n);
    /*SnakeClash.Snake.SnakeSegmentNode end.*/

    /*SnakeClash.Resources.ChestManager start.*/
    $m("SnakeClash.Resources.ChestManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"SpawnChest","t":8,"pi":[{"n":"fixedPosition","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":0}],"sn":"SpawnChest","rt":$n[0].Void,"p":[$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":1,"n":"SpawnInitialChest","t":8,"sn":"SpawnInitialChest","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ActiveChest","t":16,"rt":$n[3].GameObject,"g":{"a":2,"n":"get_ActiveChest","t":8,"rt":$n[3].GameObject,"fg":"ActiveChest"},"fn":"ActiveChest"},{"a":2,"n":"CurrentLevelRequirement","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentLevelRequirement","t":8,"rt":$n[0].Int32,"fg":"CurrentLevelRequirement","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentLevelRequirement"},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[9].ChestManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[9].ChestManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[9].ChestManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_currentLevelRequirement","t":4,"rt":$n[0].Int32,"sn":"_currentLevelRequirement","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_spawnedChest","t":4,"rt":$n[3].GameObject,"sn":"_spawnedChest"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chestIndicator","t":4,"rt":$n[10].OffScreenIndicator,"sn":"chestIndicator"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chestPrefab","t":4,"rt":$n[3].GameObject,"sn":"chestPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialSpawnPoint","t":4,"rt":$n[3].Transform,"sn":"initialSpawnPoint"},{"a":2,"n":"levelRequireIncrement","t":4,"rt":$n[0].Int32,"sn":"levelRequireIncrement","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[9].ChestManager,"sn":"Instance"}]}; }, $n);
    /*SnakeClash.Resources.ChestManager end.*/

    /*SnakeClash.Resources.ChestPickup start.*/
    $m("SnakeClash.Resources.ChestPickup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"level","pt":$n[0].Int32,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Open","t":8,"pi":[{"n":"playerLevel","pt":$n[0].Int32,"ps":0}],"sn":"Open","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OpenSequence","t":8,"sn":"OpenSequence","rt":$n[1].IEnumerator},{"a":1,"n":"SpawnChestCoin","t":8,"sn":"SpawnChestCoin","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"RequiredLevel","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_RequiredLevel","t":8,"rt":$n[0].Int32,"fg":"RequiredLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"RequiredLevel"},{"a":1,"n":"_isOpening","t":4,"rt":$n[0].Boolean,"sn":"_isOpening","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_requiredLevel","t":4,"rt":$n[0].Int32,"sn":"_requiredLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animator","t":4,"rt":$n[3].Animator,"sn":"animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burstRange","t":4,"rt":$n[0].Single,"sn":"burstRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burstTotalDuration","t":4,"rt":$n[0].Single,"sn":"burstTotalDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"camTransform","t":4,"rt":$n[3].Transform,"sn":"camTransform"},{"at":[new UnityEngine.HeaderAttribute("Settings")],"a":2,"n":"coinsPerChest","t":4,"rt":$n[0].Int32,"sn":"coinsPerChest","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelText","t":4,"rt":$n[4].TextMeshPro,"sn":"levelText"}]}; }, $n);
    /*SnakeClash.Resources.ChestPickup end.*/

    /*SnakeClash.Resources.CoinManager start.*/
    $m("SnakeClash.Resources.CoinManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetCoinFromPool","t":8,"sn":"GetCoinFromPool","rt":$n[9].CoinPickup},{"a":2,"n":"RecycleCoin","t":8,"pi":[{"n":"coin","pt":$n[9].CoinPickup,"ps":0}],"sn":"RecycleCoin","rt":$n[0].Void,"p":[$n[9].CoinPickup]},{"a":2,"n":"SpawnCoinBurst","t":8,"pi":[{"n":"origin","pt":$n[3].Vector3,"ps":0},{"n":"amount","pt":$n[0].Int32,"ps":1},{"n":"burstRange","dv":2.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"SpawnCoinBurst","rt":$n[0].Void,"p":[$n[3].Vector3,$n[0].Int32,$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"ActiveCoins","t":16,"rt":$n[8].IReadOnlyList$1(SnakeClash.Resources.CoinPickup),"g":{"a":2,"n":"get_ActiveCoins","t":8,"rt":$n[8].IReadOnlyList$1(SnakeClash.Resources.CoinPickup),"fg":"ActiveCoins"},"fn":"ActiveCoins"},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[9].CoinManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[9].CoinManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[9].CoinManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_activeCoins","t":4,"rt":$n[8].List$1(SnakeClash.Resources.CoinPickup),"sn":"_activeCoins"},{"a":1,"n":"_coinPool","t":4,"rt":$n[11].ObjectPool$1(SnakeClash.Resources.CoinPickup),"sn":"_coinPool"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"coinPrefab","t":4,"rt":$n[9].CoinPickup,"sn":"coinPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialPoolSize","t":4,"rt":$n[0].Int32,"sn":"initialPoolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[9].CoinManager,"sn":"Instance"}]}; }, $n);
    /*SnakeClash.Resources.CoinManager end.*/

    /*SnakeClash.Resources.CoinPickup start.*/
    $m("SnakeClash.Resources.CoinPickup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Collect","t":8,"sn":"Collect","rt":$n[0].Void},{"a":2,"n":"StartTossAnimation","t":8,"pi":[{"n":"targetPos","pt":$n[3].Vector3,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1}],"sn":"StartTossAnimation","rt":$n[0].Void,"p":[$n[3].Vector3,$n[0].Single]},{"a":1,"n":"TossCoroutine","t":8,"pi":[{"n":"targetPos","pt":$n[3].Vector3,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1}],"sn":"TossCoroutine","rt":$n[1].IEnumerator,"p":[$n[3].Vector3,$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"coinValue","t":4,"rt":$n[0].Int32,"sn":"coinValue","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SnakeClash.Resources.CoinPickup end.*/

    /*SnakeClash.Resources.FoodItem start.*/
    $m("SnakeClash.Resources.FoodItem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnConsumed","t":8,"pi":[{"n":"consumer","pt":$n[5].SnakeControllerBase,"ps":0}],"sn":"OnConsumed","rt":$n[0].Void,"p":[$n[5].SnakeControllerBase]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelReward","t":4,"rt":$n[0].Int32,"sn":"levelReward","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SnakeClash.Resources.FoodItem end.*/

    /*SnakeClash.Resources.FoodManager start.*/
    $m("SnakeClash.Resources.FoodManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CreateFoodFromNode","t":8,"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0}],"sn":"CreateFoodFromNode","rt":$n[0].Void,"p":[$n[3].Vector3]},{"a":1,"n":"GetRandomPosition","t":8,"sn":"GetRandomPosition","rt":$n[3].Vector3},{"a":2,"n":"RecycleFood","t":8,"pi":[{"n":"food","pt":$n[9].FoodItem,"ps":0}],"sn":"RecycleFood","rt":$n[0].Void,"p":[$n[9].FoodItem]},{"a":2,"n":"SpawnAmbientFood","t":8,"sn":"SpawnAmbientFood","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"ActiveFood","t":16,"rt":$n[8].IReadOnlyList$1(SnakeClash.Resources.FoodItem),"g":{"a":2,"n":"get_ActiveFood","t":8,"rt":$n[8].IReadOnlyList$1(SnakeClash.Resources.FoodItem),"fg":"ActiveFood"},"fn":"ActiveFood"},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[9].FoodManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[9].FoodManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[9].FoodManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_activeFood","t":4,"rt":$n[8].List$1(SnakeClash.Resources.FoodItem),"sn":"_activeFood"},{"a":1,"n":"_foodPool","t":4,"rt":$n[11].ObjectPool$1(SnakeClash.Resources.FoodItem),"sn":"_foodPool"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"foodPrefab","t":4,"rt":$n[9].FoodItem,"sn":"foodPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxAmbientFood","t":4,"rt":$n[0].Int32,"sn":"maxAmbientFood","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnRadius","t":4,"rt":$n[0].Single,"sn":"spawnRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[9].FoodManager,"sn":"Instance"}]}; }, $n);
    /*SnakeClash.Resources.FoodManager end.*/

    /*SnakeClash.Core.ArenaManager start.*/
    $m("SnakeClash.Core.ArenaManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClampToArena","t":8,"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0}],"sn":"ClampToArena","rt":$n[3].Vector3,"p":[$n[3].Vector3]},{"a":1,"n":"GetRandomArenaPosition","t":8,"sn":"GetRandomArenaPosition","rt":$n[3].Vector3},{"a":1,"n":"GetRandomSafePosition","t":8,"sn":"GetRandomSafePosition","rt":$n[3].Vector3},{"a":2,"n":"IsOutOfBounds","t":8,"pi":[{"n":"position","pt":$n[3].Vector3,"ps":0}],"sn":"IsOutOfBounds","rt":$n[0].Boolean,"p":[$n[3].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnGameStart","t":8,"sn":"OnGameStart","rt":$n[0].Void},{"a":1,"n":"SpawnAIs","t":8,"sn":"SpawnAIs","rt":$n[0].Void},{"a":1,"n":"SpawnOneAI","t":8,"sn":"SpawnOneAI","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ArenaSize","t":16,"rt":$n[3].Vector2,"g":{"a":2,"n":"get_ArenaSize","t":8,"rt":$n[3].Vector2,"fg":"ArenaSize"},"fn":"ArenaSize"},{"a":2,"n":"FoodManager","t":16,"rt":$n[9].FoodManager,"g":{"a":2,"n":"get_FoodManager","t":8,"rt":$n[9].FoodManager,"fg":"FoodManager"},"fn":"FoodManager"},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[12].ArenaManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[12].ArenaManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[12].ArenaManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_activeAIs","t":4,"rt":$n[8].List$1(SnakeClash.Snake.AISnakeController),"sn":"_activeAIs"},{"a":1,"n":"_totalSpawnCount","t":4,"rt":$n[0].Int32,"sn":"_totalSpawnCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"aiCount","t":4,"rt":$n[0].Int32,"sn":"aiCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("AI Spawning"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"aiSnakePrefab","t":4,"rt":$n[5].AISnakeController,"sn":"aiSnakePrefab"},{"at":[new UnityEngine.HeaderAttribute("Arena Bounds"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arenaSize","t":4,"rt":$n[3].Vector2,"sn":"arenaSize"},{"at":[new UnityEngine.HeaderAttribute("Managers"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"foodManager","t":4,"rt":$n[9].FoodManager,"sn":"foodManager"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerSnake","t":4,"rt":$n[5].SnakeControllerBase,"sn":"playerSnake"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[12].ArenaManager,"sn":"Instance"}]}; }, $n);
    /*SnakeClash.Core.ArenaManager end.*/

    /*SnakeClash.Core.AudioManager start.*/
    $m("SnakeClash.Core.AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetAvailableSource","t":8,"sn":"GetAvailableSource","rt":$n[3].AudioSource},{"a":1,"n":"InitializePool","t":8,"sn":"InitializePool","rt":$n[0].Void},{"a":2,"n":"PlayChestOpenSound","t":8,"sn":"PlayChestOpenSound","rt":$n[0].Void},{"a":2,"n":"PlayClip","t":8,"pi":[{"n":"clip","pt":$n[3].AudioClip,"ps":0},{"n":"volumeScale","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"PlayClip","rt":$n[0].Void,"p":[$n[3].AudioClip,$n[0].Single]},{"a":2,"n":"PlayEatSound","t":8,"sn":"PlayEatSound","rt":$n[0].Void},{"a":2,"n":"PlayGrowSound","t":8,"sn":"PlayGrowSound","rt":$n[0].Void},{"a":2,"n":"PlayKillSound","t":8,"sn":"PlayKillSound","rt":$n[0].Void},{"a":2,"n":"PlayLoseSound","t":8,"sn":"PlayLoseSound","rt":$n[0].Void},{"a":2,"n":"PlayWinSound","t":8,"sn":"PlayWinSound","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[12].AudioManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[12].AudioManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[12].AudioManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_audioSourcePool","t":4,"rt":$n[8].List$1(UnityEngine.AudioSource),"sn":"_audioSourcePool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultVolume","t":4,"rt":$n[0].Single,"sn":"defaultVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Clips"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"eatClip","t":4,"rt":$n[3].AudioClip,"sn":"eatClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"growClip","t":4,"rt":$n[3].AudioClip,"sn":"growClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"killClip","t":4,"rt":$n[3].AudioClip,"sn":"killClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loseClip","t":4,"rt":$n[3].AudioClip,"sn":"loseClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"openChestClip","t":4,"rt":$n[3].AudioClip,"sn":"openChestClip"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poolSize","t":4,"rt":$n[0].Int32,"sn":"poolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winClip","t":4,"rt":$n[3].AudioClip,"sn":"winClip"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[12].AudioManager,"sn":"Instance"}]}; }, $n);
    /*SnakeClash.Core.AudioManager end.*/

    /*SnakeClash.Core.GameManager start.*/
    $m("SnakeClash.Core.GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddCoins","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"AddCoins","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"InstallFullGame","t":8,"sn":"InstallFullGame","rt":$n[0].Void},{"a":1,"n":"LunaLifeCycleGameEnded","t":8,"sn":"LunaLifeCycleGameEnded","rt":$n[0].Void},{"a":2,"n":"SetState","t":8,"pi":[{"n":"newState","pt":$n[12].GameState,"ps":0}],"sn":"SetState","rt":$n[0].Void,"p":[$n[12].GameState]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":2,"n":"CurrentCoins","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentCoins","t":8,"rt":$n[0].Int32,"fg":"CurrentCoins","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentCoins"},{"a":2,"n":"CurrentState","t":16,"rt":$n[12].GameState,"g":{"a":2,"n":"get_CurrentState","t":8,"rt":$n[12].GameState,"fg":"CurrentState","box":function ($v) { return Bridge.box($v, SnakeClash.Core.GameState, System.Enum.toStringFn(SnakeClash.Core.GameState));}},"fn":"CurrentState"},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[12].GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[12].GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[12].GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"MainCamera","t":16,"rt":$n[3].Camera,"g":{"a":2,"n":"get_MainCamera","t":8,"rt":$n[3].Camera,"fg":"MainCamera"},"fn":"MainCamera"},{"a":2,"n":"MaxSegments","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_MaxSegments","t":8,"rt":$n[0].Int32,"fg":"MaxSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"MaxSegments"},{"a":2,"n":"PlayerSnakeController","t":16,"rt":$n[5].PlayerSnakeController,"g":{"a":2,"n":"get_PlayerSnakeController","t":8,"rt":$n[5].PlayerSnakeController,"fg":"PlayerSnakeController"},"fn":"PlayerSnakeController"},{"a":2,"n":"WinCoinTarget","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_WinCoinTarget","t":8,"rt":$n[0].Int32,"fg":"WinCoinTarget","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"WinCoinTarget"},{"a":2,"n":"OnGameFail","t":4,"rt":$n[13].UnityEvent,"sn":"OnGameFail"},{"at":[new UnityEngine.HeaderAttribute("Events")],"a":2,"n":"OnGameStart","t":4,"rt":$n[13].UnityEvent,"sn":"OnGameStart"},{"a":2,"n":"OnGameWin","t":4,"rt":$n[13].UnityEvent,"sn":"OnGameWin"},{"a":1,"n":"_currentCoins","t":4,"rt":$n[0].Int32,"sn":"_currentCoins","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_currentState","t":4,"rt":$n[12].GameState,"sn":"_currentState","box":function ($v) { return Bridge.box($v, SnakeClash.Core.GameState, System.Enum.toStringFn(SnakeClash.Core.GameState));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[3].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxSegments","t":4,"rt":$n[0].Int32,"sn":"maxSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerSnakeController","t":4,"rt":$n[5].PlayerSnakeController,"sn":"playerSnakeController"},{"at":[new UnityEngine.HeaderAttribute("Settings")],"a":2,"n":"winCoinTarget","t":4,"rt":$n[0].Int32,"sn":"winCoinTarget","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[12].GameManager,"sn":"Instance"}]}; }, $n);
    /*SnakeClash.Core.GameManager end.*/

    /*SnakeClash.Core.GameState start.*/
    $m("SnakeClash.Core.GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Boot","is":true,"t":4,"rt":$n[12].GameState,"sn":"Boot","box":function ($v) { return Bridge.box($v, SnakeClash.Core.GameState, System.Enum.toStringFn(SnakeClash.Core.GameState));}},{"a":2,"n":"Fail","is":true,"t":4,"rt":$n[12].GameState,"sn":"Fail","box":function ($v) { return Bridge.box($v, SnakeClash.Core.GameState, System.Enum.toStringFn(SnakeClash.Core.GameState));}},{"a":2,"n":"Playing","is":true,"t":4,"rt":$n[12].GameState,"sn":"Playing","box":function ($v) { return Bridge.box($v, SnakeClash.Core.GameState, System.Enum.toStringFn(SnakeClash.Core.GameState));}},{"a":2,"n":"Ready","is":true,"t":4,"rt":$n[12].GameState,"sn":"Ready","box":function ($v) { return Bridge.box($v, SnakeClash.Core.GameState, System.Enum.toStringFn(SnakeClash.Core.GameState));}},{"a":2,"n":"Win","is":true,"t":4,"rt":$n[12].GameState,"sn":"Win","box":function ($v) { return Bridge.box($v, SnakeClash.Core.GameState, System.Enum.toStringFn(SnakeClash.Core.GameState));}}]}; }, $n);
    /*SnakeClash.Core.GameState end.*/

    }});
