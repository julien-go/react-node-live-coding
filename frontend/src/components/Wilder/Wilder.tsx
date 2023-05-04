import avatar from "../../assets/avatar.png";
import Skill from "../Skill/Skill";
import styles from "./Wilder.module.css";
import DeleteWilder from "../DeleteWilder/DeleteWilder";
import { useState } from "react";
import UpdateWilder from "../UpdateWilder/UpdateWilder";
import { SkillType } from "../../types/SkillType";
import AddGrade from "../AddGrade/AddGrade";

interface WilderProps {
  name: string;
  city?: string;
  skills: Array<{ title: string; grade: number }>;
  id: number;
  refresh: () => void;
  skillsData: SkillType[];
}

const Wilder = ({
  name,
  city,
  skills,
  id,
  refresh,
  skillsData,
}: WilderProps) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAddGrade, setShowAddGrade] = useState(false);

  const showUpdateHandler = () => {
    setShowUpdate(!showUpdate);
  };

  const showAddGradeHandler = () => {
    setShowAddGrade(!showAddGrade);
  };

  return (
    <article className={styles.card}>
      <img src={avatar} alt={`${name}'s avatar`} />
      <h3>{name}</h3>
      {city && <p>City: {city}</p>}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
        {skills.map((skill, i) => (
          <Skill key={i} name={skill.title} grade={skill.grade} />
        ))}
      </ul>
      <div className={styles.container}>
        <button onClick={(e) => showUpdateHandler()}>Update</button>
        <button onClick={(e) => showAddGradeHandler()}>Add grade</button>
        <DeleteWilder id={id} refresh={refresh} />
      </div>
      {showUpdate && (
        <UpdateWilder
          id={id}
          name={name}
          city={city}
          refresh={refresh}
          showUpdateHandler={showUpdateHandler}
        />
      )}
      {showAddGrade && (
        <AddGrade
          id={id}
          skillsData={skillsData}
          refresh={refresh}
          showAddGradeHandler={showAddGradeHandler}
        />
      )}
    </article>
  );
};

export default Wilder;
