import { readFile, xmlParser, nfeBuilder } from "./utils";

const xmlFile = readFile('./exemplo.xml')
const xml = xmlParser(xmlFile)
const nfe = nfeBuilder(xml)

console.log(nfe);
