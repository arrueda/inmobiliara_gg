import React from 'react'
import iconoWA from '../Image/icono_wa.png'
import { Link } from 'react-router-dom'
import './IconWhatsApp.css'

const IconWhatsApp = () => {
  return (
    <div className="whatsapp_icon">
    <Link target="_blank" to="https://wa.me/1144444785?text=Hola...%20Gustavo,%20estoy%20interesado%20en%20un%20inmueble.">
      <img src={iconoWA} alt="Icono de WhatsApps" class="img-fluid" />
    </Link>
  </div>
  )
}

export default IconWhatsApp