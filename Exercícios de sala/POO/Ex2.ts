class Animal {
  nome: string;
  som: string;

  constructor(nome: string, som: string) {
    this.nome = nome;
    this.som = som;
  }

  fazerSom() {
    return this.som;
  }
}

class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome, "Au au");
  }

  fazerSom() {
    return this.som;
  }
}

class Gato extends Animal {
  constructor(nome: string, som: string) {
    super(nome, som);
  }

  fazerSom() {
    return this.som;
  }
}

const cachorro = new Cachorro("Lucky");
console.log(cachorro.fazerSom());

const gato = new Gato("Mimi", "Miau");
console.log(gato.fazerSom());
