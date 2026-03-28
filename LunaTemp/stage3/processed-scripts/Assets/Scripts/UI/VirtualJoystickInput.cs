using UnityEngine;
using UnityEngine.InputSystem;

namespace SnakeClash.UI
{
    /// <summary>
    /// Pure logic for virtual joystick input.
    /// </summary>
    public static class VirtualJoystickInput
    {
        private static Vector2 _inputVector = Vector2.zero;

        public static void SetInput(Vector2 input)
        {
            _inputVector = input;
        }

        public static Vector2 GetInput()
        {
            // Support WASD/Arrows for editor testing via New Input System
            Vector2 keyboardInput = Vector2.zero;
            var keyboard = Keyboard.current;
            if (keyboard != null)
            {
                if (keyboard.wKey.isPressed || keyboard.upArrowKey.isPressed) keyboardInput.y += 1;
                if (keyboard.sKey.isPressed || keyboard.downArrowKey.isPressed) keyboardInput.y -= 1;
                if (keyboard.aKey.isPressed || keyboard.leftArrowKey.isPressed) keyboardInput.x -= 1;
                if (keyboard.dKey.isPressed || keyboard.rightArrowKey.isPressed) keyboardInput.x += 1;
            }

            if (keyboardInput != Vector2.zero)
            {
                return keyboardInput.normalized;
            }

            return _inputVector;
        }

        public static void Reset()
        {
            _inputVector = Vector2.zero;
        }
    }
}
