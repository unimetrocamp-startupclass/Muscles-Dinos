# import serial
# import pyautogui
# import time

# # Altere 'COM      ' pela porta correta
# porta = 'COM5'

# try:
#     arduino = serial.Serial(porta, 9600, timeout=1)
#     time.sleep(2)  # Aguarda o Arduino resetar
#     print(f"Conectado à porta {porta}")
# except serial.SerialException as e:
#     print(f"Erro ao conectar: {e}")
#     exit()

# while True:
#     if arduino.in_waiting > 0:
#         data = arduino.readline().decode().strip()
#         print(f"Dado recebido: {data}")
#         if data == "SPACE":                                                      
#             pyautogui.leftClick()
      

import serial
from pynput.keyboard import Controller

keyboard = Controller()
ser = serial.Serial('COM3', 9600)  # Altere para sua porta

while True:
    line = ser.readline().decode('utf-8').strip()
    print(line)
    if "MUSCLE ACTIVATED" in line:
        keyboard.press('space')
        keyboard.release('space')
