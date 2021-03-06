import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BaseEntity
} from "typeorm";
import * as uuidv4 from 'uuid/v4';
//uuidv4(); // ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn('uuid') id: string;

    @Column('varchar', {length: 255})
    email: string;

    @Column('text')
    password: string;

    @BeforeInsert()
    addId() {
      this.id = uuidv4();
    }
}
