import { SkillType } from "../../types/SkillType";
import { useState } from "react";
import axios from "axios";
interface AddGradeProps {
  id: number;
  skillsData: SkillType[];
  refresh: () => void;
  showAddGradeHandler: () => void;
}

const AddGrade = ({
  id,
  skillsData,
  refresh,
  showAddGradeHandler,
}: AddGradeProps) => {
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [chosenSkill, setChosenSkill] = useState<string>(skillsData[0].name);
  const [chosenGrade, setChosenGrade] = useState<number>(grades[0]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/grade", {
            wilderId: id,
            skill: chosenSkill,
            grade: chosenGrade,
          })
          .then((result) => {
            console.log(result);
            refresh();
            showAddGradeHandler();
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <label htmlFor="skill">Skill</label>
      <select
        name="skill"
        id="skill"
        value={chosenSkill}
        onChange={(e) => setChosenSkill(e.target.value)}
      >
        {skillsData.map((skill, i) => (
          <option key={i} value={skill.name}>
            {skill.name}
          </option>
        ))}
      </select>
      <label htmlFor="grade">Grade</label>
      <select
        name="grade"
        id="grade"
        value={chosenGrade}
        onChange={(e) => setChosenGrade(parseInt(e.target.value))}
      >
        {grades.map((grade, i) => (
          <option key={i} value={grade}>
            {grade}
          </option>
        ))}
      </select>
      <button type="submit">Validate</button>
    </form>
  );
};

export default AddGrade;
