/*
Transformer cette image de chat.
Elle devra faire 200X200 pixel,
être tourné de 270 degrés
et toutes les couleurs remplacés par du gris
*/

const { Image } = require('image-js');

async function transformCat() {
  const image = await Image.load('cat.png');
  const transformedCat = image.grey().resize({
    height: 200,
    width: 200,
  }).rotate(270)
  return transformedCat.save('new-cat.png')
}

transformCat();


Image.load('cat.png').then((image) => {
    const transformedCat = image.grey().resize({
        height: 200,
        width: 200,
      }).rotate(270)
    transformedCat.save('new-cat-promise.png').then(() => console.log("saved"));
})