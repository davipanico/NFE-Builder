import * as fs from 'fs';

export const readFile = (path: string) => {
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (error) {
        throw new Error('Arquivo não encontrado');
    }
}
