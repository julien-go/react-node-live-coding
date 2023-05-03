import dataSource from "../utils";
import { Grade } from "../entity/Grade";
import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import { Request, Response } from "express";

const GradeController = {
  create: async (req: Request, res: Response) => {
    try {
      const wilderFromDb = await dataSource
        .getRepository(Wilder)
        .findOneBy({ id: req.body.wilderId });
      console.log(wilderFromDb);
      const skillFromDb = await dataSource
        .getRepository(Skill)
        .findOneBy({ name: req.body.skill });

      if (wilderFromDb == null || skillFromDb == null) {
        res.send("Missing wilder or skill");
      } else {
        await dataSource.getRepository(Grade).save({
          grade: req.body.grade,
          wilder: wilderFromDb,
          skill: skillFromDb,
        });
      }
      res.send("Created");
    } catch (err) {
      console.log(err);
      res.send("Error while creating");
    }
  },

  read: async (req: Request, res: Response) => {
    try {
      const data = await dataSource
        .getRepository(Grade)
        .find({ relations: { wilder: true, skill: true } });
      console.log(data);
      res.send(data);
    } catch (err) {
      console.log(err);
      res.send("Error while reading");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const gradeToUpdate = await dataSource.getRepository(Grade).findOneBy({
        wilder: { id: req.body.wilderId },
        skill: { name: req.body.skill },
      });
      console.log(gradeToUpdate);

      if (gradeToUpdate == null) {
        res.send("Missing wilder or skill");
      } else {
        await dataSource.getRepository(Grade).update(gradeToUpdate.id, {
          skill: gradeToUpdate.skill,
          grade: req.body.grade,
        });
        res.send("Succesfully updated");
      }
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Grade).delete(req.body);
      res.send("Succesfully deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting");
    }
  },
};

export default GradeController;
