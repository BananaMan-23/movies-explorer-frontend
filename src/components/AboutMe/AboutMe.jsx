import { Link } from "react-router-dom";
import "./AboutMe.css";
// import photo from "../../images/pic-my.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info-container">
        <div className="about-me__info">
          <p className="about-me__name">Андрей</p>
          <p className="about-me__about">Фронтенд-разработчик</p>
          <p className="about-me__description">
           я родился в городе шахты, но большую часть жизни прожил в краснодарском крае
           сейчас я обучаюсь в ШАДИ ЮРГПУ(ФИЛИАЛ) НПИ по специальности информационные системы и технологии
           мне нравится программировать и IT сфера в целом. нравится тем что постоянно появляется что то новое
           и приходится изучать и обновлять свои знания, мне нравится сам процесс изучения.
           на данный момент активно ищу работу в IT сфере чтобы набраться опыта и стать профессионалом в этой сфере
          </p>
          <Link
            className="about-me__link"
            to="https://github.com/BananaMan-23"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
        {/* <img className="about-me__photo" src={photo} alt="student"></img> */}
      </div>
    </section>
  );
};

export default AboutMe;
