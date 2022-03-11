import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Folder from './Folder';

@Entity(`image`)
export default class Image {

  @PrimaryGeneratedColumn(`increment`)
  id: number;

  @Column()
  path:string;

  @ManyToOne(() => Folder , folder => folder.images)
  @JoinColumn ({name:'folder_id'})
  folder:Folder;
  
}