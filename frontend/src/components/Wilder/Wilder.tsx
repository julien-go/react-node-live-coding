import defaultAvatar from "../../assets/avatar.png";
import Skill from "../Skill/Skill";
import styles from "./Wilder.module.css";
// import DeleteWilder from "../DeleteWilder/DeleteWilder";
import { useState } from "react";
// import UpdateWilder from "../UpdateWilder/UpdateWilder";
import { SkillType } from "../../types/SkillType";
// import AddGrade from "../AddGrade/AddGrade";

interface WilderProps {
  name: string;
  city?: string;
  avatar?: string;
  grades: Array<{ title: string; grade: number }>;
  id: number;
  refresh: () => void;
  skillsData: SkillType[];
}

const Wilder = ({
  name,
  city,
  grades,
  id,
  avatar,
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
      <img
        src={avatar ? `http://localhost:5000/uploads/${avatar}` : defaultAvatar}
        alt={`${name}'s avatar`}
      />
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
        {grades.map((grades, i) => (
          <Skill key={i} name={grades.title} grade={grades.grade} />
        ))}
      </ul>
      {/* <div className={styles.container}>
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
      )} */}
    </article>
  );
};

export default Wilder;
