### ejercicio 3

while True:
  num1 = int(input("Num 1: "))
  num2 = int(input("Num 2: "))
  num3 = int(input("Num 3: "))

  if num1 >= num2 and num1 >=3:
    print(f"El numero mas grande es el numero {num1}")
  elif num2 >= num1 and num2 >= num3:
    print(f"El numero mas grande es el numero {num2}")
  else:
    print(f"El numero mas grande es el numero {num3}")
  break

#Mateo Vargas Giraldo---- curso fundamentos de python 2023