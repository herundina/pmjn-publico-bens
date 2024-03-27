import { Connection } from "mongoose";
import { usuarioSchema } from "../entity/usuario.entity";
import { IUsuario } from "../interface/DUsuario";

export const UsuarioPrivedrs = [
    {
        provide: 'USUARIO_MODEL',
        useFactory: (connection: Connection) => connection.model<IUsuario>('usuario', usuarioSchema),
        inject: ['DATABASE_CONNECTION']
    }
]