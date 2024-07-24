function calcularFatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let fatorial = 1;
    for (let i = n; i > 1; i--) {
      fatorial *= i;
    }
    return fatorial;
  }
}

let numero = parseInt(
  prompt("Digite um número inteiro para calcular o fatorial:")
);
console.log(`O fatorial de ${numero} é: ${calcularFatorial(numero)}`);
