import React, {useState} from "react";
import "../../public/styles/catalogo.css"
import Car from '../../public/img/carro.svg'

// import { Link } from "react-scroll"

export default function Card(props) {
  const [flippedClass, setFlippedClass] = useState('');

  return (
    <div className="Cards"> 
      <div className={`CardsInner ${flippedClass}`}>
        {/* Tarjeta Front */}
        <div className="CardsFace CardsFaceFront">
          <div className="CardsHeader">
            <img src={props.card.img} alt="" className="ImagenEspecie" />
            <h2>{props.card.nombre}</h2>
            <p>{props.card.precio}</p>
            <div
              className="BotonMas"
              onClick={() => {
                setFlippedClass("is-flipped");
              }}
            >
              <button className="Btn5">Ver Mas</button>
            </div>
          </div>
        </div>
        {/* Tarjeta back */}
        <div className="CardsFace CardsFaceBack">
          <div className="CardsBody">
          <span className="Equis" onClick={() => {
                setFlippedClass("");
              }}>x</span>
            <p>{props.card.texto}</p>
          </div>
          <div className="BotonBack">
          <a href="#"><img src={ Car } alt="" className="Car"/></a>          </div>
        </div>
      </div>
    </div>
  );
}