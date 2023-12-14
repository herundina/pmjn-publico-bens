import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './infraestructure/config/environment-config/environment-config.module';
import { TypeormModule } from './infraestructure/config/typeorm/typeorm.module';
import { PessoaRepositoryModule } from './infraestructure/repository/pessoa.repository.module';

@Module({
  imports: [EnvironmentConfigModule, TypeormModule, PessoaRepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}