// Função para ler a entrada do usuário (simulação)
function getInput(promptMessage) {
  let input = prompt(promptMessage);
  return input;
}

// Expressões, entrada e saída de dados

// Soma de dois números inteiros
let num1 = parseInt(getInput("Digite o primeiro número inteiro:"));
let num2 = parseInt(getInput("Digite o segundo número inteiro:"));
console.log(`A soma dos dois números inteiros é: ${num1 + num2}`);

// Subtração de dois números inteiros
console.log(`A subtração dos dois números inteiros é: ${num1 - num2}`);

// Multiplicação de dois números inteiros
console.log(`A multiplicação dos dois números inteiros é: ${num1 * num2}`);

// Divisão de dois números inteiros
let a = parseInt(getInput("Digite o valor de a:"));
let b = parseInt(getInput("Digite o valor de b:"));
if (b !== 0) {
  console.log(`A divisão de a por b é: ${a / b}`);
} else {
  console.log("Divisão por zero não é permitida.");
}

// Resto da divisão de dois números inteiros
console.log(`O resto da divisão de a por b é: ${a % b}`);

// Soma de dois números reais
let num3 = parseFloat(getInput("Digite o primeiro número real:"));
let num4 = parseFloat(getInput("Digite o segundo número real:"));
console.log(`A soma dos dois números reais é: ${num3 + num4}`);

// Conversão de Celsius para Fahrenheit
let celsius = parseFloat(getInput("Digite a temperatura em graus Celsius:"));
let fahrenheit = (9 * celsius + 160) / 5;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);

// Estrutura decisão if/else

// Verificar se o número é par ou ímpar
let numero = parseInt(getInput("Digite um número inteiro:"));
if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

// Verificar se a pessoa chegou à maioridade
let idade = parseInt(getInput("Digite a idade:"));
let maioridade = 18;
if (idade >= maioridade) {
  console.log("A pessoa já chegou à maioridade.");
} else {
  console.log(`Faltam ${maioridade - idade} anos para a maioridade.`);
}

// Verificar qual número é maior
let numA = parseInt(getInput("Digite o valor de A:"));
let numB = parseInt(getInput("Digite o valor de B:"));
if (numA > numB) {
  console.log("A é maior que B.");
} else if (numA < numB) {
  console.log("B é maior que A.");
} else {
  console.log("A e B são iguais.");
}

// Verificar se o veículo excedeu a velocidade máxima
let velocidade = parseFloat(getInput("Digite a velocidade do veículo (km/h):"));
let velocidadeMaxima = 110;
if (velocidade > velocidadeMaxima) {
  console.log("O veículo excedeu a velocidade máxima permitida.");
} else {
  console.log("O veículo está dentro da velocidade permitida.");
}

// Cálculo do IMC
let peso = parseFloat(getInput("Digite o peso (kg):"));
let altura = parseFloat(getInput("Digite a altura (m):"));
let imc = peso / (altura * altura);
console.log(`O IMC é: ${imc.toFixed(2)}`);
if (imc <= 18.5) {
  console.log("Abaixo do peso.");
} else if (imc > 18.5 && imc < 25) {
  console.log("Peso ideal.");
} else {
  console.log("Acima do peso.");
}

// Estruturas de decisão: Escolha/Caso

// Verificar se a letra é uma vogal ou consoante
let letra = getInput("Digite uma letra:").toLowerCase();
switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("A letra é uma vogal.");
    break;
  default:
    console.log("A letra é uma consoante.");
}

// Calculadora simples
let num1Calc = parseFloat(getInput("Digite o primeiro número:"));
let num2Calc = parseFloat(getInput("Digite o segundo número:"));
let operacao = getInput(
  "Escolha uma operação (somar, subtrair, multiplicar, dividir):"
).toLowerCase();
switch (operacao) {
  case "somar":
    console.log(`Resultado: ${num1Calc + num2Calc}`);
    break;
  case "subtrair":
    console.log(`Resultado: ${num1Calc - num2Calc}`);
    break;
  case "multiplicar":
    console.log(`Resultado: ${num1Calc * num2Calc}`);
    break;
  case "dividir":
    if (num2Calc !== 0) {
      console.log(`Resultado: ${num1Calc / num2Calc}`);
    } else {
      console.log("Divisão por zero não é permitida.");
    }
    break;
  default:
    console.log("Operação inválida.");
}

// Nome do mês
let mes = parseInt(getInput("Digite um número entre 1 e 12:"));
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Número inválido. Por favor, digite um número entre 1 e 12.");
}
