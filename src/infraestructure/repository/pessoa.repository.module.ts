import { Module } from '@nestjs/common';
import { PessoaRepository } from './pessoa.repository';
import { PessoaModelo } from '../model/pessoa.modelo';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from '../entity/pessoa.entity';

@Module({})
export class PessoaRepositoryModule implements PessoaRepository {

    constructor (
        @InjectRepository(Pessoa)
        private readonly pessoaRepository : Repository<Pessoa>
    ){}

    async insert(pessoa: PessoaModelo): Promise<void> {
      const novo = this.novaPessoa(pessoa);
      await this.pessoaRepository.insert(novo);
    }
    async findAll(): Promise<PessoaModelo[]> {
        const listaPessoa = await this.pessoaRepository.find();
        return  listaPessoa.map((listaPessoa) => this.returnPessoa(listaPessoa));
    }
    findById(id: number): Promise<PessoaModelo> {
        throw new Error('Method not implemented.');
    }
    update(id: number, isDone: boolean): Promise<void> {
        throw new Error('Method not implemented.');
    }
    deleById(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }


    //insert 
    private novaPessoa(pessoa: PessoaModelo) : Pessoa {
        const novo : Pessoa = new Pessoa();

        novo.id = pessoa.id,
        novo.nome = pessoa.nome,
        novo.endereco = pessoa.endereco

        return novo;
    }

    //Update
    private returnPessoa(pessoa : PessoaModelo) : Pessoa{
        const listPessoa : PessoaModelo = new PessoaModelo();

        listPessoa.id = pessoa.id,
        listPessoa.nome = pessoa.nome,
        listPessoa.endereco = pessoa.endereco

        return listPessoa;
    }
}