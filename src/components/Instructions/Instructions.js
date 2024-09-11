import React from "react";
import emoji from "./emoji1.webp";
import "./Instrucions.css";
export default function Instructions () {
 
    return (
      <div className="instruction1">
        {" "}
        <img src={emoji} alt="يوجد مشكلة في الصورة" />
        <p className="emoheader">Click on emoji to view it's short name</p>
      </div>
    );
  
}
