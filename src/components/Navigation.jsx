import {Link} from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul class="columns">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Discover Aritsts</Link></li>
                <li><Link to="/">Forums</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;