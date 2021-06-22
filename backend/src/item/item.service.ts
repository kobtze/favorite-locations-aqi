import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../model/item.entity';
import { Repository } from 'typeorm';

interface newItem {
    name: string;
    description: string;
    isActive: boolean;
}

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item) private readonly repo: Repository<Item>) { }

  public async getAll() {
    return await this.repo.find();
  }

  public async create(item: newItem) {
    this.repo.create(item);
    return await this.repo.insert(item)
  }
}