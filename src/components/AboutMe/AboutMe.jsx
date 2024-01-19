import React from "react";
import "./AboutMe.css";
import studentPhoto from "./../../images/student_photo.png";

function AboutMe() {
  return (
    <section className="about-me section">
      <h3 className="section-title">Студент</h3>
      <div className="about-me__content">
        <div className="about-me__text-wrapper">
          <div className="about-me__main-information">
            <h2 className="section-caption">Евгения</h2>
            <p className="about-me__subtitle">Фронтенд-разработчик, 33 года</p>
            <p className="about-me__description">
              <p className="about-me__description-item">
                Я родилась в Новочеркасске, там же закончила Южно-Российский
                государственный политехнический университет (НПИ) по
                специальности АСOиУ(Автоматические системы обработки информации
                и управления). Сейчас живу в Санкт-Петербурге.
              </p>
              <p className="about-me__description-item">
                В IT работаю с 2013 года с перерывом на декрет. Последние 4 года
                работаю в консалтинговой компании и занимаюсь поддержкой и
                внедрением SAP.
              </p>
              <p className="about-me__description-item">
                В свободное время занимаюсь йогой и хожу на различные групповые
                занятия в фитнес студию. Люблю слушать подкасты по психологии и
                нейропсихологии.
              </p>
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
