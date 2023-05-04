import Wilder from "../../components/Wilder/Wilder";
import AddWilder from "../../components/AddWilder/AddWilder";
import styles from "./Home.module.css";
import { WilderType } from "../../types/WilderType";
import AddSkill from "../../components/AddSkill/AddSkill";
import { SkillType } from "../../types/SkillType";

interface HomeProps {
  wildersData: WilderType[];
  skillsData: SkillType[];
  fetchData: () => void;
}

const Home = ({ wildersData, skillsData, fetchData }: HomeProps) => {
  return (
    <main className={styles.main}>
      <h2>Wilders</h2>
      <section className={styles.card_row}>
        {wildersData.map((wilder, i) => (
          <Wilder
            key={i}
            id={wilder.id}
            name={wilder.name}
            city={wilder.city}
            skills={wilder.skills}
            skillsData={skillsData}
            refresh={fetchData}
          />
        ))}
      </section>
      <section className={styles.container}>
        <h2>Ajouter un wilder</h2>
        <AddWilder refresh={fetchData} />
      </section>
      <section className={styles.container}>
        <AddSkill />
      </section>
    </main>
  );
};

export default Home;
