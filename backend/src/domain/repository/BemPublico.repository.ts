import { BemPublicoDto } from "src/infraestructure/pipes/dto/bemPublicoDto";
import { IBemPublico } from "src/infraestructure/interface/DBemPublico";

export interface BemPublicoDomain {
    insert(usuario : BemPublicoDto ): Promise<IBemPublico>;
    findAll(): Promise<IBemPublico[]>;
    findById(id: string): Promise<void>;
    update(pessoa: BemPublicoDto): Promise<IBemPublico>;
    deleteById(id: string): Promise<void>;
}