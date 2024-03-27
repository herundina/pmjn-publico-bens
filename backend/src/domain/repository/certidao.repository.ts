import { CertidaoDto } from "src/infraestructure/pipes/dto/certidaoDto";
import { ICertidao } from "src/infraestructure/interface/DCertidao";


export interface certidaoDomain{
    insert (certidao : CertidaoDto): Promise<ICertidao>;
    findAll():Promise<ICertidao[]>;
    findById(id : String): Promise<void>;
    update(data: CertidaoDto ): Promise<ICertidao>;
    deleteById(id: string): Promise<void>;
}