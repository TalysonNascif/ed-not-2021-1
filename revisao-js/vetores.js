let frutas = ['maçã', 'laranja', 'pera', 'uva', 'mamão', 'banana']

// Vetor original
console.log(frutas)

//Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

//Remoção do prmeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária
// 1º parametro -> a posição de remoção (contagem começa em 0)
// 2º parametro -> a quantidade de elementos a remover

let terceiraFruta = frutas.splice(2, 1) // Sempre retornará um vetor

console.log(frutas)
console.log(terceiraFruta)

// Inserindo no final do Vetor
frutas.push('amora') //Pode inserir mais de um elemento ao mesmo tempo
// por ex:
// frutas.push('amora', 'jaca')
console.log(frutas)

// Inserir no início do vetor
frutas.unshift('Jabuticaba') //Também pode inseir mais de um elemento ao mesmo tempo
// por ex: frutas.unshift('jabuticaba', 'mexirica')
console.log(frutas)

// Inserção no meio do vetor
// Parametros do splice() para inserção
// 1º -> posição para inserção
// 2º -. nº de elementos a serem excluídos (para inserção, usa-se 0)
// 3º em diante -> elemento(s) que será(ão) inserido(s)
frutas.splice(2, 0, 'pêssego') //inserindo a terceira posição
// Tambem funciona para inserir vários elementos ao mesmo tempo, por ex:
// frutas.splice(2, 0, 'pessego', 'jaca', 'nectarina')
console.log(frutas)

// Usando splice() para substituição
// Parâmetros:
// 1º -> posição para substituição
// 2º -> quantidade de elementos que serão excluídos (para substituiçao, 1)
// 3º -> o elemento que será inserido
frutas.splice(4, 1, 'ameixa') // Substituição na 5ª posição
console.log(frutas)

// Inserção múltipla com splice()
frutas.splice(1, 0, 'nectarina', 'jaca')
console.table(frutas) // Amostra mais organizada com table

/**********************
 * Percurso de Vetor
*/

console.log('--------------------------------------')

// 1) Percurso com for tradicional
// a) A contagem começa em zero (0 - primeiro elemento)
// b) Ocorre enquanto o contador for MENOR que o número de elementos do vetor
// c) length termina com TH (língua mole)
// d) é o metodo mais flexível pois, se necessário, é possível fazer um percurso
//parcial (começar em algum elemento que não é o primeiro e terminar antes do final)
for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

console.log('----------------------------------------------')

// 2) For tradicional, em ordem inversa
// a) O contador inicia-se em length -1
// b) A condição é contador MAIOR OU IGUAL a zero (0 - primeiro elemento)
for(let i = frutas.length - 1; i >=0; i--) {
    console.log(i, frutas[i])
}

console.log('------------------------------------------')

// 3) Percurso com for..of
// a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de uma variável contadora
// Variáveis:
// f -> variável que receberá cada elemento do vetor (pode ser qlqer nome válido de variável)
// frutas -> é o vetor a ser percorrido

//let x = 0
for(let f of frutas) {
    console.log(f)
    //console.log(x, f)
    //x++
}

console.log('-----------------------------------------')

// 4) Percurso com forEach()
// forEach() recebe como parâmetro uma função que recebe como parâmetro 
// cada elemento do vetor
// O nome do parâmetro da função pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento){
    console.log(elemento)
})

console.log('----------------------------------------------')

// O mesmo forEach(), usando uma arrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))
