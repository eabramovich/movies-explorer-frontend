import React from "react";
import "./Promo.css";
import promoLogo from '../../images/text__COLOR_landing-logo.svg';

function Promo() {
    return (
        <section className="section promo">
            <div className="promo__information">
                <h1 className="promo__title">Учебный проект студента факультета<br /> Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже чтобы узнать больше про этот проект и его создателя</p>
                <a className="promo__button" href="#">Узнать больше</a>
            </div>
            <img className="promo__logo" src={promoLogo} alt="Логотип промо блока" />
            
        </section>
    );
}

export default Promo;