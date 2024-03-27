/*
import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { DataSource } from 'typeorm';
import { BemPublicoEntity } from 'src/infraestructure/entity/bemPublico.entity';
import { CertidaoEntity } from 'src/infraestructure/entity/certidao.entity';
import { FuncionarioEntity } from 'src/infraestructure/entity/funcionario.entity';
import { PastaArquivoEntity } from 'src/infraestructure/entity/pasta.entity';
import { PessoaEntity } from 'src/infraestructure/entity/pessoa.entity';
import { UsuarioEntity } from 'src/infraestructure/entity/usuario.entity';

export const getTypeOrmModuleOptions = 
(config : EnvironmentConfigService) : TypeOrmModuleOptions =>
    ({
        type: 'mongodb',
        host: config.getDataBaseHost(),
        port: config.getDataBasePort(),
        database: config.getDataBasesName(),
        entities: [           
            BemPublicoEntity, 
            PessoaEntity,
            FuncionarioEntity,
            PastaArquivoEntity,
            UsuarioEntity,
            CertidaoEntity         
            ],
       // synchronize: true //- reinicia o bd. não pode ser usando no modo produção, perda de dados.    
    } as TypeOrmModuleOptions)
    
    @Module({
        imports: [TypeormModule,
            TypeOrmModule.forRootAsync({
                imports: [EnvironmentConfigModule],//importa o arquivo de configuração
                inject: [EnvironmentConfigService],//injeta ele
                useFactory: getTypeOrmModuleOptions //usa as opções const acima
            })
        ],
        providers: [],
        exports: []
    })
export class TypeormModule {}
*/