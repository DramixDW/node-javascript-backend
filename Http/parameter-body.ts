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
    console.log(`${request.method}: request for ${request.url}`);
    const urlObject = new URL(request.url!, "http://localhost:8001");

    console.log(urlObject);
    console.log(urlObject.searchParams.get('banane'));
    console.log(urlObject.searchParams.get('cerise'));
    console.log(urlObject.searchParams.getAll('cerise'));


    if (request.method === "POST") {
        const body = await readBodyAndParseAsJson(request);
        console.log(body);
    }
    
    response.end();
})

server.listen(8001, () => {
    console.log("Prêt et à l'écoute :D !");
})