import { Global, Module } from '@nestjs/common';

import { MiddlewareService } from './middleware.service';
import { MiddlewareController } from './middleware.controller';

@Global()
@Module({
  controllers: [MiddlewareController],
  providers: [MiddlewareService]
})
export class MiddlewareModule {}
