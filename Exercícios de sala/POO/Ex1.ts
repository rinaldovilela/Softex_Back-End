//  Crie uma classe Pessoa que tenha as propriedades nome e idade. Adicione um método apresentar que imprime uma mensagem de apresentação.

// Instalando e configurando o typescript .

// 1º npm install -g typescript

// 2º npm install -g ts-node

class Pessoas {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return this.nome;
  }
}

const pessoa01 = new Pessoas("Rinaldo", 26);
console.log(`Olá meu nome é : ${pessoa01.apresentar()}`);
