import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser();

export const xmlParser = (xml: string) => {
    try {
        return parser.parse(xml);
    } catch (error) {
        	throw new Error('XML inválido, verifique seu arquivo');
    }
}
