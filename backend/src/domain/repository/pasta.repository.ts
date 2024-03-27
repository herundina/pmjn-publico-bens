import { PastaDto } from "src/infraestructure/pipes/dto/pastaDto";
import { IPasta } from "src/infraestructure/interface/DPasta";


export interface PastaDomain {
    insert(pasta : PastaDto ): Promise<IPasta>;
    findAll(): Promise<IPasta[]>;
    findById(id: string): Promise<void>;
    update(data: PastaDto): Promise<IPasta>;
    deleteById(id: string): Promise<void>;
}