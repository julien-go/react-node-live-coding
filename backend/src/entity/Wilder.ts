import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Grade } from "./Grade";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  avatar?: string;

  @OneToMany(() => Grade, (grade) => grade.wilder, { cascade: true })
  grades: Grade[];
}
