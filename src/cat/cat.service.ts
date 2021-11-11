import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';

@Injectable()
export class CatService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll() {
        return this.cats;
    }
}
