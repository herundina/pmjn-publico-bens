import { Schema } from "mongoose";
import { IFuncionario } from "../interface/DFuncionario";

export const funcionarioSchema = new Schema<IFuncionario>({

    funcionario: {type: String, unique: false, nullabel: false, required: true},
    cpf: {type: String, unique: false, nullabel: false, min: 11, required: true},
    email: {type: String, unique: false, nullabel: false, required: true},
    matricula: {type: String, unique: false, nullabel: false, min: 5, required: true},
    secretaria: {type: String, unique: false, nullabel: false, required: true},
    setor: {type: String, unique: false, nullabel: false, required: true},

}
,{
    timestamps:{
        createdAt:'crtAt',
        updatedAt: 'uptAt'
    },
    versionKey: '__v'
})