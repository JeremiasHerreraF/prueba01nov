import { Global, Module } from '@nestjs/common';

import { MiddlewareService } from './middleware.service';

@Global()
@Module({
  controllers: [],
  providers: [MiddlewareService]
})
export class MiddlewareModule {}
