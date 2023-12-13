import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmModuleOptions =
(config : EnvironmentConfigService) : TypeOrmModuleOptions =>
    ({
        type: 'postgres',
        host: config.getDataBaseHost(),
        port: config.getDataBasePort(),
        username: config.getDataBasesUserName(),
        password: config.getDataBasePassword(),
        schema: config.getDataBaseSchema(),
        database: config.getDataBasesName(),
        synchronize: false,
        ssl:{
            rejectUnauthorized: false
        }
        
    } as TypeOrmModuleOptions)

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [EnvironmentConfigService],//importa o arquivo de configuração
            inject: [EnvironmentConfigService],//injeta ele
            useFactory: getTypeOrmModuleOptions //usa as opções const acima
        })
    ],
    providers: [],
    exports: []
})
export class TypeormModule {}
