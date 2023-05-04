import { SkillType } from "../../types/SkillType";
import { forwardRef } from "react";
import axios from "axios";

import { useForm, UseFormRegister } from "react-hook-form";

interface AddGradeProps {
  id: number;
  skillsData: SkillType[];
  refresh: () => void;
  showAddGradeHandler: () => void;
}

interface FormValues {
  skill: string;
  grade: number;
}

const Select = forwardRef<
  HTMLSelectElement,
  { label: string; options: any[] } & ReturnType<UseFormRegister<FormValues>>
>(({ onChange, name, label, options }, ref) => (
  <>
    <label htmlFor={name}>{label}</label>
    <select name={name} id={name} onChange={onChange} ref={ref}>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  </>
));

const AddGrade = ({
  id,
  skillsData,
  refresh,
  showAddGradeHandler,
}: AddGradeProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const skills = skillsData.map((skill) => skill.name);

  const onSubmit = (data: FormValues) => {
    const { skill, grade } = data;
    axios
      .post("http://localhost:5000/api/grade", {
        wilderId: id,
        skill: skill,
        grade: grade,
      })
      .then((result) => {
        console.log(result);
        refresh();
        showAddGradeHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select label="skill" {...register("skill")} options={skills} />

      <Select label="grade" {...register("grade")} options={grades} />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddGrade;
