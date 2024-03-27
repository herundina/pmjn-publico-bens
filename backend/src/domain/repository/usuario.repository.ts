import { UsuarioDto } from "src/infraestructure/pipes/dto/usuarioDto";
import { IUsuario } from "src/infraestructure/interface/DUsuario";

export interface UsuarioDomain{
    insert(usuario : UsuarioDto ): Promise<IUsuario>;
    findAll(): Promise<IUsuario[]>;
    findById(id: string): Promise<void>;
    update(pessoa: UsuarioDto): Promise<IUsuario>;
    deleteById(id: string): Promise<void>;
}