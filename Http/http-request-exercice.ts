/**
 * Faites une requête à l'API Triptyk afin de récupérer
 *  tous les posts de l'API "triptyk-api-dev.triptyk.eu/api/v1/posts"
 *   💡 Utilisez JSON.parse pour parser le résultat de l'API.
 * Ensuite afficher les titres de chacun de ces posts dans un tableau.
 */


fetch('https://triptyk-api-dev.triptyk.eu/api/v1/posts', {
    method: 'GET',
}).then(response => {
    response.text().then(stringResponse => {
        const responseAsJson = JSON.parse(stringResponse) as {
            data: Array<{
                attributes: {
                    title: string;
                }
            }>
        };
        console.log(responseAsJson.data.map(entity => entity.attributes.title));
    })
})