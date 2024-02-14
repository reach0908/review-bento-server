import { Module, NestModule, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// config 선언부
import { ConfigModule, ConfigService } from '@nestjs/config';
// 모듈 선언부
import { BentosModule } from './bentos/bentos.module';
// mongoose 선언부
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { APP_PIPE } from '@nestjs/core';
import { BentoReviewsModule } from './bento-reviews/bento-reviews.module';
import { ApplicationsModule } from './applications/applications.module';
import { ApplicationReviewsModule } from './application-reviews/application-reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    BentosModule,
    BentoReviewsModule,
    ApplicationsModule,
    ApplicationReviewsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean =
    process.env.MODE === 'development' ? true : false;
  configure() {
    this.isDev && mongoose.set('debug', true);
  }
}
