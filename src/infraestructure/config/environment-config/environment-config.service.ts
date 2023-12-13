import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataBaseCondif } from 'src/domain/db/dbConfig';

@Injectable()
export class EnvironmentConfigService implements DataBaseCondif{

    constructor(private configService : ConfigService){}

    getDataBaseHost(): string {
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
        return this.configService.get<string>('DATABASE_NAME');
    }
    getDataBaseSchema(): string {
        return this.configService.get<string>('DATABASE_SCHEMA');
    }
    getDataBasesSync(): boolean {
        return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
    }
}