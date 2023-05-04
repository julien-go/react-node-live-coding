import axios from "axios";
import styles from "./AddWilder.module.css";

import { Path, useForm, UseFormRegister } from "react-hook-form";

interface AddWilderProps {
  refresh: () => void;
}

interface FormValues {
  name: string;
  city: string;
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

const AddWilder = ({ refresh }: AddWilderProps) => {
  const { register, handleSubmit, resetField } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    const { name, city } = data;
    axios
      .post("http://localhost:5000/api/wilder/create", { name, city })
      .then((result) => {
        console.log(result);
        resetField("name");
        resetField("city");
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input label="name" register={register} required />
      <br />
      <Input label="city" register={register} required={false} />
      <br />
      <button type="submit">Add Wilder</button>
    </form>
  );
};

export default AddWilder;
