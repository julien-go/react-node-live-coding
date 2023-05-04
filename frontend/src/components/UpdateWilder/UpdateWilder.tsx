import axios from "axios";
import { useState } from "react";

interface UpdateWilderProps {
  id: number;
  name: string;
  city?: string;
  refresh: () => void;
  showUpdateHandler: () => void;
}

const UpdateWilder = ({
  id,
  name,
  city,
  refresh,
  showUpdateHandler,
}: UpdateWilderProps) => {
  const [newName, setNewName] = useState<string>(name);
  const [newCity, setNewCity] = useState<string>(city ? city : "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .put("http://localhost:5000/api/wilder/update", {
            id: id,
            name: newName,
            city: newCity,
          })
          .then((result) => {
            console.log(result);
            refresh();
            showUpdateHandler();
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <button type="submit">Validate</button>
    </form>
  );
};

export default UpdateWilder;
