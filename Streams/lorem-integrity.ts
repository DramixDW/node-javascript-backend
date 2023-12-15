import { readFile } from "fs/promises";


async function main() {
    const [lorem1, lorem2] = await Promise.all([readFile('lorem.txt', 'utf-8'), readFile('lorem-copy.txt', 'utf-8')]);
    for (let index = 0; index < lorem1.length; index++) {
        if (lorem1.charAt(index) !== lorem2.charAt(index)) {
            console.log(lorem1.charAt(index));
        }
    }

    if (lorem1 === lorem2) {
        console.log('ils sont bien égaux');
    }
}

main();