import { readFile } from "fs/promises";

readFile('./tsconfig.json', 'utf-8').then(file => {
    console.log(file);
})