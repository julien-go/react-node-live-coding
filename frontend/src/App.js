import styles from'./App.module.css';
import Wilder from './components/Wilder/Wilder';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

	const [wildersData, setWildersData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const wilders = await axios.get('http://localhost:5000/api/wilder');
			setWildersData(wilders.data);
      console.log(wilders.data)
		}
		fetchData();
	}, []);

  return (
    <div className="App">
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Wilders Book </h1>
        </div>
        
      </header>
      <main className={styles.body}>
      <h2>Wilders</h2>
        <section className={styles.card_row}>
          {wildersData.map((wilder, i) => <Wilder key={i} name={wilder.name} city={wilder.city} skills={wilder.skills}/> )}
        </section>

      </main>
      <footer>
        <div className={styles.container}>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
