class ContaBancaria {
  tipoDeConta: string;
  saldo: number;

  constructor(tipoDeConta: string, saldo: number) {
    this.tipoDeConta = tipoDeConta;
    this.saldo = saldo;
  }

  depositar(deposito: number) {
    this.saldo = this.saldo + deposito;
    console.log(`Você depositou : R$ ${deposito.toFixed(2)}`);
  }

  sacar(saque: number) {
    this.saldo = this.saldo - saque;
    console.log(`Você sacou : R$ ${saque.toFixed(2)}`);
  }

  mostrarSaldo() {
    console.log(`Seu saldo é : R$ ${this.saldo.toFixed(2)}`);
  }
}

const conta = new ContaBancaria("Corrente", 200);
conta.mostrarSaldo();
conta.depositar(609);
conta.mostrarSaldo();
conta.sacar(170);
conta.mostrarSaldo();
