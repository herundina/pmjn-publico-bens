import { Schema } from "mongoose";
import { IBemPublico } from "../interface/DBemPublico";


export const BemPublicoSchema = new Schema<IBemPublico>({
    tipoBem: {type: String, required: true, nullable: false},
    glebas:  [{type: String, required: true, nullable: false}],
    endereco: {
        logradouro: {type: String, required: true, nullable: false},
        bairro: {type: String, required: true, nullable: false},
        numero: {type: String, required: true, nullable: false},
        complemento: {type: String, required: true, nullable: false}
    },
    limites:{
        norte: {type: Number, required: true, nullable: false},
        sul:{type: Number, required: true, nullable: false},
        leste:{type: Number, required: true, nullable: false},
        oeste:{type: Number, required: true, nullable: false},
    },
    municipio: {type: String, required: true, nullable: false},
    areaComprimento: {type: Number, required: true, nullable: false},
    areaLargura: {type: Number, required: true, nullable: false},
    latitude: {type: Number, required: true, nullable: false},
    longetude: {type: Number, required: true, nullable: false},
},{
    timestamps:{
        createdAt:'crtAt',
        updatedAt: 'uptAt'
    },
    versionKey: '__v'
})