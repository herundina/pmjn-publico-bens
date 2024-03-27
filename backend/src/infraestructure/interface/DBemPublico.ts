import { Document } from "mongoose";

export interface IBemPublico extends Document{
    readonly tipoBem: string,
    readonly glebas: string[],
    readonly endereco:{
        logradouro: string,
        numero: string,
        bairro: string,
        complemento: string
    },
    readonly limites:{
        norte:  string,
        sul: string,
        leste: string,
        oeste: string,
    },
    readonly municipio: string,
    readonly areaComprimento: number,
    readonly areaLargura: number,
    readonly latitude: number,
    readonly longetude: number
}