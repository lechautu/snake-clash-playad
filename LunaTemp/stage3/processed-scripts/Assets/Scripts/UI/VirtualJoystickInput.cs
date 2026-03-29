using UnityEngine;

namespace SnakeClash.UI
{
    /// <summary>
    /// Pure logic for virtual joystick input.
    /// </summary>
    public static class VirtualJoystickInput
    {
        private static Vector2 _inputVector = Vector2.zero;

        public static void SetInput([Bridge.Ref] Vector2 input)
        {
            _inputVector = input;
        }

        public static Vector2 GetInput()
        {
            // Support WASD/Arrows for editor testing via Standalone Input
            Vector2 keyboardInput = new Vector2(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));

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
