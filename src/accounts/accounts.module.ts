import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { MiddlewareService } from 'src/middleware/middleware.service';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, MiddlewareService]
})
export class AccountsModule {}
