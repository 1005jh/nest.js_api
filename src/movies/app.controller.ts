import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('app')
export class AppController {
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
