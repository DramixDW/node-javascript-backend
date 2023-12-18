/**
 * 📌 Faire un serveur qui sert les fichiers image,css et js dans le dossier public/
 * 📌 Le fichier index.html sera le point d'entrée de votre application et vous confirmera que tout fonctionne.
 * 📌 Si l'url que vous tentez d'accéder n'existe pas elle devra renvoyer une page 404 NOT FOUND (avec le code d'erreur 404)
 * 📌 Si une erreur s'est produite, afficher une page d'erreur.
 */

import { readFile } from "fs/promises";
import http from "http";

const imageTypes = ['jpg', 'jpeg', 'png', 'bmp'];

const extensionToContentType: Record<string, string> = {
    css: 'text/css',
    js: "application/javascript",
}

const server = http.createServer(async (request, response) => {
    let contentType;
    let output;
    let statusCode = 200;

    const extension = request.url?.split('.').pop()!;
    
    try {
        if (request.url === '/') {
            output = await readFile('./index.html');
            contentType = 'text/html';
        } else if (imageTypes.includes(extension)) {
            output = await readFile(`.${request.url}`);
            contentType = 'image/' + extension;
        } else if (extensionToContentType[extension] !== undefined) {
            output = await readFile(`.${request.url}`);
            contentType = extensionToContentType[extension];
        } else {
            output = `NOT FOUND`;
            contentType = "text/plain";
            statusCode = 404;
        }
    } catch(e) {
        statusCode = 500,
        contentType = "text/plain"
        output = 'Internal server error'
    }

    response.writeHead(statusCode, {
        "Content-type": contentType,
    })

    response.end(output);
});

server.listen(8001, () => {
    console.log("prêt et à l'écoute sur le port 8001");
})