//ejercicio 1
const boxColor = document.getElementById("box-color");
const changeButton = document.getElementById("button-color");
let ColorIndex = 0;
const colors = ["gray", "aqua", "red"];

changeButton.addEventListener("click", () => {
  ColorIndex = (ColorIndex + 1) % colors.length;
  boxColor.style.backgroundColor = colors[ColorIndex];
});
//ejercicio 2
const text = document.getElementById("text");
const inputText = document.getElementById("inputText");

inputText.addEventListener("input", (event) => {
  text.textContent = event.target.value;
});
//ejercicio 3
const calculateButton = document.getElementById("calculateButton");
const kgInput = document.getElementById("kg");
const heightInput = document.getElementById("height");
const resultInput = document.getElementById("result");

calculateButton.addEventListener("click", () => {
  const weight = parseFloat(kgInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convertir de cm a metros
  if (isNaN(weight) || isNaN(height)) {
    resultInput.value = "Por favor, ingrese valores numéricos válidos.";
  } else {
    const bmi = weight / (height * height);
    resultInput.value = bmi.toFixed(2); // Mostrar el resultado con 2 decimales
  }
});
//ejercicio 4
const usdInput = document.getElementById("usdInput");
const copInput = document.getElementById("copInput");
const usdToCopRate = 4180.0; // Valor de conversión por defecto
usdInput.addEventListener("input", () => {
  const usdAmount = parseFloat(usdInput.value);
  if (!isNaN(usdAmount)) {
    const copAmount = usdAmount * usdToCopRate;
    copInput.value = copAmount.toFixed(2);
  } else {
    copInput.value = "";
  }
});
copInput.addEventListener("input", () => {
  const copAmount = parseFloat(copInput.value);
  if (!isNaN(copAmount)) {
    const usdAmount = copAmount / usdToCopRate;
    usdInput.value = usdAmount.toFixed(2);
  } else {
    usdInput.value = "";
  }
});
