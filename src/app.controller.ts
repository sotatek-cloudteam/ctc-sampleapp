import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  getHealth(): any {
    return {
      status: 200,
      message: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
