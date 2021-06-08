import React from 'react';
import phone from '../../assets/phone.png';
import menssage from '../../assets/menssage.png';
import email from '../../assets/email.png';
import location from '../../assets/location.png';
import './contact.css';

function Contact() {
  return (
    <>
      <div className="contact">
        <h1 className="contact-title">contacto</h1>
        <div className="contact-sections">
          <div className="contact-sections__phone section">
            <div className="phone-background background">
              <img src={phone} alt="teléfono" />
            </div>
            <p className="contact-sections__title">Llámanos</p>
            <p>923 213 508</p>
          </div>
          <div className="contact-sections__menssage section">
            <div className="menssage-background background">
              <img src={menssage} alt="mensaje" />
            </div>
            <p className="contact-sections__title">Envíanos un mensaje</p>
            <p>666 222 333</p>
          </div>
          <div className="contact-sections__mail section">
            <div className="mail-background background">
              <img src={email} alt="teléfono" />
            </div>
            <p className="contact-sections__title">Envíanos un email</p>
            <p>eduperfer@hotmail.com</p>
          </div>
          <div className="contact-sections__location section">
            <div className="location-background background">
              <img src={location} alt="teléfono" />
            </div>
            <p className="contact-sections__title">Visítanos</p>
            <p className="location-phrase">
              Plaza del Mercado, 1, 37001
              Planta alta – Puesto 58-59.
              De martes a jueves de 8:00 a 15:00
              viernes y sábados de 7:30 a 15:30
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
