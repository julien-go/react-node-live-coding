import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  grade: number;

  @ManyToOne(() => Skill, (skill) => skill.grades, { onDelete: "CASCADE" })
  skill: Skill;

  @ManyToOne(() => Wilder, (wilder) => wilder.grades, { onDelete: "CASCADE" })
  wilder: Wilder;
}
