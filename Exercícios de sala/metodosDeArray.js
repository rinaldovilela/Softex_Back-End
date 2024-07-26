/* JavaScript Array Methods

- ARRAY.MAP()               - ARRAY.SPLICE()
- ARRAY.FILTER()            - ARRAY.SLICE()
- ARRAY.REDUCE()            - ARRAY.JOIN()
- ARRAY.REDUCERIGTH()       - ARRAY.REVERSE()
- ARRAY.FILL()              - ARRAY.SORT()
- ARRAY.FIND()              - ARRAY.SOME()
- ARRAY.INDEXOF()           - ARRAY.EVERY()
- ARRAY.LASTINDEXOF()       - ARRAY.FROM()
- ARRAY.FINDINDEX()         - ARRAY.OF()
- ARRAY.INCLUDES()          - ARRAY.ISARRAY()
- ARRAY.POP()               - ARRAY.AT()
- ARRAY.PUSH()              - ARRAY.COPYWITHIN()
- ARRAY.SHIFT()             - ARRAY.FLAT()
- ARRAY.UNSHIFT()           - ARRAY.FLATMAP()


DOCUMENTATION ABOUT ARRAY METHODS

lINK : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map



*/

// EXEMPLOS :

/*
let fruits = ["apple", "banana"];

//.push()​ Adiciona um ou mais elementos ao final de um array.

fruits.push("orange");

console.log("Método push : ", fruits);

// 	.pop()​ Remove o último elemento de um array.​

fruits.pop();

console.log("Método pop : ", fruits);

// .unshift Adiciona um elemento no inicio do array

fruits.unshift("strawberry");

console.log(fruits);

// .shift Remove o primeiro elemento do array

fruits.shift();

console.log(fruits);

*/

/*
// ATIVIDADE 1 : Simulação de um CRUD com Métodos de Transformação

let fruisOne = ["apple", "banana", "orange"];

// Adicione 'kiwi' ao final do array.

fruisOne.push("kiwi");

console.log(fruisOne);

// Remova o último elemento do array.

fruisOne.pop();

console.log(fruisOne);

// Adicione 'strawberry' ao início do array.​
fruisOne.unshift("strawberry");

console.log(fruisOne);

// Remova o primeiro elemento do array.

fruisOne.shift(fruisOne);

console.log(fruisOne);

*/

/*

// Atividade 2 : Encontrar o produto por id:

const produtos = [
  { id: 1, nome: "Camisa" },
  { id: 2, nome: "Calça" },
  { id: 3, nome: "Sandálias" },
];

function encontrarProdutoPorId(id) {
  const produtoEncontrado = produtos.find((produto) => produto.id === id);

  if (!produtoEncontrado) {
    return "Produto não encontrado no banco de dados";
  }

  return produtoEncontrado;
}

console.log(encontrarProdutoPorId(2));


*/

/*


// Atividade 3 :Encontrar o Usuário pelo Nome.

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "João" },
  { id: 3, name: "Maria" },
];

function findByUserName(name) {
  usuarioEncontrado = users.find((user) => user.name === name);

  if (!findByUserName) {
    return "Usuário não consta no banco de dados.";
  }

  return usuarioEncontrado;
}

console.log(findByUserName("João"));

*/
