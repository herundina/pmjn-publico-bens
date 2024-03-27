import { Types, Document } from "mongoose"

export interface ICertidao extends Document{

    readonly bemPublico_id: Types.ObjectId,
    readonly matricula: string,
    readonly cartorio: string,
    readonly livro: string
    readonly ficha: string

}