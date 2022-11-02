import { Controller } from "@nestjs/common";
import { MiddlewareService } from 'src/middleware/middleware.service';



@Controller('middleware')
export class MiddlewareController {
  constructor(private readonly middlewareServicee: MiddlewareService){}}