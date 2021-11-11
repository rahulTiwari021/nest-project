import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat.interface';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {

    constructor(private catService: CatService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return this.catService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        //return this.catService.findAll();
        //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'Error occured!'
        }, HttpStatus.FORBIDDEN)
    }

    @Get('/:id')
    async getCatByIndex(@Param('id') id: string) {
        console.log('cat id = ', id);
    }
}
