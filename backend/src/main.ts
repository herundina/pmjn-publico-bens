import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './infraestructure/exception/HttpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
  
  console.log(`Rodando na porta  s ${await app.getUrl()}`)
  //app.useWebSocketAdapter(new WsAdapter(app));
  //ou app.enableCors();
}

bootstrap();