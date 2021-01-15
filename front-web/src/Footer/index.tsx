import './styles.css';
import {ReactComponent as GitHub} from './GitHub.svg';
import {ReactComponent as Linkedin} from './Linkedin.svg';
import {ReactComponent as Instagram} from './Instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            Acesse as nossas redes sociais e saiba mais sobre a gente
            <div className="footer-icons">
                <a href="https://github.com/pablodeyvid11" target="_new">
                    <GitHub/>
                </a>
                <a href="https://www.linkedin.com/in/pablo-deyvid-de-paiva-7a59261a1/" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/pablo_deyvid/" target="_new">
                    <Instagram/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;