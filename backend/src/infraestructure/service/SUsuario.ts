import { Injectable } from "@nestjs/common";
import { RUsuario } from "../repository/RUsuario";
import { UsuarioDto } from "../pipes/dto/usuarioDto";
import { IUsuario } from "../interface/DUsuario";

@Injectable()
export class SUsuario{

    constructor(private readonly repository : RUsuario){}

    insert(usuario : UsuarioDto) : Promise<IUsuario>{
        return this.repository.insert(usuario);
    }

    findAll(): Promise<IUsuario[]>{
        return this.repository.findAll();
    }

    findById(id: string): Promise<void>{
        return this.repository.findById(id);
    }

    update(data : UsuarioDto): Promise<IUsuario>{
        return this.repository.update(data);
    }

    delete(id: string): Promise<void>{
        return this.repository.deleteById(id);
    }
}