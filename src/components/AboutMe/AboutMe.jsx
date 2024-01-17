import React from "react";
import "./AboutMe.css";
import studentPhoto from "./../../images/student_photo.png";

function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="section-title">Студент</h3>
      <div className="about-me__content">
        <div className="about-me__text-wrapper">
          <div className="about-me__main-information">
            <h2 className="section-caption">Виталий</h2>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <a className="about-me__repository-link">Github</a>
        </div>

        <img
          className="about-me__student-photo"
          src={studentPhoto}
          alt="Фотография студента"
        />
      </div>
    </section>
  );
}

export default AboutMe;
