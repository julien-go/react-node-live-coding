import axios from "axios";
import { useState } from "react";
import styles from "./AddWilder.module.css";
import PropTypes from "prop-types";

const AddWilder = ({ refresh }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

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

AddWilder.propTypes = {
  refresh: PropTypes.func.isRequired,
};

export default AddWilder;
