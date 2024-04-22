import '../App.css'
import heroImage from './img_pages/rainbow.png'
import guides from './img_pages/guides.png'
import visuel_identitet from './img_pages/visuel_identitet.png'
import workshops from './img_pages/workshops.png'
import optimering from './img_pages/optimering.png'

export default function Services(){
    return (
      <>
      <div className='hero_section' style={{backgroundImage: `url(${heroImage})`, width: "100%", height: "700px", backgroundSize: "cover"}}>
        <h1>Services</h1>
      </div>

      <div className="service_bobbel">
        <img src={guides} alt="Guides"/>
        <h2>Guides</h2>
        <h3>Hos Re_Agency kan du finde en lang række guides, der handler om forskellige emner inden for digitale løsninger og hvordan du kan implementere bæredygtige tiltag i din virksomheds digitale tilstedeværelse.</h3>
      </div>

      <div className="service_bobbel_right">
        <img src={visuel_identitet} alt="Visuel identitet"/>
        <h2>Visuel identitet</h2>
        <h3>Står du og mangler hjælp til at skabe visuel identitet til din virksomhed? Vi kan hjælpe dig med flere forskellige services indenfor visuel identitet, blandt andet logo design, branding og rebranding. </h3>
      </div>

      <div className="service_bobbel">
        <img src={workshops} alt="Workshops"/>
        <h2>Workshops</h2>
        <h3>Re_Agency tilbyder også workshops, hvor du og din virksomhed har mulighed for at deltage og for eksempel lære mere om hvordan man kan inddrage bæredygtige tiltag. Hvis du tænker, at dette kunne være noget for din virksomhed, så tøv ikke med at sende en besked vores vej.</h3>
      </div>

      <div className="service_bobbel_right">
        <img src={optimering} alt="Optimering"/>
        <h2>Optimering</h2>
        <h3>Hvis du ønsker hjælp til optimering af eksisterende løsninger, så kan vi også hjælpe med dette. Det være for eksempel være hjalp til SEO, page load time eller håndtering af filtyper.</h3>
      </div>
      </>
    )
  }