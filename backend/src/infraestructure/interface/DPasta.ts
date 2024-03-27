import { Document } from "mongodb";
import { Types } from "mongoose";

export interface IPasta extends Document{
    readonly _id: Types.ObjectId
    readonly certidao_id: Types.ObjectId
    readonly pasta: string
}