import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Grade } from "./Grade";

@ObjectType()
@Entity()
export class Skill {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Grade, (grade) => grade.skill, { cascade: true })
  grades: Grade;
}
