import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";

@ObjectType()
@Entity()
export class Grade {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  grade: number;

  @Field(() => Skill)
  @ManyToOne(() => Skill, (skill) => skill.grades, { onDelete: "CASCADE" })
  skill: Skill;

  @Field()
  @ManyToOne(() => Wilder, (wilder) => wilder.grades, { onDelete: "CASCADE" })
  wilder: Wilder;
}
