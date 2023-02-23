let capital = 1000;
let taxa_fixa = 0.125;
let tempo = 5;
let montante = capital * Math.pow(1 + taxa_fixa, tempo);
console.log(montante);