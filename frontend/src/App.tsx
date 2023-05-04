import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import { WilderType } from "./types/WilderType";
import { SkillType } from "./types/SkillType";

const App = () => {
  const [wildersData, setWildersData] = useState<WilderType[]>([]);
  const [skillsData, setSkillsData] = useState<SkillType[]>([]);

  const fetchData = async () => {
    const wilders = await axios.get("http://localhost:5000/api/wilder");
    setWildersData(wilders.data);
    console.log(wilders.data);
  };

  const fetchSkills = async () => {
    const skills = await axios.get("http://localhost:5000/api/skill");
    setSkillsData(skills.data);
    console.log(skills.data);
  };

  useEffect(() => {
    fetchData();
    fetchSkills();
  }, []);

  return (
    <div className="App">
      <Header />
      <Home
        wildersData={wildersData}
        skillsData={skillsData}
        fetchData={fetchData}
      />
      <Footer />
    </div>
  );
};

export default App;
