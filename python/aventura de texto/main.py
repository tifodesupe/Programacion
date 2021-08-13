from menu import Menu

def main():
  print("Bienvenido a mi aventura, por favor elige la raza de tu personaje")

  menu_personajes = Menu(["Hobbit", "Semielfo/a","Humano"])

  menu_personajes.imprimir()
  raza = menu_personajes.seleccionar()
  nombre = input("Ponte un nombre: ")
  print("Haz seleccionado", raza, "de nombre", nombre)

  print(f"Te encuentras en una cueva, esta oscuro y solo recuerdas tu nombre, {nombre}, ¿que quieres hacer?")

  menu_cueva = Menu(["Ir a la derecha", "Ir a la izquierda", "No hacer nada"])

  menu_cueva.imprimir()
  opciones1 = menu_cueva.seleccionar() 
  
  print("decidiste", opciones1)

  if opciones1 == "Ir a la derecha":
    print("Haz encontrado la salida. ¡Ganaste!, espera la parte 2")
    return
  elif opciones1 ==  "Ir a la izquierda":
    print("Te haz encontrado con unos ogros, estos te mataron. Intenta de nuevo")
    return
  else:
    print("Estuviste hay 3 dias el cuarto moriste de deshidratacion. Intenta de nuevo")
    return


if __name__ == '__main__':
  main()
  