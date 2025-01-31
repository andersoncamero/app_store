import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private config_service: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apikey = this.config_service.apiKey;
    const data_name = this.config_service.database;
    console.log(apikey);
    console.log(data_name);
    return 'Hello World!';
  }
}
