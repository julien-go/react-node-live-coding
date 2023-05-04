import styles from "./Skill.module.css";

interface SkillProps {
  name: string;
  grade: number;
}

const Skill = ({ name, grade }: SkillProps) => {
  return (
    <li className={styles.skill}>
      {name}
      <span className={styles.votes}>{grade}</span>
    </li>
  );
};

export default Skill;
