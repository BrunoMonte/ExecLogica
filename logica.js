let homem1 = 70
let homem2 = 60
let mulher1 = 50
let mulher2 = 30
if(homem1 > homem2 && mulher1 < mulher2){
    soma = homem1 + mulher1
    produto = homem2 * mulher2
    console.log('A soma do homem mais velho com a mulher mais nova  é de '+soma+', o produto homem mais novo com a mulher mais velha é de '+produto+'')
}else if(homem1 > homem2 && mulher2 < mulher1){
    soma = homem1 + mulher2
    produto = homem2 * mulher1
    console.log('A soma do homem mais velho com a mulher mais nova  é de '+soma+', o produto homem mais novo com a mulher mais velha é de '+produto+'')
}else if(homem2 > homem1 && mulher1 < mulher2){
    soma = homem2 + mulher1
    produto = homem1 * mulher2
    console.log('A soma do homem mais velho com a mulher mais nova  é de '+soma+', o produto homem mais novo com a mulher mais velha é de '+produto+'')
}else if(homem2 > homem1 && mulher2 < mulher1){
    soma = homem2 + mulher2
    produto = homem1 * mulher1
    console.log('A soma do homem mais velho com a mulher mais nova  é de '+soma+', o produto homem mais novo com a mulher mais velha é de '+produto+'')
}
