import './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="main-navbar">
            <Link to="/" href="/"><Logo/></Link>
            <Link to="/" className="logo-text" href="/">DS Delivery</Link>
        </nav>
    );
}

export default NavBar;