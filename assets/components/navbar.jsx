import React from 'react'
import Car from '../../public/img/carro.svg'
import '../../public/styles/navbar.css'
import logo from '../../public/img/logo.svg'

export default function Navbar() {
  return (
    <div className="Navbar">
            <a href="/"><img src={logo} className="Logo"/></a>
            <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/registration" className="Btn">Registro</a></li>
                <li><a href="#"><img src={ Car } alt="" className="Car"/></a></li>
            </ul>
        </div>
  )
}
