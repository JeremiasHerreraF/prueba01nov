import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class MiddlewareService {

  constructor(private readonly httpService: HttpService) { }
  
  async getToken() {
    const token = `${process.env.FIDI_LANA_USERNAME}:${process.env.FIDI_LANA_PASSWORD}`;
    const basicEncoded = Buffer.from(token).toString('base64');
    var config = {
      headers: { 
        'x-api-key': process.env.FIDI_LANA_API_KEY, 
        'Authorization': `Basic ${basicEncoded}`
      }
    };
    return this.httpService.post('v1/Authorizations/login', {}, config).pipe(map(response => response.data),
    );
  }

  getAccount(accessToken: string, documentNumber: string) {
    var config = {
      headers: { 
        'x-api-key': process.env.FIDI_LANA_API_KEY, 
        'Authorization': `Bearer ${accessToken}`
      }
    };
    return this.httpService.post(`v1/accounts/${documentNumber}`, {}, config).pipe(map(response => response.data),
    );
  }

  updateAccount(id: number) {
    return `This action returns a #${id} middleware`;
  }

}

