import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { FuncionarioDomain } from "src/domain/repository/funcionario.repository";
import { funcionarioDto } from "../pipes/dto/funcionarioDto";
import { IFuncionario } from "../interface/DFuncionario";

@Injectable()
export class RFuncionario implements FuncionarioDomain {

    constructor(
        @Inject('FUNCIONARIO_MODEL')
        private funcionario : Model<IFuncionario>
    ){}

    async insert(funcionario: funcionarioDto): Promise<IFuncionario> {
        const create = new this.funcionario(funcionario);
        return await create.save();
    }

    async findAll(): Promise<IFuncionario[]> {
        return await this.funcionario.find().exec();
    }
  
    async findById(id: string): Promise<IFuncionario> {
        return await this.funcionario.findById({_id: id})
    }
    
    async update(data: funcionarioDto): Promise<void> {
        return await this.funcionario.findByIdAndUpdate({_id : data._id},{
            $set:{
                funcionario: data.funcionario,
                cpf: data.cpf,
                matricula: data.matricula,
                secretaria: data.secretaria,
                setor: data.setor,
                email: data.email
            }
        });
    }

    async deleById(id: string): Promise<void> {
        return this.funcionario.findByIdAndDelete({_id: id});
    }

}