import axios from "axios";

import { Path, useForm, UseFormRegister } from "react-hook-form";

interface FormValues {
  skill: string;
}

type InputProps = {
  label: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  required: boolean;
};

const Input = ({ label, register, required }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
};

const AddSkill = () => {
  const { register, handleSubmit, resetField } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    const { skill } = data;
    axios
      .post("http://localhost:5000/api/skill", { name: skill })
      .then((result) => {
        console.log(result);
        resetField("skill");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Ajouter un skill</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="skill" register={register} required />
        <br />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default AddSkill;
