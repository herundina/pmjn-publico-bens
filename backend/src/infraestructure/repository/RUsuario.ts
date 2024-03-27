import { UsuarioDomain } from "src/domain/repository/usuario.repository";
import { UsuarioDto } from "../pipes/dto/usuarioDto";
import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { IUsuario } from "../interface/DUsuario";

@Injectable()
export class RUsuario implements UsuarioDomain{

    constructor (
        @Inject('USUARIO_MODEL')
        private usuario : Model<IUsuario>
    ){}

    async insert(usuario: UsuarioDto): Promise<IUsuario> {
        const create = new this.usuario(usuario);
        return await create.save();
    }

    async findAll(): Promise<IUsuario[]> {
        return await this.usuario.find({});
    }
    
    async findById(id: string): Promise<void> {
       return await this.usuario.findById({_id : id});
    }
   
    async update(data: UsuarioDto): Promise<IUsuario> {
        return await this.usuario.findByIdAndUpdate({_id: data._id},{
            $set:{
                email: data.email,
                senha: data.senha,
                nivelAcesso: data.nivelAcesso
            }
        })
    }

    async deleteById(id: string): Promise<void> {
        return await this.usuario.findByIdAndDelete({_id : id})
    }

}