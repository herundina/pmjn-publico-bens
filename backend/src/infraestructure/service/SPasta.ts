import { Injectable } from "@nestjs/common";
import { RPasta } from "../repository/RPasta";
import { PastaDto } from "../pipes/dto/pastaDto";
import { IPasta } from "../interface/DPasta";

@Injectable()
export class SPasta{

    constructor(private readonly repository : RPasta){}

    insert(data : PastaDto) : Promise<IPasta>{
        return this.repository.insert(data);
    }

    findAll(): Promise<IPasta[]>{
        return this.repository.findAll();
    }

    findById(id: string): Promise<void>{
        return this.repository.findById(id);
    }

    update(data : PastaDto): Promise<IPasta>{
        return this.repository.update(data);
    }

    delete(id: string): Promise<void>{
        return this.repository.deleteById(id);
    }
}