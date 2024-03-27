import { Type } from '@nestjs/common'
import {Document, Types} from 'mongoose'

export interface IFuncionario extends Document{

    readonly funcionario: string
    readonly cpf: string
    readonly matricula: string
    readonly secretaria: string
    readonly setor: string
    readonly email: string
}
