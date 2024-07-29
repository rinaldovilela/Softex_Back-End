function contarCaracteres(nome:string): number {
    return nome.length
}


console.log(contarCaracteres("Rinaldo Alves"))
console.log(contarCaracteres("Ruan"))
console.log(contarCaracteres("ricardo"))
console.log(contarCaracteres("isaell"))
console.log(contarCaracteres("eduarda"))
console.log(contarCaracteres("fernandes"))
console.log(contarCaracteres("augusto"))



interface Pessoa { 
    nome: string,
    idade: number,
}

const pessoa:Pessoa = {nome: "Ruan", idade: 25}


console.log(pessoa)