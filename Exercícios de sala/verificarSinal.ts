


function verificarSinal(num: number) {
    
    if (num > 0) {
        return (`O número ${num} é positivo`)
    } else if (num < 0 ) {
        return (`O número ${num} é negativo`)
    } else {
        return ('o número é neutro')  
    }
    
    
}

console.log(verificarSinal(-3))