import { HttpModule } from "@nestjs/axios/dist/http.module";
import { Global, Module } from "@nestjs/common";

import { ConfigModule, ConfigService} from "@nestjs/config";

@Global()
@Module({
  imports: [HttpModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      baseURL: configService.get('FIDI_LANA_BASE_URL'),
      timeout: 10000
    }),
    inject: [ConfigService],
  })],
  exports: [HttpModule],
})
export class LanaHttpModule {}