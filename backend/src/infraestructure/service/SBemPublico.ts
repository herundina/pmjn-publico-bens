import { Injectable } from "@nestjs/common";
import { RBemPublico } from "../repository/RBemPublico";
import { IBemPublico } from "../interface/DBemPublico";
import { BemPublicoDto } from "../pipes/dto/bemPublicoDto";

@Injectable()
export class SBemPublico {

    constructor(
        private readonly repository : RBemPublico
    ){}

    insert(data : BemPublicoDto) : Promise<IBemPublico>{
        return this.repository.insert(data);
    }

    findAll(): Promise<IBemPublico[]>{
        return this.repository.findAll();
    }

    findById(id: string) : Promise<void>{
        return this.repository.findById(id);
    }

    update(data: BemPublicoDto): Promise<IBemPublico>{
        return this.repository.update(data);
    }

    delete(id : string): Promise<void>{
        return this.repository.deleteById(id)
    }
}