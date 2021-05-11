/* 
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
    de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem duas partes: uma, que armazena a 
    informação e outra que guarda o endereço do próximo nodo da sequencia
    - A qualquer omento, temos um conhecimento apenas limitado de onde 
    se encontram todos os nodos da Lista. Sabemos apenas onde está o 
    primeiro e último nodo da sequencia. Os nodos intermediários precisam
    ser encontrados partindo-se do primeiro e percorrendo a sequencia.
*/

class Node {
    constructor(val) {
        this.data = val     // Armazenamento de valor
        this.next = null    // Ponteiro para o próximo nodo
    }
}

export class LinkedList {

    #head       // Nodo inicial da Lista
    #tail       // Nodo final da lista
    #count      // Quantidade de nodos na lista

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
        //console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    get empty() {
        return this.#count === 0
    }

    // Inserção em uma posição arbitrária
    insert(pos, val) {

        // Cria no nodo para abrigar o valor e o endereço do próximo nodo
        let inserted = new Node(val)

        // 1° caso: inserção em lista vazia
        if(this.empty) {
            this.#head = inserted
            this.#tail = inserted
        }
        // 2° caso: inserção no início da Lista
        else if(pos === 0) {
            // O sucessor do nodo inserido é o atual head
            inserted.next = this.#head
            // O novo head passa a ser o nodo inserido
            this.#head = inserted

        }
        // 3° caso: inserção no final da Lista
        else if(pos >= this.#count) {
           // O sucessor do tail atual passa a ser o nodo inserido
            this.#tail.next = inserted 
            // O nodo inserido passa a ser o novo tail
            this.#tail = inserted
        }
        //4° caso: posição intermediária
        else {
            /*
                Vertex pre = head
                for (k = 0; k < i-1; k++)
                pre = pre.next
                Vertex aft = pre.next
                Vertex vtx = new Vertex(v)
                vtx.next = aft
                pre.next = vtx
            */
           // Nodo ANTERIOR à posição de inserção
           let before = this.#head
           // Percorre a lista até encontrar o nodo da posição ANTERIOR à de inserção
           for(let i = 0; i < pos - 1; i++) before = before.next
           // Nodo que irá ficar DEPOIS do inserido
           let after = before.next
           // O próximo do nodo inserido passa a ser o nodo after
           inserted.next = after
           // O próximo do nodo before passa a ser o nodo inserido
           before.next = inserted
        } 
        this.#count++

        //console.log({head: this.#head, tail: this.#tail, count: this.#count})

    }

    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]: ${node.data}`
            if(node.next) output += ' -> '
            node = node.next
        }
        return output + ` ) count: ${this.#count}`

    }
}

let lista = new LinkedList()
console.log(lista.print())

lista.insert(0, 76)
console.log(lista.print())

lista.insert(0, 22)
console.log(lista.print())

lista.insert(2, 8)
console.log(lista.print())

lista.insert(1, 47)
console.log(lista.print())

lista.insert(2, 29)
console.log(lista.print())