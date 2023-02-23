let montante = 90000;
let capital_inicial = 60000;
let meses = 24;
let taxa = Math.pow(montante / capital_inicial, 1 / meses) - 1;
console.log(`O seu financimanto de ${capital_inicial} reais teve uma taxa de juros de ${taxa} %, pois após ${meses} meses você teve que pagar ${montante} reais.`);