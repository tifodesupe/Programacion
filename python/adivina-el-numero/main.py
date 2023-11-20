import random
import os
def game():
  os.system("clear")
  numero = random.randint(1, 100)
  print("Adivina el numero del 1 al 100 que he pensado, tienes 10 intentos")
  print()
  print()
  print()
  for i in range(10):
    try:
      entrada = input("Ingresa el número y luego presiona enter ")
      entrada = int(entrada)
      if(entrada > numero):
        print("El número es menor")
      elif(entrada < numero):
        print("El número es mayor")
      elif(entrada == numero):
        print("As adivinado el número, este era: ", numero, " en ", i+1, " intentos")
        return
    except:
      print("No puedes colocar letras, ahora tendras que volver a empezar")
      return
  print("Perdiste")
  return




if __name__  == "__main__":
  game()