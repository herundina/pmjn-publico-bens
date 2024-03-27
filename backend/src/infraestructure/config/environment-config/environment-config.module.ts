import { Module } from '@nestjs/common';
//import { EnvironmentConfigService } from './environment-config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath:'.env',
        //isGlobal: true
    })
  ],
  providers: [],
  exports: []
})
export class EnvironmentConfigModule {}
