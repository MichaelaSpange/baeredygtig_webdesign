import { Routes, Route, Navigate } from "react-router-dom";
import Nav from './components/Nav';
import Services from "./pages/Services";
import Kontakt from "./pages/Kontakt";
import Omos from "./pages/Omos";
import Cases from "./pages/Cases";
import Forside from "./pages/Forside";
import nav_logo from "./assets/logo-kopi.svg"
import './App.css'
import Footer from "./components/Footer";


function App() {
 

  return (
    <>
    <div id="logo_nav_container">
    <a href="/App.jsx"><img id="logo_nav" src={nav_logo} alt="logo" style={{height: "120px"}} /></a>
    </div> 
      
      <Nav/>

      <main>
                <Routes>
                <Route path="/" element={<Forside />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Kontakt" element={<Kontakt />} />
                    <Route path="/Omos" element={<Omos />} />
                    <Route path="/Cases" element={<Cases />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>

            <Footer/>
           
    </>
  )
}

export default App
