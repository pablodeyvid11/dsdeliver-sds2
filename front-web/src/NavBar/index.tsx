import './styles.css';
import { ReactComponent as Logo} from './logo.svg';

function NavBar() {
    return (
        <nav className="main-navbar">
            <a href=""><Logo/></a>
            <a className="logo-text" href="home">DS Delivery</a>
        </nav>
    );
}

export default NavBar;