import { Schema } from "mongoose"
import { ICertidao } from "../interface/DCertidao"


export const CertidaoSchema = new Schema<ICertidao>({

    bemPublico_id: {type: Schema.Types.ObjectId, required: true, unique: true, nullabel: false },
    matricula:  {type: String, required: true, nullabel: false, unique: true},
    cartorio:   {type: String, required: true, nullabel: false, unique: false},
    livro: {type: String, required: true, nullabel: false, unique: false},
    ficha: {type: String, required: true, nullabel: false, unique: false},

},{
    timestamps:{
        createdAt: 'crtAt',
        updatedAt: 'updAt'
    },
    versionKey: '__v'
})