import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../model/city.entity';
import { Repository } from 'typeorm';

interface newCity {
    name: string;
    lon: number;
    lat: number;
    isPopular: boolean;
}

@Injectable()
export class CityService {
  constructor(@InjectRepository(City) private readonly repo: Repository<City>) { }

  public async getAll() {
    return await this.repo.find( {where: { isPopular: true } } );
  }

  public async create(city: newCity) {
    this.repo.create(city);
    return await this.repo.insert(city)
  }
}