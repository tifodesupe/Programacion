import random
import os

DB = [
  "juego",
  "minecraft",
  "minar",
  "construir",
  "craftear",
  "crepper",
  "esceleto",
  "zombi",
  "araña",
  "pigling",
  "parcour",
  "ederman",
  "inframundo",
  "end",
  "piedra base"
]
def run():
  IMAGENES_DEL_AORCADO = ['''
  +---+
  |   |
      |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========''']
  word = random.choice(DB)
  spaces = ["_"] * len(word)
  intentos = 0
  while True:
    os.system("clear")
    print()
    print("AHORCADO DE MINECRAFT")
    print()
    for character in spaces:
      print(character, end=" ")
    print()

    print(IMAGENES_DEL_AORCADO[intentos])
    decision = input("Digita una letra y luego presiona ENTER: ")
    decision.lower()

    found = False

    for i, character in enumerate(word):
      if character == decision:
        spaces[i] = decision
        found = True

    if not found:
      intentos += 1
    if "_" not in spaces:
      os.system("clear")
      print("Ganaste, la palabra era " + word)
      break
    if intentos == 6:
      os.system("clear")
      for character in spaces:
        print(character, end=" ")
      print(IMAGENES_DEL_AORCADO[intentos])

      print("Perdiste")
      break


if __name__ == "__main__":
  run()