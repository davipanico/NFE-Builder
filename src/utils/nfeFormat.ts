import INfe from "../interface/nfe.interface";

const getDest = (nfeObj: any) => {
    try {
        return nfeObj.cteProc.CTe.infCte.dest
    } catch (error) {
        throw new Error('Não foi possível obter as informações de destinatário da nfe');
    }
}

export const nfeBuilder = (nfeObj: any): INfe => {
    try {
        let dest = getDest(nfeObj);
        console.log(dest)

        return {
            id: dest.IE,
            uf: dest.enderDest.UF,
            municipio: dest.enderDest.xMun,
            logradouro: dest.enderDest.xLgr,
            bairro: dest.enderDest.xBairro,
            numero: dest.enderDest.nro,
            complemento: dest.enderDest.xCpl ?? '',
            cep: dest.enderDest.CEP
        }
    } catch (error) {
        console.log(error)
        throw new Error('Ocorreu um erro');
    }
}