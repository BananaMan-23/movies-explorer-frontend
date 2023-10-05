import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <Link className="portfolio__link" to="https://github.com/BananaMan-23/how-to-learn" target="_blank" rel="noreferrer">
                        <p className="portfolio__name">Статичный сайт</p>
                        <p className="portfolio__arrow">↗</p>
                    </Link>
                </li>
                <li className="portfolio__item">
                    <Link className="portfolio__link" to="https://github.com/BananaMan-23/russian-travel" target="_blank" rel="noreferrer">
                        <p className="portfolio__name">Адаптивный сайт</p>
                        <p className="portfolio__arrow">↗</p>
                    </Link>
                </li>
                <li className="portfolio__item">
                    <Link className="portfolio__link" to="https://bananaman-23.github.io/mesto/" target="_blank" rel="noreferrer">
                        <p className="portfolio__name">Одностраничное приложение</p>
                        <p className="portfolio__arrow">↗</p>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;