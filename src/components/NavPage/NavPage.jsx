import { Link } from "react-scroll";
import "./NavPage.css";

const NavPage = () => {
  return (
    <section className="nav-page" aria-label="Навигация по странице">
      <nav>
        <ul className="nav-page__list">
          <li>
            <Link className="nav-page__link" to="about-project" smooth={true}>
              О проекте
            </Link>
          </li>
          <li>
            <Link className="nav-page__link" to="techs" smooth={true}>
              Технологии
            </Link>
          </li>
          <li>
            <Link className="nav-page__link" to="about-me" smooth={true}>
              Студент
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavPage;
