/*
    Créez un petit serveur 
    qui répondra à la route GET /users (qui affichera tous les users sous format JSON)
        - Si on rajoute un query param id (ex: ?id=5) => on ne voit que les infos du user avec l'id 5
    qui répondra à la route POST /users (qui permet insérer un user dans notre fichier json)
*/

import { readFile, writeFile } from "fs/promises";
import http from "http";

function readBodyAndParseAsJson(request: http.IncomingMessage) {
    return new Promise((resolve, reject) => {
        let output = '';
        
        request.once('error', (err) => {
            reject(err);
        })

        request.on('data', (data) => {
            output += data.toString();
        });
        
        request.once('end', () => {
            const body = JSON.parse(output);
            resolve(body);
        })
    })
}


const server = http.createServer(async (request, response) => {
    const urlObject = new URL(request.url!, "http://localhost:8001");

    if (urlObject.pathname === "/users") {
        const users:  Array<{
                id: number,
                firstName: string,
                lastName: string,
                password: string,
            }>
        = JSON.parse(await readFile('./users.json', 'utf-8'));
        if (request.method === "GET") {
            response.writeHead(200, {
                "Content-type": "application/json",
            });
            const id = urlObject.searchParams.get('id');
            if (id) {
                const filteredUsers = users.filter(user => user.id === Number(id));
                return response.end(JSON.stringify(filteredUsers));
            }
            response.end(JSON.stringify(users));
        }
        
        if (request.method === "POST") {
            const body = await readBodyAndParseAsJson(request) as {
                firstName: string,
                lastName: string,
                password: string,
            };
            const newUser ={
                id: users.length + 1,
                ...body
            };
            users.push(newUser);
            await writeFile('./users.json', JSON.stringify(users));

            response.writeHead(200, {
                "content-type": "application/json",
            })
            response.end(JSON.stringify(newUser));
        }
    }

});


server.listen(8001, () => {
    console.log("ready, listening on port 8001");
})

