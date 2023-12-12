const generate = require('./generate');
const { toKebab, toVegetarianKebab } = require('./kebab');

generate(42);
console.log(toKebab('Les poissons sont nos amis, on y touche plus !'));
console.log(toVegetarianKebab('J\'aime le jeu super meatboy (: '));