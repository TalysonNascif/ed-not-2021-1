let trocas, comps, pass

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {     // Condição de saída das chamadas recursivas
        pass++
        const pivot = fim
        let div = ini - 1
        // Loop for vai até a PENÚLTIMA posição 
        for(let i = ini; i < fim; i++) {
            //if(vetor[i] < vetor[pivot]) {
            if(fnComp(vetor[pivot], vetor[i])) {    //Parametros invertidos
                comps++
                div++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [vetor[div], vetor[i] ]
                    trocas++
                }
            }    
        }
        div++
        // Colocamos o pivô no seu lugar definitivo
        //if(vetor[pivot] < vetor[div]) {
        if(fnComp(vetor[div], vetor[pivot])) {  // Parametros invertidos
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

    // Ordena o subvetor à esquerda do pivô
    quickSort(vetor, fnComp, ini, div - 1)

    //Ordena o subvetor à direita do pivô
    quickSort(vetor, fnComp, div +1, fim)
    }
}

import { candidatos } from './includes/candidatos-2018.mjs'

trocas = 0, pass = 0, comps = 0
//console.log('Antes:', candidatos)
console.time('Ordenando candidatos...')
//quickSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)


//Ordeação por SG_UE, depois por DS_CARGO e, finalmente, por NR_CANDIDATO
// const candidatosSP = candidatos.filter(obj => obj.SG_EU === 'SP') 
// Pesquisar e retornar por "candidatosSP"
quickSort(candidatos, (a, b) => {
    if(a.SG_UE === b.SG_UE) {   // Empate na UF
        //EMpate no cargo, desempate no número do candidato
        if(a.DS_CARGO === b.DS_CARGO) return a.NR_CANDIDATO > b.NR_CANDIDATO
        // UF igual, cargo diferentes, diferencia cargo
        else return a.DS_CARGO > b.DS_CARGO
    }
    // UFs diferentes, diferencia por UF
    else return a.SG_UE > b.SG_UE
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
console.log({trocas, pass, comps, memoria})

// Comparação ao Contrário (Do maior para o menor, só trocar os sinais das comparações no código)