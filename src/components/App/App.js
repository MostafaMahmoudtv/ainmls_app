import React from "react";
import "./App.css";
import data from "./data";
import AnimalCard from "../AnimalCard/AnimalCard";
function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map((animal) => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          sname={animal.scientificName}
          size={animal.size}
          diet={animal.diet}
          additional={animal.additional.notes}
          additional2={animal.additional.link}
        />
      ))}
    </div>
  );
}

export default App;
