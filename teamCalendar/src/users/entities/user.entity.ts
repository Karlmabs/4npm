import {BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {Action} from 'src/actions/entities/action.entity';
import {Role} from '../../roles/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string; // Hashed password

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(() => Action, (action) => action.user)
  actions: Action[];

  constructor(
    name: string,
    mail: string,
    username: string,
    password: string,
    role: Role,
  ) {
    this.name = name;
    this.email = mail;
    this.username = username;
    this.password = password;
    this.role = role;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
