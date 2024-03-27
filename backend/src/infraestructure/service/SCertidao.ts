import { Injectable } from "@nestjs/common";
import { RCertidao } from "../repository/RCertidao";
import { CertidaoDto } from "../pipes/dto/certidaoDto";
import { ICertidao } from "../interface/DCertidao";

@Injectable()
export class SCertidao{

    constructor(private repository : RCertidao){}

    insert(data: CertidaoDto): Promise<ICertidao>{
        return this.repository.insert(data);
    }

    findAll(): Promise<ICertidao[]>{
        return this.repository.findAll();
    }

    findById(id: string): Promise<void>{
        return this.repository.findById(id);
    }

    update(data: CertidaoDto): Promise<ICertidao>{
        return this.repository.update(data)
    }

    delete(id: string): Promise<void>{
        return this.repository.deleteById(id);
    }
}