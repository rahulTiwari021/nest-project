import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
    .exclude({ path: 'cat/:id', method: RequestMethod.GET })
    .forRoutes('cat')
    //.forRoutes({ path: 'cats', method: RequestMethod.GET });
    //.forRoutes({ path: 'cats', method: RequestMethod.ALL });
    //.forRoutes(CatController);
  }
}