import { Document, Types } from "mongoose"

export interface IUsuario extends Document{
    readonly funcionario_id: Types.ObjectId
    readonly email: string
    readonly senha: string
    readonly nivelAcesso: string
}