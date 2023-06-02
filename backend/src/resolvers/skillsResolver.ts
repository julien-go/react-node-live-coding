import { Query, Resolver } from "type-graphql";
import { Skill } from "../entity/Skill";
import dataSource from "../utils";

@Resolver(Skill)
export class SkillResolver {
  @Query(() => [Skill])
  async getAllSkills(): Promise<Skill[]> {
    return await dataSource.manager.find(Skill);
  }
}
