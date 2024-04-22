import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../../users/entities/user.entity';
import {ActionType} from '../../action-types/entities/action-type.entity';

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.actions)
  user: User;

  @ManyToOne(() => ActionType, (typeAction) => typeAction.actions)
  type: ActionType;

  constructor(date: Date, user: User, type: ActionType) {
    this.date = date;
    this.user = user;
    this.type = type;
  }
}
