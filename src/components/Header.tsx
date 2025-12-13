import {Link} from 'react-router-dom';


function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    home
                </Link>
                <Link to="/country/usa">
                    country usa
                </Link>
            </div>
        </header>
    );
}

export default Header;