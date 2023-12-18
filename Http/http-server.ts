import http from 'http';

const server = http.createServer((request, response) => {
    const html = `
        <html>
            <head>
                <title>Mon premier serveur node</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Lorem Ipsum :)</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue sit amet placerat bibendum. Curabitur ut quam gravida, condimentum dui at, imperdiet ipsum. Mauris dictum finibus orci, quis tristique nisi. Proin sed sagittis orci. Sed leo enim, porttitor sit amet blandit ac, tempor in felis. Phasellus eros dui, vehicula et semper nec, consectetur at lorem. Proin vulputate, leo in volutpat cursus, arcu ante efficitur magna, et tincidunt metus nisi et dolor. Aenean dapibus tristique tellus vitae consectetur. Fusce molestie, dolor placerat gravida finibus, dui felis sodales mauris, sed efficitur dui dolor non tortor. In convallis ante justo, nec viverra lacus scelerisque id.
                </p>
            </body>
        </html>
    `;

    response.writeHead(200, {
        "Content-type": "text/html",
    })

    response.end(html);
})

server.listen(8001, () => {
    console.log('Le serveur est prêt à écouter. Il écoute sur le port 8001 :)');
})