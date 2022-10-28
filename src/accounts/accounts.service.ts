import { Injectable } from '@nestjs/common';
import { MiddlewareService } from 'src/middleware/middleware.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {

  constructor(private readonly middlewareService: MiddlewareService) { }
  
  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  async findAll() {
    try {
      return await this.middlewareService.getToken();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      const auth = await this.middlewareService.getToken();
      console.log(typeof auth);
      console.log(auth);
      return auth;
      //const account =  await this.middlewareService.getAccount(auth.accessToken, id);
    } catch (error) {
      return error;
    }
  }
  
  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
