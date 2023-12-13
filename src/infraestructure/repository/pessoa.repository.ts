import { promises } from "dns";
import { Pessoa } from "../entity/pessoa.entity";
import { PessoaModelo } from "../model/pessoa.modelo";

export interface PessoaRepository{
    insert(pessoa : PessoaModelo): Promise<void>;
    findAll(): Promise<PessoaModelo[]>;
    findById(id: number): Promise<PessoaModelo>;
    update(id: number, isDone: boolean): Promise<void>;
    deleById(id: number): Promise<void>;
}