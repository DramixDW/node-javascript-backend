import { readdir } from "fs/promises";

readdir('./', {
    withFileTypes: true,
}).then(dirents => {
    const filteredDirents = dirents.filter(dirent => dirent.isDirectory());
    console.log(filteredDirents.map(dirent => dirent.name));
})

