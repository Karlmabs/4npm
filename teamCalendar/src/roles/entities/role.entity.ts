import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../../users/entities/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  constructor(name: string) {
    this.name = name;
  }
}
