import './styles.css';
import {ReactComponent as Youtube} from './Youtube.svg';
import {ReactComponent as Linkedin} from './Linkedin.svg';
import {ReactComponent as Instagram} from './Instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            Acesse as nossas redes sociais e saiba mais sobre a gente
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="_new">
                    <Youtube/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <Instagram/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;