function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

let n = 10; // Exibir os 10 primeiros termos
let sequencia = fibonacci(n);
console.log(`Os primeiros ${n} termos da sequência de Fibonacci são:`);
console.log(sequencia.join(", "));
