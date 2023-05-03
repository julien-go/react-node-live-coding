import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Grade } from "./Grade";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @OneToMany(() => Grade, (grade) => grade.skill, { cascade: true })
  grades: Grade;
}
