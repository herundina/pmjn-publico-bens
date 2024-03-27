import { Inject, Injectable } from "@nestjs/common";
import { PastaDomain } from "src/domain/repository/pasta.repository";
import { PastaDto } from "../pipes/dto/pastaDto";
import { IPasta } from "../interface/DPasta";
import { Model } from "mongoose";
import { createTracing } from "trace_events";

@Injectable()
export class RPasta implements PastaDomain{

    constructor(
        @Inject('PASTA_MODEL')
        private pasta : Model<IPasta>
    ){}

    async insert(pasta: PastaDto): Promise<IPasta> {
        const create = new this.pasta(pasta);
        return await create.save();
    }
    
    async findAll(): Promise<IPasta[]> {
        return await this.pasta.find({});
    }

    async findById(id: string): Promise<void> {
        return await this.pasta.findById({_id: id});
    }

    async update(data: PastaDto): Promise<IPasta> {
        return await this.pasta.findByIdAndUpdate({_id : data._id},{
            $set:{                
                pasta: data.pasta
            }
        })
    }

    async deleteById(id: string): Promise<void> {
        return await this.pasta.findByIdAndDelete({_id : id})
    }

}