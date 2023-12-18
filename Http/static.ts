import { createReadStream } from "fs";
import { readFile } from "fs/promises";
import http from "http";


// localhost:8001/index.html => renverra le fichier index.html
// localhost:8001/style.css => renverra le fichier css
// localhost:8001/cat.png => renverra l'image de chat
const server = http.createServer(async (request, response) => {
    const extensionToContentType: Record<string, string> = {
        html: 'text/html',
        png: 'image/png',
        css: 'text/css',
    };

    const extension = request.url?.split('.').pop()!;

    if (Object.keys(extensionToContentType).includes(extension) === false) {
        response.writeHead(404, {
            "content-type": "text/html",
        });
        return response.end(`
            <html>
                <head>
                    <title>Page 404</title>
                </head>
                <body>
                    NOT FOUND. 
                </body>
            </html>
        `);
    }

    response.writeHead(200, {
        "Content-type": extensionToContentType[extension],
    })

    // on commence avec un point que le request.url commence par un /
    const fileStream = await readFile(`.${request.url}`);

    response.end(fileStream);
});

server.listen(8001, () => {
    console.log('Je suis prêt à répondre à des requêtes');
});