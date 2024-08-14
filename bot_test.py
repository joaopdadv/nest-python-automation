import pyautogui
import pyperclip
import time
import sys

if len(sys.argv) > 1:
    word_to_write = sys.argv[1]
else:
    word_to_write = "SENAI"

print(word_to_write)

start_position = (100, 100)  # Starting position (x, y)

screenSize = pyautogui.size()
sleepTime = 0.00

# Move the mouse to the start position
pyautogui.moveTo(screenSize.width / 2, screenSize.height / 2)
time.sleep(sleepTime)
pyautogui.click()

# Centraliza a área de impressão
pyautogui.keyDown('f3')
time.sleep(sleepTime)
pyautogui.hotkey('ctrl', 'a')
time.sleep(sleepTime)
pyautogui.keyDown('delete')
time.sleep(sleepTime)
pyautogui.hotkey('ctrl', '6')
time.sleep(sleepTime)
pyautogui.moveTo(screenSize.width / 2, screenSize.height / 2)
time.sleep(sleepTime)
pyautogui.click()
time.sleep(sleepTime)
pyautogui.click()
time.sleep(sleepTime)
pyautogui.hotkey('ctrl', 'a')
time.sleep(sleepTime)

# Copy the text to the clipboard and paste it
pyperclip.copy(word_to_write)
pyautogui.hotkey('command', 'v')
time.sleep(sleepTime)

pyautogui.keyDown('tab')
time.sleep(sleepTime)
pyautogui.keyDown('enter')
time.sleep(sleepTime)
pyautogui.hotkey('alt', 'd')
time.sleep(sleepTime)
pyautogui.keyDown('d')
time.sleep(sleepTime)

x, y = pyautogui.locateCenterOnScreen('start.png', confidence=0.5)
time.sleep(sleepTime)
pyautogui.click(x, y)
time.sleep(1)
pyautogui.keyDown('enter')