import { Injectable } from '@nestjs/common';

const CARS = [
  'BMW',
  'Mercedies',
  'Honda',
  'Suzuki'
];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCars(id?: number): string | Array<string> {
    return id ? CARS[id] : CARS;
  }
}
