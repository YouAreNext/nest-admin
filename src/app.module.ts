import { Module } from '@nestjs/common';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import * as typeOrmConfig from './typeorm.config';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
require('dotenv');

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    TodoModule,
    UserModule,
  ],
})
export class AppModule {}
