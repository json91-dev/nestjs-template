import { Module } from '@nestjs/common';
import { AppModule as V1Module } from './v1/app.module';
import { MainController } from './main.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MainInterceptor } from './interceptor/main.interceptor';

@Module({
  imports: [V1Module],
  controllers: [MainController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MainInterceptor,
    },
  ],
})
export class MainModule {}
