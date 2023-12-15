import { mkdir, rename, rmdir } from "fs/promises";

const sleep = (ms: number) => new Promise((res, rej) => setTimeout(res, ms));

async function main() {
    await mkdir("cutest-otters");
    console.log("Dossier créé !");

    await sleep(2000);

    await rename("cutest-otters", "prettiest-otters");
    console.log('Dossier renommé')

    await sleep(2000);

    await rename("prettiest-otters", "../prettiest-otters");
    console.log('Dossier déplacé');

    await sleep(2000);

    await rmdir("../prettiest-otters");
    console.log("Dossier supprimé !");
};

main();
