import { Schema } from "mongoose";
import { IUsuario } from "../interface/DUsuario";

export const usuarioSchema = new Schema<IUsuario>({

    funcionario_id: {type: Schema.Types.ObjectId, ref: 'funcionario', nullabel: false, required: true},
    email: {type: String, unique: true, nullabe: true},
    senha: {type: String, unique: false, nullabe: true},
    nivelAcesso: {type: String, unique: false, nullabe: true},
    
},{
    timestamps:{
        createdAt:'crtAt',
        updatedAt: 'uptAt'
    },
    versionKey: '__v'
})