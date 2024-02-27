const numero_A = prompt("digite um numero");
const numero_B = prompt("digite outro numero");

const x = parseFloat(numero_A);
const y = parseFloat(numero_B);

const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

alert(
  "RESULTADOS DAS OPERAÇÕES ABAIXO:\n" +
    "\n Resultado da soma é = " +
    soma +
    "\n\n Resultad da subtração é = " +
    subtração +
    "\n\n Resultado da multiplicação é =" +
    multiplicação +
    "\n\n Resultado da divisão é = " +
    divisão
);
