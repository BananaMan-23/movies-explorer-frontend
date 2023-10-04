import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__about">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__about">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__list-progress">
        <li className="about-project__item-progress">
          <p className="about-project__about-progress">1 неделя</p>
          <p className="about-project__part-progress">Back-end</p>
        </li>
        <li className="about-project__item-progress">
          <p className="about-project__about-progress about-project__about-progress_part_front">
            4 недели
          </p>
          <p className="about-project__part-progress">Front-end</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;
