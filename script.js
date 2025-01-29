// Variables para los elementos del DOM
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const sumarBtn = document.getElementById("sumar");
const restarBtn = document.getElementById("restar");
const multiplicarBtn = document.getElementById("multi");
const resultado = document.getElementById("resultado");

// Helpers
// Funcion para validar la entrada
function validateInput(number1, number2) {
    if(isNaN(parseFloat(number1)) || isNaN(parseFloat(number2))) {
        resultado.textContent = "Error: Ingrese numeros validos e intente de nuevo..."
    } else {
      return [parseFloat(number1), parseFloat(number2)];
    }
}
// Funcion para sumar
function sum(number1, number2) {
  return number1 + number2;
}

// Función para sumar dos números
function add() {
  let numbers = validateInput(numero1.value, numero2.value);
  const suma = sum(numbers[0], numbers[1]);
  resultado.textContent = `Resultado: ${suma}`;
}
// Función para restar dos números
function substract() {
  let numbers = validateInput(numero1.value, numero2.value);
  const resta = numbers[0] - numbers[1];
  resultado.textContent = `Resultado: ${resta}`;
}

// Función para multiplicar dos números
function multiply() {
  let numbers = validateInput(numero1.value, numero2.value);
  let result = numbers[0];
  for (let i = 1; i < numbers[1]; i++) {
    result = sum(result, numbers[0])
  }
  resultado.textContent = `Resultado: ${result}`;
}
// Función para dividir dos números

// Event Listeners para botones
sumarBtn.addEventListener("click", add);
restarBtn.addEventListener("click", substract);
multiplicarBtn.addEventListener("click", multiply);
