import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataBaseCondif } from 'src/domain/db/dbConfig';

/**
 * arquivo de configuração personalizado
 * export default ()=.({
 * port: parseInt(process.env.DATABASE_PORT) || 3000;
 * database: {
 *  host: process.env.DATABASE_HOST,
 *  port: parseInt(porcess.env.DATABASE_PORT, 10) || 5432;
 *  etc;
 * }
 * })

@Injectable()
export class EnvironmentConfigService implements DataBaseCondif{

    constructor(private configService : ConfigService){}

    getDataBaseHost(): string {
        console.log(this.configService.get<string>('DATABASE_HOST'))
        return this.configService.get<string>('DATABASE_HOST');
    }
    getDataBasesUserName(): string {
        return this.configService.get<string>('DATABASE_USER');
    }
    getDataBasePassword(): string {
        return this.configService.get<string>('DATABASE_PASSWORD');
    }
    getDataBasePort(): number {
        return this.configService.get<number>('DATABASE_PORT')
    }
    getDataBasesName(): string {
        console.log(this.configService.get<string>('DATABASE_NAME'))
        return this.configService.get<string>('DATABASE_NAME');
    }
    getDataBaseSchema(): string {
        return this.configService.get<string>('DATABASE_SCHEMA');
    }
    getDataBasesSync(): boolean {
        return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
    }
}*/