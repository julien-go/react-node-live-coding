import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Grade } from "./Grade";

@ObjectType()
@Entity()
export class Wilder {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar?: string;

  @Field(() => [Grade])
  @OneToMany(() => Grade, (grade) => grade.wilder, { cascade: true })
  grades: Grade[];
}
