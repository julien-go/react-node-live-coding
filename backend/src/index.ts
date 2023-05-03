import express from "express";
import dataSource from "./utils";
import cors from "cors";
import WilderController from "./controller/wilder";
import SkillController from "./controller/skill";
import GradeController from "./controller/grade";

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", WilderController.read);
app.post("/api/wilder/create", WilderController.create);
app.put("/api/wilder/update", WilderController.update);
app.delete("/api/wilder/delete/:id", WilderController.delete);

app.get("/api/skill", SkillController.read);
app.post("/api/skill", SkillController.create);
app.put("/api/skill", SkillController.update);
app.delete("/api/skill", SkillController.delete);

app.get("/api/grade", GradeController.read);
app.post("/api/grade", GradeController.create);
app.put("/api/grade", GradeController.update);
app.delete("/api/grade", GradeController.delete);

app.use((req, res, next) => {
  res.status(404).send("Erreur 404: URL not found");
});

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(5000, () => console.log("Server started on 5000"));
};

void start();
