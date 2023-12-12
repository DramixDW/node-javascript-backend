/*
Pour la belgique, la france et l'allemagne,
renvoyer une string formaté "En {{country}}, le taux de TVA est de {{RATE}}%"
*/
const util = require('util');

const countryToVATRate = {
    Belgique: 21,
    France: 20,
    Allemagne: 19,
}

for (const country in countryToVATRate) {
    console.log(util.format("En %s,  le taux de TVA est de %d %", country, countryToVATRate[country]));
}