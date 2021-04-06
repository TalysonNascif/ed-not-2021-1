const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = []

// Empilhamento 
for(let i =0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

// Inserindo alguns caracteres no MEIO da pilha (PROIBIDO!)
pilha.splice(16, 0, 'b', 'a', 't', 'a', 't', 'a')

console.log(pilha)

let textoRew = ''

// Desempilhamento
while(pilha.length) {   // 0 é avaliado como false; qq coisa !== 0 é avaliado como true
    textoRew += pilha.pop()
}
console.log(textoRew)