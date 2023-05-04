import { useState } from "react";
import axios from "axios";

const AddSkill = () => {
  const [skill, setSkill] = useState<string>("");

  return (
    <div>
      <h1>Ajouter un skill</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:5000/api/skill", { name: skill })
            .then((result) => {
              console.log(result);
              setSkill("");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <input
          type="text"
          name="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default AddSkill;
