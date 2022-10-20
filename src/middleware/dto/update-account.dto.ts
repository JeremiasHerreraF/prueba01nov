import { PartialType } from '@nestjs/mapped-types';
import { CreateMiddlewareDto } from './access.dto';

export class UpdateMiddlewareDto extends PartialType(CreateMiddlewareDto) {}
