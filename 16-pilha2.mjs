import { Stack } from './lib/Stack.mjs'

const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = new Stack()

// Empilhamento 
for(let i =0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

console.log(pilha.print())

let textoRew = ''

// Desempilhamento
while(! pilha.empty) {   
    textoRew += pilha.pop()
}
console.log(textoRew)