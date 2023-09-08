import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NewrelicInterceptor } from './new-relic.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { ObjectIdPipe } from '../../../common/customPipe/ObjectIdPipe';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PRODUCT_PACKAGE_NAME } from './proto/product';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new NewrelicInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({ transform: true, whitelist: true }),
    new ObjectIdPipe(),
  );

  // const microservice =
  //   await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //     transport: Transport.GRPC,
  //     options: {
  //       package: 'product',
  //       protoPath: join(__dirname, 'proto/product.proto'),
  //       url: '0.0.0.0:3001',
  //     },
  //   });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: PRODUCT_PACKAGE_NAME,
      protoPath: join(__dirname, '/proto/product.proto'),
      url: '0.0.0.0:3001',
    },
  });

  await app.startAllMicroservices();
  await app.listen(Number(process.env.PORT));
}

bootstrap();
