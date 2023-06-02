import "./App.css";

import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import { WilderType } from "./types/WilderType";
import { SkillType } from "./types/SkillType";
import { async } from "q";

const GET_ALL_WILDERS = gql`
  query GetAllWilders {
    getAllWilders {
      id
      name
      avatar
      city
      grades {
        id
        grade
        skill {
          id
          name
        }
      }
    }
  }
`;

const GET_ALL_SKILLS = gql`
  query GetAllSkills {
    getAllSkills {
      id
      name
    }
  }
`;

const App = () => {
  const dataWildersManipulation = (dataFromApi: any) => {
    const newData = dataFromApi.map(
      (wilder: {
        id: number;
        name: string;
        city: string | null;
        avatar: string | null;
        grades: {
          id: number;
          grade: number;
          skill: { id: number; name: string };
        }[];
      }) => {
        return {
          id: wilder.id,
          name: wilder.name,
          city: wilder.city,
          avatar: wilder.avatar,
          grades: wilder.grades.map((grade) => {
            return {
              title: grade.skill.name,
              grade: grade.grade,
            };
          }),
        };
      }
    );
    return newData;
  };

  const dataSkillsManipulation = (dataFromApi: any) => {
    const newData = dataFromApi.map((skill: { id: number; name: string }) => {
      return {
        id: skill.id,
        title: skill.name,
      };
    });
    return newData;
  };
  const fetchData = async () => {};

  const { loading, error, data } = useQuery(GET_ALL_WILDERS);
  const {
    loading: loadingSkills,
    error: errorSkills,
    data: dataSkills,
  } = useQuery(GET_ALL_SKILLS);
  console.log(dataSkills);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <Header />
      <Home
        wildersData={dataWildersManipulation(data.getAllWilders)}
        skillsData={dataSkillsManipulation(dataSkills.getAllSkills)}
        fetchData={fetchData}
      />
      <Footer />
    </div>
  );
};

export default App;
