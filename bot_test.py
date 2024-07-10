import pyautogui
import time

def move_and_click(start_pos, end_pos, duration=1):
    """
    Moves the mouse from start_pos to end_pos and performs a click.
    
    :param start_pos: tuple, the starting position (x, y)
    :param end_pos: tuple, the ending position (x, y)
    :param duration: float, time to move from start to end position
    """
    # Move the mouse to the start position
    pyautogui.moveTo(start_pos[0], start_pos[1], duration=0.5)
    time.sleep(0.5)  # Optional: wait for half a second

    # Move the mouse to the end position
    pyautogui.moveTo(end_pos[0], end_pos[1], duration=duration)
    time.sleep(0.5)  # Optional: wait for half a second

    # Perform a click at the end position
    pyautogui.click()

# Example usage
start_position = (100, 100)  # Starting position (x, y)
end_position = (500, 500)    # Ending position (x, y)
move_and_click(start_position, end_position, duration=2)  # Move in 2 seconds and click
