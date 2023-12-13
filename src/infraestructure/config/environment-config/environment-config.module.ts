import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';

@Module({
  imports: [],
  providers: [EnvironmentConfigService],
  exports: []
})
export class EnvironmentConfigModule {}
