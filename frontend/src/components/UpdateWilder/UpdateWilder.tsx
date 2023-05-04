import axios from "axios";

import { Path, useForm, UseFormRegister } from "react-hook-form";

interface UpdateWilderProps {
  id: number;
  name: string;
  city?: string;
  refresh: () => void;
  showUpdateHandler: () => void;
}

interface FormValues {
  name: string;
  city: string;
}

type InputProps = {
  label: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  required: boolean;
  defaultValue?: string;
};

const Input = ({ label, register, required, defaultValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} defaultValue={defaultValue} />
    </>
  );
};

const UpdateWilder = ({
  id,
  name,
  city,
  refresh,
  showUpdateHandler,
}: UpdateWilderProps) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    const { name, city } = data;
    axios
      .put("http://localhost:5000/api/wilder/update", {
        id,
        name,
        city: city ? city : "",
      })
      .then((result) => {
        console.log(result);
        refresh();
        showUpdateHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="name" register={register} required defaultValue={name} />
      <br />
      <Input
        label="city"
        register={register}
        required={false}
        defaultValue={city}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default UpdateWilder;
