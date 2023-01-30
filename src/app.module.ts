//import redisStore from 'cache-manager-redis-store';
import * as redisStore from 'cache-manager-redis-store';
import { Module, CacheModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CacheModule.register({ 
    store: redisStore, 
    host: 'localhost', //default host
    port: 6379 //default port
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}