/*

    MAPEAMENTO DAS VARIÁVEIS
    a -> função de ordenação
    b -> vetor a ser ordenado
    c -> subfunção que encontra o menor valor no restante do valor
    d -> parametro da subfunção (vetor)
    e -> parametro da subfunção
    f -> valor inicial igual a e, posição do menor valor no subvetor
    g -> contador do for da subfunção, começa no e + 1 e vai até o penúltimo valor de d
    h -> contador do for da posição principal, inicia em 0 e vai até a penúltima posição
    i - o resultado da chamada à subfunção c (menor do resto do vetor)

*/

const a = (b, fnComp) => {
    const c = (d, e) => {
        let f = e
        //for(let g = e + 1; g < d.length; g++) if(d[g] < d[f]) f = g
        for(let g = e + 1; g < d.length; g++) if(fnComp(d[f], d[g])) f = g
        return f
    }
    for(let h = 0; h < b.length - 1; h++) {
        let i = c(b, h + 1)
        //if(b[h] > b[i]) [b[h], b[i]] = [b[i], b[h]]
        if(fnComp(b[h], b[i])) [b[h], b[i]] = [b[i], b[h]]
    }
}

import { candidatos } from './includes/candidatos-2018.mjs'

a(candidatos, (a, b) => {
    if(a.SG_UE === b.SG_UE) {
        return a.NR_CANDIDATO > b.NR_CANDIDATO
    }
    else return a.SG_UE > b.SG_UE
})
console.log(candidatos)