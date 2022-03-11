import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity(`folder`)
export default class Folder {
  @PrimaryGeneratedColumn(`increment`)
  id?: number;

  @Column()
  name: string;

  @Column()
  about: string;

  @OneToMany(() => Image, image => image.folder, {
    cascade: ['update', 'insert'] })
  @JoinColumn({ name: 'folder_id' })
  images: Image[]

}