import {Link} from "react-router-dom";
import {useState} from 'react';
import "./../css/Navigation.css";

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [downArrow, setDownArrow] = useState('true');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setDownArrow(!downArrow);
    };

    return (
        <nav id="main-nav">
            <a onClick={toggleMenu} id="toggle-nav" href="#">
                {downArrow ? (<p>&darr;</p>) : (<p>&uarr;</p>)}
            </a>
            <ul className={menuOpen ? "columns" : "hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/discover-artists">Discover Aritsts</Link></li>
                <li><Link to="/forums">Forums</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;