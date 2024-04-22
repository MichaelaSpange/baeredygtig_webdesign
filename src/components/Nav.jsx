import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        
    
        <nav>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/Cases">Cases</NavLink>
            <NavLink to="/Omos">Om os</NavLink>
            <NavLink to="/Kontakt">Kontakt</NavLink>
        </nav>

        
    );
}