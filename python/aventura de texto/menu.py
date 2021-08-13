class Menu():
  def __init__(self,opciones):
    self.opciones = opciones
  
  def imprimir(self):
    for index in range(len(self.opciones)):
      print(f"{index + 1} - {self.opciones[index]}")
    
  def seleccionar(self):
    numero = input(f"ingresa un número del 1 al {len(self.opciones)}\n")

    try:
      seleccion = int(numero) - 1
    except ValueError:
      seleccion = -1

    if seleccion < 0 or seleccion >= len(self.opciones):
      self.seleccionar()

    return self.opciones[seleccion]

    