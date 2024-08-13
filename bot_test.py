import pyautogui
##import pyscreeze
import time
import sys

if len(sys.argv) > 1:
    word_to_write = sys.argv[1]
else:
    word_to_write = "SENAI"

start_position = (100, 100)  # Starting position (x, y)

screenSize = pyautogui.size()
# print(screenSize)
sleepTime = 0.00

# print(pyautogui.position())

# Move the mouse to the start position
pyautogui.moveTo(screenSize.width / 2, screenSize.height / 2) #, duration=0.05)
time.sleep(sleepTime)  # Optional: wait for half a second
pyautogui.click()

# Centraliza a área de impressão
pyautogui.keyDown('f3')
time.sleep(sleepTime)
# Seleciona tudo o que está na área de impressão
pyautogui.hotkey('ctrl', 'a')
time.sleep(sleepTime)
# Apaga o que tem na tela
pyautogui.keyDown('delete')
time.sleep(sleepTime)
# Seleciona a forma TEXTO
pyautogui.hotkey('ctrl', '6')
time.sleep(sleepTime)
# Posiciona o cursor no meio da tela
pyautogui.moveTo(screenSize.width / 2, screenSize.height / 2) #, duration=0.05)
# gradeX, gradeY = pyautogui.locateCenterOnScreen('grade.png', confidence=0.5)
# print(gradeX, gradeY)
# pyautogui.moveTo(gradeX / 2, gradeY / 2) #, duration=0.05)
time.sleep(sleepTime)
# Executa o click para adicionar a forma TEXTO à área de impressão
pyautogui.click()
time.sleep(sleepTime)
# Executa o click para posicionar o cursor na caixa de texto
pyautogui.click()
time.sleep(sleepTime)
# Seleciona tudo o que estiver na caixa de texto com finalidade de remoção
pyautogui.hotkey('ctrl', 'a')
time.sleep(sleepTime)
# Escreve o novo texto
pyautogui.typewrite(word_to_write)
time.sleep(sleepTime)
# Executa o atalho "TAB" para seguir para o botão de "OK"
pyautogui.keyDown('tab')
time.sleep(sleepTime)
# Executa a função de "ENTER" para fechar a caxia de texto
pyautogui.keyDown('enter')
time.sleep(sleepTime)
# Aciona o atalho para o menu "DRAW"
pyautogui.hotkey('alt', 'd')
time.sleep(sleepTime)
# Seleciona a opção "Data Center", para centralizar o texto
pyautogui.keyDown('d')
time.sleep(sleepTime)
#pyautogui.keyDown('enter')
# time.sleep(0.5)
# pyautogui.moveTo(1681, 685) #, duration=0.5)
# Busca na tela a semelhança com a imagem, que neste caso é o botão de "START"
x, y = pyautogui.locateCenterOnScreen('start.png', confidence=0.5)
time.sleep(sleepTime)
# Efetua o click para iniciar o processo de gravação
pyautogui.click(x, y)
time.sleep(sleepTime)
# pyautogui.click()
# time.sleep(sleepTime)  # Optional: wait for half a second
