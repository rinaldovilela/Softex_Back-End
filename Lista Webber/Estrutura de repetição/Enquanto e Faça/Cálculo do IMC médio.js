function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

let continuar = true;
let totalIMC = 0;
let contador = 0;

while (continuar) {
  let peso = parseFloat(prompt("Digite o peso (kg):"));
  let altura = parseFloat(prompt("Digite a altura (m):"));
  let imc = calcularIMC(peso, altura);
  console.log(`IMC calculado: ${imc.toFixed(2)}`);

  totalIMC += imc;
  contador++;

  continuar = confirm("Deseja calcular o IMC de outro aluno?");
}

if (contador > 0) {
  let mediaIMC = totalIMC / contador;
  console.log(`Média aritmética dos IMCs calculados: ${mediaIMC.toFixed(2)}`);
} else {
  console.log("Nenhum IMC foi calculado.");
}
