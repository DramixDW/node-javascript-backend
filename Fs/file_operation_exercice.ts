/*
 
📌Créer un module de log permettant de créer une arborescence de dossiers comme ceci :
📁logs
📁2021
📁03
📁23
📝09.log
📌Créer une fonction permettant d'écrire dans le fichier log pour la journée.
log("Banane") => crée le fichier et/ou l'arborescence si elle n'existe pas et ajoute "Banane" au contenu du fichier
📌Créer une fonction permettant d'effacer les logs de la date actuelle
removeTodayLogs() => au choix, supprime le dossier du jour (23 dans l'exemple) ou supprime le dossier 23 ainsi que son contenu
*/

import { log, removeTodayLogs } from "./logger";

function sleep (ms: number) {
    return new Promise((res, rej) => setTimeout(res, ms));
}

async function main() {
    await log(process.argv.slice(2).join(' '));
    await sleep(2000);
    await removeTodayLogs();
}

main() 