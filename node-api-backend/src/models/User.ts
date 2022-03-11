import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity(`user`)
export default class User {
  @PrimaryGeneratedColumn(`increment`)
  id?: number;

  @Column()
  login: string;

  @Column()
  password: string;

}