import { Body, Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { certidaoDomain } from "src/domain/repository/certidao.repository";
import { CertidaoDto } from "../pipes/dto/certidaoDto";
import { ICertidao } from "../interface/DCertidao";

@Injectable()
export class RCertidao implements certidaoDomain{
    
    constructor(
        @Inject('CERTIDAO_MODEL')
        private certidao : Model<ICertidao>
    ){}

    async insert(@Body() certidao: CertidaoDto): Promise<ICertidao> {
        const create = new this.certidao(certidao);
        return await create.save();
    }

    async findAll(): Promise<ICertidao[]> {
        return await this.certidao.find({});
    }

    async findById(id: String): Promise<void> {
        return await this.certidao.findById({_id : id});
    }

    async update(@Body() data: CertidaoDto): Promise<ICertidao> {
        return await this.certidao.findByIdAndUpdate({_id: data._id},{
            $set:{
                matricula: data.matricula,
                cartorio: data.cartorio,       
                livro: data.livro,
                ficha: data.ficha                  
            }
        })
    }

    async deleteById(id: string): Promise<void> {
        return await this.certidao.findByIdAndDelete({_id : id});
    }
}