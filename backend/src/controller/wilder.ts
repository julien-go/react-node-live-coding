import dataSource from "../utils";
import { Wilder } from "../entity/Wilder";
import { Grade } from "../entity/Grade";
import { Request, Response } from "express";

const WilderController = {
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await dataSource.getRepository(Wilder);
      const wilder =
        (await req.body.city) === "" ? { name: req.body.name } : req.body;
      console.log(wilder);
      await data.save(wilder);
      res.send("Created");
    } catch (err) {
      console.log(err);
      res.send("Error while creating");
    }
  },

  read: async (req: Request, res: Response): Promise<void> => {
    try {
      const grades = await dataSource
        .getRepository(Grade)
        .find({ relations: { wilder: true, skill: true } });
      const wilders = await dataSource.getRepository(Wilder).find();
      const data = wilders.map((wilder) => {
        // console.log(wilder);
        const wilderGrades = grades.filter(
          (grade) => grade.wilder.id === wilder.id
        );
        // console.log(wilderGrades);
        const wilderGradesLean = wilderGrades.map((el) => {
          return { title: el.skill.name, grade: el.grade };
        });

        return { ...wilder, skills: wilderGradesLean };
      });
      res.send(data);
    } catch (err) {
      console.log(err);
      res.send("Error while reading");
    }
  },
  update: async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);
    try {
      const data = await dataSource.getRepository(Wilder);
      const modifiedData =
        (await req.body.city) === ""
          ? { name: req.body.name, city: null }
          : { name: req.body.name, city: req.body.city };

      await data.update(req.body.id, modifiedData);
      res.send("Succesfully updated");
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
  delete: async (req: Request, res: Response): Promise<void> => {
    console.log(req.params);

    try {
      await dataSource.getRepository(Wilder).delete(req.params);
      res.send("Succesfully deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting");
    }
  },
};

export default WilderController;
