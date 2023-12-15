import { appendFile, mkdir, opendir, rm, rmdir } from "fs/promises";

function getDirectoryStructureForDate (date: Date) {
    return `logs/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

async function isDirectoryStructureExisting (structure: string): Promise<boolean> {
    try {
        await opendir(structure);
        return true;
    } catch {
        return false;
    }
}

export async function log (message: string) {
    const today = new Date();
    const directoryStructure = getDirectoryStructureForDate(today);

    if (await isDirectoryStructureExisting(directoryStructure) === false) {
        await mkdir(directoryStructure, {
            recursive: true,
        });
    }

    await appendFile(`${directoryStructure}/${today.getHours()}.log`, `${message}\n`);
}

export async function removeTodayLogs() {
    const today = new Date();
    const directoryStructure = getDirectoryStructureForDate(today);
    
    // c'est l'équivalent de rm -rf
    await rm(directoryStructure, { recursive: true, force: true })
}