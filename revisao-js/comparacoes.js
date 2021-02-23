// Números
let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('----------------------------')

// Strings
a = 'CATIFUNDA'
b = 'FELISBINO'
//b = 'ÁGATHA'
c = 'CATIFUNDA'
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('----------------------------')

// Booleanos - > true = 1 e false = 0
a = true
b = false
c = true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('----------------------------')

// Vetores (Comparação que envolve endereço de memória)
a = [10, 20, 30, 40, 50]
b = [-3, -2, -1]
c = [10, 20, 30, 40, 50]
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

// Comparações diretas de vetores dão resultados inconscistentes
// Não é possível comparar diretamente dois vetores

console.log('----------------------------')

// Objetos
a = {marca: 'Fiat', modelo: '147', ano: 1979 }
b = {marca: 'Chevrolet', modelo: 'Chevette', ano: 1982 }
a = {marca: 'Fiat', modelo: '147', ano: 1979 }
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

// Objetos também não podem ser diretamente comparados entre si

//CONCLUSÃO: apenas os seguintes tipos de dados diretamente comparaveis entre si:
// - number
// - string
// - boolean