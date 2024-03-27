
import { funcionarioDto } from "src/infraestructure/pipes/dto/funcionarioDto";
import { IFuncionario } from "src/infraestructure/interface/DFuncionario";

export interface FuncionarioDomain{
    insert(funcionario : funcionarioDto ): Promise<IFuncionario>;
    findAll(): Promise<IFuncionario[]>;    
    findById(id: string): Promise<IFuncionario>;
    update(pessoa: funcionarioDto): Promise<void>;    
    deleById(id: string): Promise<void>;
}