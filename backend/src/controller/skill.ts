import dataSource from "../utils";
import { Skill } from "../entity/Skill";
import { Request, Response } from "express";
const SkillController = {
  create: async (req: Request, res: Response) => {
    try {
      const data = await dataSource.getRepository(Skill);
      await data.save(req.body);
      res.send("Created");
    } catch (err) {
      console.log(err);
      res.send("Error while creating");
    }
  },

  read: async (req: Request, res: Response) => {
    try {
      const data = await dataSource.getRepository(Skill).find();
      res.send(data);
    } catch (err) {
      console.log(err);
      res.send("Error while reading");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      await dataSource
        .getRepository(Skill)
        .update(req.body.id, req.body.newData);
      res.send("Succesfully updated");
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Skill).delete(req.body);
      res.send("Succesfully deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting");
    }
  },
};

export default SkillController;
