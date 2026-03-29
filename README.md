# Snake Clash: Playable Ad

![Snake Clash Banner](https://img.shields.io/badge/Unity-6000.0-blue?logo=unity&logoColor=white)
![Luna Support](https://img.shields.io/badge/Support-Luna%20Playable-orange)

## 🎮 Overview
A high-performance playable ad prototype of **Snake Clash** developed in Unity. This project is optimized for ad network deployment, focusing on smooth performance and quick load times.

## ⚙️ Requirements & Dependencies
- **Unity Version**: `6000.0` (Unity 6) - **Mandatory** for Luna / Playworks compatibility.
- **Platform**: WebGL 2 (Optimized for Mobile Web).
- **Toolchain**: Luna Playworks Plugin.
- **Input System**: Legacy Standalone Input (`UnityEngine.Input`) to ensure compatibility with ad network wrappers.

## ⚡ Key Features
- **Dynamic Snake Mechanics**: Responsive movement and fluid growth logic.
- **Level-Based Progression**: Interactive environment where snake level dictates chest interaction.
- **Resource System**: Dynamic spawning of chests and collectibles.
- **Optimized Visuals**: Custom unlit shaders specifically optimized for WebGL 2 and mobile browsers.

## 🛠 Implementation Details
- **Snake Body Tracking**: Head-follower pattern for smooth body part transitions.
- **GameManager**: Centralized state management with efficient camera and resource caching.
- **Luna Integration**: Pre-configured for Luna Playable builds with optimized shader pragmas.

## 🚀 Getting Started
1. **Clone**: `git clone [repository-url]`
2. **Open**: Use Unity Hub to open the project with **Unity 6000.0**.
3. **Configuration**:
   - Ensure the **Luna** plugin is correctly initialized.
   - Verify that **Input Settings** are using the Legacy system.
   - Render Settings should be targeted for **WebGL 2**.

## 📝 Performance Notes
- Avoid using `Find()` or `GetComponent()` inside `Update()` loops.
- All major references are cached in the `GameManager` or local component `Awake`/`Start` methods.
- Shaders use `prefer_hlslcc gles` to support a wide range of mobile browsers.
