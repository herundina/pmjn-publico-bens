import { Module } from '@nestjs/common';
import { FuncionarioModule } from './infraestructure/module/funcionario.module';
import { UsuarioModule } from './infraestructure/module/usuario.module';
import { BemPublicoModule } from './infraestructure/module/bemPublico.module';
import { CertidaoModule } from './infraestructure/module/certidao.module';
import { HttpExceptionFilter } from './infraestructure/exception/HttpExceptionFilter';

@Module({
  imports: [
    FuncionarioModule,
    UsuarioModule,
    BemPublicoModule,
    CertidaoModule
  ],
  //Injeção de dependencia para o filtro Global HttpExceptionFilter
  providers:[
  ]
})

export class AppModule {}