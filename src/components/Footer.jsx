import { NavLink } from "react-router-dom";
import linkedinikon from './img_components/linkedinikon.png'
import facebook from './img_components/facebook.png'
import instagram from './img_components/instagram.png'
import tik_tok from './img_components/tik_tok.png'

export default function Footer() {
    return (
        
    
        <footer>
            
            <div className="footer_overskrift">
                <h5>Kontakt</h5>
            </div>

            <section className="to_kolonner">
                <div className="kolonne_left">
                <h4>Re_Agency</h4>
                <br/>
                <ul>
                    <li>Rignvej Syd 104</li>
                    <li>8000 Aarhus C</li>
                    <li>12 34 56 78</li>
                    <li>Reagency@gmail.com</li>
                    <li>CVR: 20 20 20 20</li>
                </ul>
                </div>

                <div className="kolonne_right">
                <h4> Links</h4>
                <br />
                <NavLink to="/Services">Services</NavLink>
                <NavLink to="/Cases">Cases</NavLink>
                <NavLink to="/Omos">Om os</NavLink>
                <NavLink to="/Kontakt">Kontakt</NavLink>
                </div>
            </section>

            <div className="social_ikons">
                <a href="https://www.npmjs.com/package/react-lottie"><img className="some_ikon" src={linkedinikon} alt="linkedin" /></a>
                <a href="https://www.facebook.com"><img className="some_ikon" src={facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/re_agency24/"><img className="some_ikon" src={instagram} alt="instagram" /></a>
                <a href=""><img className="some_ikon" src={tik_tok} alt="tik_tok" /></a>
            </div>
            
        </footer>

        
    );
}