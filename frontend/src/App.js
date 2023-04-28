import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
	const [wildersData, setWildersData] = useState([]);

  const fetchData = async () => {
    const wilders = await axios.get('http://localhost:5000/api/wilder');
    setWildersData(wilders.data);
    console.log(wilders.data)
  }

	useEffect(() => {
		fetchData();
	}, []);

  return (
    <div className="App">
      <Header/>
      <Home wildersData={wildersData} fetchData={fetchData}/>
      <Footer/>
    </div>
  );
}

export default App;
