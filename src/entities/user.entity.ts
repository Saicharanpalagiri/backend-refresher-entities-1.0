import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creation: Date = new Date();

  @Column()
  modified: Date = new Date();
}