/**
 * Renvoyer une page html qui affiche 
 * les différents articles sur base d'un fichier JSON
 */

import { readFile } from "fs/promises";
import http from "http";

const server = http.createServer(async (request, response) => {
    const { posts }: {
        posts: Array<{
            title: string,
            content: string,
        }>
    } = JSON.parse(await readFile('./posts.json', 'utf-8'));

    const html = `
        <html>
            <head>
                <title> Mes supers articles pas très à jour</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Articles</h1>
                ${posts.map(post => `<h3>${post.title}</h3><p>${post.content}</p>`).join('\n')}
            </body>
        </html>
    `;

    response.writeHead(200, {
        "Content-type": "text/html",
    })

    response.end(html);
});

server.listen(8001, () => {
    console.log("Je suis prêt à l'écoute sur le port 8001");
})