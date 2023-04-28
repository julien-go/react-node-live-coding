import Wilder from '../../components/Wilder/Wilder';
import AddWilder from '../../components/AddWilder/AddWilder';
import styles from'./Home.module.css';

const Home = ({wildersData, fetchData}) => {

	return (
		<main className={styles.main}>
		<h2>Wilders</h2>
        <section className={styles.card_row}>
          {wildersData.map((wilder, i) => 
          <Wilder 
            key={i}
            id={wilder.id} 
            name={wilder.name} 
            city={wilder.city} 
            skills={wilder.skills}
            refresh={fetchData}
            /> 
          )}
        </section>
        <section className={styles.container}>
          <h2>Ajouter un wilder</h2>
          <AddWilder refresh={fetchData}/>
        </section>
		</main>
	)
}

export default Home;