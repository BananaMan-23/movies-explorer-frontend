import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <ul className="footer__list">
                <li className="footer__year">© 2023</li>
                <li>
                    <ul className="footer__link-list">
                        <li><Link className="footer__link" to="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</Link></li>
                        <li><Link className="footer__link" to="https://github.com/BananaMan-23" target="_blank" rel="noreferrer">Github</Link></li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;