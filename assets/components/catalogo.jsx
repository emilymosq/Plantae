import React from "react";
import Card from "./card";
import "../../public/styles/catalogo.css"
import Cards from "../db.json"

export default function Catalogo() {

  return (
  <div className="Principal">
    <div className="Catalogo">
    {Cards.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  </div>
  );
}



