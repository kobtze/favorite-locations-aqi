import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
    constructor(private serv: CityService) { }

    @Get()
    public async getAll() {
        return await this.serv.getAll()
    }
}
