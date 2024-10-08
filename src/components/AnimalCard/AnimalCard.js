import React from "react";
import "./AnimalCard.css";
function AnimalCard({ name, sname, size, diet,additional,additional2 }) {
  return (
    <div className="container">
      <div>{name}</div>
      <div>{sname}</div>
      <div>{size}</div>
      <div>{diet}</div>
      <button onClick={() => alert(additional +"\n"+ additional2 )}>More Info</button>
    </div>
  );
}
export default AnimalCard;
