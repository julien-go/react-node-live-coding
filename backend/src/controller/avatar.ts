import dataSource from "../utils";
import { Wilder } from "../entity/Wilder";
import { Request, Response } from "express";

import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const AvatarController = {
  addAvatar: async (req: Request, res: Response): Promise<void> => {
    if (req.file != null) {
      console.log(req.file);
      const { filename, originalname } = req.file;
      const extension = originalname.split(".").pop();

      const newName =
        extension != null ? `${uuidv4()}.${extension}` : `${uuidv4()}`;

      fs.rename(
        `public/uploads/${filename}`,
        `public/uploads/${newName}`,
        async (err) => {
          if (err != null) throw err;

          try {
            const data = await dataSource
              .getRepository(Wilder)
              .findOneBy({ id: req.body.id });

            if (data == null) {
              res.send("Missing wilder");
            } else {
              const modifiedData = await {
                ...data,
                avatar: `${newName}`,
              };

              await dataSource
                .getRepository(Wilder)
                .update(req.body.id, modifiedData);
              res.send("Succesfully updated");
            }
          } catch (err) {
            console.log(err);
            res.send("Error while updating");
          }
        }
      );
    }
  },
};

export default AvatarController;
