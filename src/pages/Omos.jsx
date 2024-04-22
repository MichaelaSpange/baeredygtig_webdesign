import omos_hero from './img_pages/omos_hero.png'
import bølge_m_skygge from './img_pages/bølge_m_skygge.png'
import omos_img from './img_pages/omos_img.svg'
import jessica from './img_pages/jessica.svg'
import Emma from './img_pages/emma.svg'
import Nikoline from './img_pages/nikoline.svg'
import Michaela from './img_pages/michaela.svg'


export default function Omos(){
    return (
<>
      <div id='omos_hero' className='hero_section' style={{backgroundImage: `url(${omos_hero})`, height: "800px", backgroundSize: "cover"}}>
      <h1>Om os</h1>
    </div>

<section className='podcast_section' style= {{backgroundImage: `url(${bølge_m_skygge})`, height: "1200px"}}>


<div className='podcast_div'>
  <img src={omos_img} alt="" />
</div>

<div className='podcast_div'>
  <h2>Hvem er vi?</h2>
  <br />
  <p> Re_Agency er et nyopstartet webbureau, der er klar til at hjælpe dig med både nye og eksisterende digitale løsninger. 
    <br /><br />
    Vi er et lille bureau, der består af fire kreative hjerner, som har studeret sammen og herefter fundet en passion for at skabe digitale løsninger, hvor der er fokus på bæredygtige tiltag. Det var ud fra et projekt på vores uddannelse, at vi endte med at starte Re_Agency. 

</p>

</div>



</section>

<section className='moed_os'>
<div id='Michaela' className="service_bobbel_right">
        <img src={Michaela} alt="Guides"/>
        <h2>Michaela</h2>
        <h3>MARKETING SPECIALIST <br />
       Hun udvikler og implementerer marketingstrategier for at fremme produkter eller tjenester. Hun er en haj til markedsanalyse, kampagneplanlægning og til brug af forskellige kanaler som sociale medier og digital annoncering. </h3>
      </div>

      <div id='Emma' className="service_bobbel">
        <img src={Nikoline} alt="Visuel identitet"/>
        <h2>Emma</h2>
        <h3>UX DESIGNER <br />
        Hun skaber intuitive og behagelige brugeroplevelser på digitale platforme som websites og apps. Hun er i tæt samarbejde med vores webudvikler Nikoline, for at implementere design og løbende optimere baseret på brugernes feedback.
 </h3>
      </div>

      <div id='Nikoline' className="service_bobbel_right">
        <img src={Emma} alt="Workshops"/>
        <h2>Nikoline</h2>
        <h3>WEBUDVIKLER <br />
        Hun skaber softwareløsninger i  HTML, CSS og JavaScript. Hun står for at designe, implementerer og teste hjemmesider og webapplikationer for at sikre funktionalitet og ydeevne. Hun er selvfølgelig også opdateret indenfor de nyeste trends og teknologier inden for webudvikling.</h3>
      </div>

      <div id='Jessica' className="service_bobbel">
        <img src={jessica} alt="Optimering"/>
        <h2>Jessica</h2>
        <h3>WEBUDVIKLER <br />
        Hun producere og administrerer digitalt indhold til websites og sociale medier. Hun er en haj til at anvende strategier som søgemaskineoptimering og dataanalyse for at tiltrække og fastholde målgruppen.
</h3>
      </div>

      </section>

<section className='omos'>
<div  className="service_bobbel_midt">
        <h5 id='mission'>Vores mission</h5>
        <p>“Det er vigtigt for os at formidle bæredygtigt webdesign, både hvordan det kan implementeres og hvorfor det er vigtigt at have fokus på.”
<br /><br />
Dette er vores mission. Selvom vi er et lille bureau ønsker vi at være med til at sætte bæredygtighed indenfor den digitale verden på dagsordenen, så det er noget, som flere vil have fokus på i fremtiden.
<br /><br />
Vores vision er derfor, at vi ønsker at bidrage til et øget kendskab omkring internettets Co2-aftryk og hjælpe virksomheder med at gøre deres digitale løsninger mindre miljøbelastende.
</p>
      </div>
</section>

</>
    )
  }