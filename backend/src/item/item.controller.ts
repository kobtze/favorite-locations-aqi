import { Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) { }

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }
  
  @Post()
  public async create(item) {
    return await this.serv.create(item);
  }
}