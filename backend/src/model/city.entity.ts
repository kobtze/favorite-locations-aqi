import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'city' })
export class City extends BaseEntity {
  @Column({ type: 'varchar', length: 40 })
  name: string;

  @Column({ type: 'float' })
  lon: number;
  
  @Column({ type: 'float' })
  lat: number;

  @Column({ type: 'boolean', default: false })
  isPopular: boolean;
}
