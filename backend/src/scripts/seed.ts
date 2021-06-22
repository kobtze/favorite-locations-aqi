// scripts/seed.ts
import { createConnection, ConnectionOptions } from 'typeorm';
import { configService } from '../config/config.service';
import { CityService } from '../city/city.service';
import { City } from '../model/city.entity';
import { cities } from '../city/cities.mock'

async function run() {

  const opt = {
    ...configService.getTypeOrmConfig(),
    debug: true
  };

  const connection = await createConnection(opt as ConnectionOptions);
  const cityService = new CityService(connection.getRepository(City));

  const work = cities.map( async el => {
        let newEl = {...el, isPopular : Math.random() > 0.9};
        await cityService.create(newEl)
    })

  Promise.all(work)
}

run()
  .then(_ => console.log('...wait for script to exit'))
  .catch(error => console.error('seed error', error));