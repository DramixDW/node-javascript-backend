// On peut utiliser import malgré qu'on soit dans un fichier.js
// car dans le package.json, on a rajouté la clé "type" avec la valeur: "module"
import totallyNotMyFizzBuzzFunction from './fizzbuzz.js';

totallyNotMyFizzBuzzFunction(15)