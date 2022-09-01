// Carne - 400 gr por pessoa  + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Regrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML =  `<p>${qdtTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000) } Refrigerantes de 2 Litros</p>`

}

// carnePP carne por pessoa
function carnePP(duracao) {
    let carne = 400;
    if(duracao >=6){
        return  650;
    }else {
        return  400;
    }
}
// cervejaPP cerveja por pessoa
function cervejaPP(duracao) {
    let carne = 400;
    if(duracao >=6){
        return  2000;
    }else {
        return  1200;
    }
}
// bebidasPP bebidas por pessoa
function bebidasPP(duracao) {
    if(duracao >=6){
        return  1500;
    }else {
        return  1000;
    }
}