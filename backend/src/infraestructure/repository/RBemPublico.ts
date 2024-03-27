import { Inject, Injectable } from "@nestjs/common";
import { BemPublicoDomain } from "src/domain/repository/BemPublico.repository";
import { BemPublicoDto } from "../pipes/dto/bemPublicoDto";
import { Model } from "mongoose";
import { IBemPublico } from "../interface/DBemPublico";

@Injectable()
export class RBemPublico implements BemPublicoDomain{

    constructor(
        @Inject('BEMPUBLICO_MODEL')
        private bemPublico : Model<IBemPublico>
    ){}

    async insert(bem: BemPublicoDto): Promise<IBemPublico> {               
        const create = new this.bemPublico(bem)   
        console.log(create)     
        return await create.save();   
    }
    
    async findAll(): Promise<IBemPublico[]> {
        return await this.bemPublico.find({});
    }

    async findById(id: string): Promise<void> {
        return await this.bemPublico.findById({_id: id});
    }

    async update(data: BemPublicoDto): Promise<IBemPublico> {
        return await this.bemPublico.findByIdAndUpdate({_id : data._id},{
            $set:{
                tipoBem: data.tipoBem,             
                glebas: data.glebas,
                'endereco.logradouro': data.endereco.logradouro,
                'endereco.numero': data.endereco.numero,
                'endereco.bairro': data.endereco.bairro,
                'endereco.complemento': data.endereco.complemento,
                limites:{
                    norte:  data.limites.norte,
                    sul: data.limites.sul,
                    leste: data.limites.leste,
                    oeste: data.limites.oeste,
                },
                municipio: data.municipio,               
                areaComprimento: data.areaComprimento,
                areaLargura: data.areaComprimento,
                latitude: data.latitude,
                longetude: data.longetude, 
            }
        })
    }
 
    async deleteById(id: string): Promise<void> {
        return await this.bemPublico.findByIdAndDelete({_id : id})
    }
   
}