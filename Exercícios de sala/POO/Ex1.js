//  Crie uma classe Pessoa que tenha as propriedades nome e idade. Adicione um método apresentar que imprime uma mensagem de apresentação.
var Pessoa = /** @class */ (function () {
  function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  Pessoa.prototype.apresentar = function () {
    console.log(this.nome);
  };
  return Pessoa;
})();
var pessoa1 = new Pessoa("Rinaldo", 26);
pessoa1.apresentar();
