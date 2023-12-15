import { createReadStream } from "fs";


const readStream = createReadStream("./lorem.txt", {
    highWaterMark: 128000,
    encoding: 'utf8',
});

readStream.on('data', (dataChunk) => {
    console.log(`Je lis actuellement ${dataChunk.length} octets`);
    console.log(dataChunk.toString());
})

readStream.on('end', () => {
    console.log('Travail terminé');
})

