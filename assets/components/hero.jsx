import React from 'react'
import hoja from '../../public/img/hoja.png'
import '../../public/styles/hero.css'
import { Link } from "react-scroll"

export default function Hero() {
  return (
    <div className="Hero">
        <div className="Container">
            <div className="ContainerLeft">
                <h1>Crea tu jardín en casa con un click</h1>
                <div className="Button">
                    <Link to="Catalogo"
                    className="Btn2"
                    smooth={true}
                    duration={1800}>Ver más</Link>
                </div>
            </div>
            <div className="ContainerRight">
                <img src={ hoja } alt=""/>
            </div>
        </div>
    </div>
  )
}
