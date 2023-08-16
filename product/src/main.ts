import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NewrelicInterceptor } from './new-relic.interceptor';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ObjectIdPipe } from './common/customPipe/ObjectIdPipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new NewrelicInterceptor());
  await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'product',
      protoPath: join(__dirname, 'proto/product.proto'),
      url: '0.0.0.0:40000',
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, whitelist: true }),
    new ObjectIdPipe(),
  );
  app.useGlobalPipes();
  await app.listen(Number(process.env.PORT));
}
bootstrap();
