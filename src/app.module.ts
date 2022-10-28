import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareModule } from './middleware/middleware.module';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LanaHttpModule } from './accounts/tpp/lana.tpp';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    {
      ...JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: process.env.JWT_EXPIRES_IN,
            audience: process.env.JWT_AUDIENCE,
          },
        }),
      }),
      global: true,
    },
    LanaHttpModule,
    MiddlewareModule, AuthModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
