import { AppController } from './app.controller';
import { MoviesModule } from './movies.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
