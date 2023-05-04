import axios from "axios";
import { useState } from "react";
import styles from "./AddWilder.module.css";

interface AddWilderProps {
  refresh: () => void;
}

// interface FormValues {
//   name: string;
//   city: string;
// }
// const Input = ({ label, value, onChange }: FormValues) => {
//   return (
//     <>
//       <label>{label}</label>
//     </>
//   );
// };

const AddWilder = ({ refresh }: AddWilderProps) => {
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/wilder/create", { name, city })
          .then((result) => {
            console.log(result);
            setName("");
            setCity("");
            refresh();
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <label htmlFor="name">Name :</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="city">City :</label>
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <button type="submit">Add Wilder</button>
    </form>
  );
};

export default AddWilder;
