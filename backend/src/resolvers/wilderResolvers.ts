import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";

@Resolver(Wilder)
export class WilderResolver {
  @Query(() => [Wilder])
  async getAllWilders(): Promise<Wilder[]> {
    return await dataSource.manager.find(Wilder, {
      relations: {
        grades: {
          wilder: true,
          skill: true,
        },
      },
    });
  }

  // async getWilderById(@Arg("id") id: number): Promise<Wilder | null> {
  //   const wilder = await dataSource.manager.findOne(Wilder, { where: { id } });
  //   if (wilder == null) {
  //     return null;
  //   }
  //   return wilder;
  // }

  @Mutation(() => Wilder)
  async createWilder(
    @Arg("name") name: string
    // @Arg("city") city: string
  ): Promise<Wilder> {
    const newWilder = new Wilder();
    newWilder.name = name;
    // if (city !== null && city !== "") {
    //   newWilder.city = city;
    // }
    return await dataSource.manager.save(Wilder, newWilder);
  }

  // async updateWilder(
  //   @Arg("id") id: number,
  //   @Arg("name") name: string,
  //   @Arg("city") city: string | null
  // ): Promise<Wilder> {
  //   const wilder = await dataSource.manager.getRepository(Wilder).findOne(id);
  //   if (wilder == null) {
  //     throw new Error("Wilder not found!");
  //   }
  //   wilder.name = name;
  //   if (city !== null && city !== "") {
  //     wilder.city = city;
  //   }
  //   return await dataSource.manager.save(Wilder, wilder);
  // }
}
