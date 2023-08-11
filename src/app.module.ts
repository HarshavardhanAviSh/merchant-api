import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Neo4jModule } from 'nest-neo4j/dist';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    Neo4jModule.forRoot({
      scheme:'neo4j',
      host:'df3d5989.databases.neo4j.io',
      port:7687,
      username:'neo4j',
      password:'nHIzv-uhNnzu1_2s3D6gsYAsngi4_xg3g-mZtzVXCzs'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
