import { Schema, Types } from "mongoose";
import { IPasta } from "../interface/DPasta";

export const pastaArquivoSchema = new Schema<IPasta>({
    certidao_id: {type: Schema.Types.ObjectId, required: true, unique: true},
    pasta: {type: String, unique: true, notnull: true}
},{
    timestamps:{
        createdAt:'crtAt',
        updatedAt: 'uptAt'
    },
    versionKey: '__v'
})