import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/users.entity';

const entities = [User];

@Module({
  controllers:[AppController],
  providers:[AppService],
  imports:[
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type:"postgres",
      host: "172.17.0.2",
      port: 5432,
      username: "myusername",
      password: "mypassword",
      database: "notes",
      entities: entities,
      synchronize: false,
    })],
})
export class AppModule {}
