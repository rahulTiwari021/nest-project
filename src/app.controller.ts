import { Controller, Get, Header, Param, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getCars/:id')
  getCarsByIndex(@Param('id') id, @Query() query, @Req() req): string | Array<string> {
    console.log('id ---->', id);
    console.log('name ----> ', query.name);
    console.log('lname ----> ', query.lname)
    return this.appService.getCars(parseInt(id));
  }

  @Get('asyncCars')
  async getAllCars() {
    return this.appService.getCars().toString();
  }
}
