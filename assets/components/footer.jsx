import React from 'react'
import '../../public/styles/footer.css'
import ig from '../../public/img/instagram.svg'
import fb from '../../public/img/facebook.svg'
import ld from '../../public/img/linkedin.svg'
import ws from '../../public/img/whatsapp.svg'
import visa from '../../public/img/visa.svg'
import bz from '../../public/img/bizum.svg'

export default function Footer() {
  return (
    <div className="footer">
       <div className='containerFooter'>
            <div className='column1'>
            <h5>Sobre Nosotras</h5>
            <p>Lorem ipsum dolor sit amet. Vel rerum possimus qui dolor numquam et rerum commodi. Ut nihil ullam ut eaque neque et totam provident qui</p>
            </div>
            <div className='column2'>
                <div className='iconos'>
                <h5>Síguenos</h5>
                    <a href='https://www.instagram.com'>
                        <img src={ig}/>
                    </a>
                    <a href='https://www.facebook.com'>
                        <img src={fb}/>
                    </a>
                    <a href='https://www.linkedin.com'>
                        <img src={ld}/>
                    </a>
                    <a href='https://www.whatsapp.com'>
                        <img src={ws}/>
                    </a>
                <h5>Métodos de pago</h5>
                    <img src={visa}/>
                    <img src={bz}/>
                </div>
            </div>
       </div>
       <div className="copyright">
            <small>Copyright © 2022 Plantae. 
             Todos los derechos reservados.</small>
        </div>
    </div>
  )
}
