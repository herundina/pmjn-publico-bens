import { Injectable } from "@nestjs/common";
import { funcionarioDto } from "src/infraestructure/pipes/dto/funcionarioDto";
import { RFuncionario } from "src/infraestructure/repository/RFuncionario";
import { IFuncionario } from "../interface/DFuncionario";

//regras de negócio
@Injectable()
export class SFuncionario{
    
    constructor(
       private readonly repository : RFuncionario
    ){}

    insert(data: funcionarioDto): Promise<IFuncionario>{
        return this.repository.insert(data);
    }

    findAll(): Promise<IFuncionario[]>{
        return this.repository.findAll();
    }

    async findById(id: string): Promise<IFuncionario>{
        return await this.repository.findById(id);
    }

    update(data: funcionarioDto): Promise<void>{
        return this.repository.update(data);
    }

    delete(id: string) : Promise<void>{
        return this.repository.deleById(id);
    }

}