import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Action} from '../../actions/entities/action.entity';

@Entity()
export class ActionType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Action, (action) => action.type)
  actions: Action[];

  constructor(name: string) {
    this.name = name;
  }
}
