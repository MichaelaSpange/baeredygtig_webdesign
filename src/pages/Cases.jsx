import casesimg from './img_pages/casesimg.png'
import case_section from './img_pages/hoej_section.png'
import wedo1 from './img_pages/wedo1.png'
import wedo2 from './img_pages/wedo2.png'
import wedo3 from './img_pages/wedo3.png'
import Bynadiaspange1 from './img_pages/Bynadiaspange1.png'
import Bynadiaspange2 from './img_pages/Bynadiaspange2.png'
import Bynadiaspange3 from './img_pages/Bynadiaspange3.png'
import Nippon1 from './img_pages/Nippon1.png'
import Nippon2 from './img_pages/Nippon2.png'
import Nippon3 from './img_pages/Nippon3.png'

export default function Cases(){
  return (
    <>
      <div className='hero_section' style={{backgroundImage: `url(${casesimg})`, height: "800px", backgroundSize: "cover"}}>
        <h1>Cases</h1>
      </div>

      <section className='case_section_cases' style={{backgroundImage: `url(${case_section})`, backgroundSize: "cover"}}>
        <h2>We do vintage</h2>

        <div className='case_img_wrapper'>
          <img src={wedo1} alt="" />
          <img src={wedo2} alt="" />
          <img src={wedo3} alt="" />
        </div>

        <p>Hos We Do Vintage fik vi stillet opgaven at optimere deres hjemmeside og lave en rebranding, så det visuelle i højere grad ville afspejle deres identitet og værdier. Der er derfor blevet lagt vægt på at skabe en hjemmeside, hvor der er fokus på produkterne, men også den community, som We Do Vintage har.
      <br />
      <br />

        We Do Vintage siger: “Samarbejdet med Re_Agency var virkelig fedt! De lyttede til mine ønsker og skabte en hjemmeside, der passer perfekt til We Do Vintages visuelle verden”.</p>

      </section>

      <section className='case_section_cases'>
        <h2 id='moerk_case_h2'>Nippon</h2>

        <div className='case_img_wrapper'>
          <img src={Nippon1} alt="" />
          <img src={Nippon2} alt="" />
          <img src={Nippon3} alt="" />
        </div>

        <p id='mork_case_p'>Nippon, som er nyopstartet virksomhed, der sælger japanske måltidskasse, ønskede hjælp til at skabe en visuel identitet og en hjemmeside. De ønskede at designet af visuel identitet og hjemmesiden, skulle skabe en rolig stemning med fokus på den japanske kultur. 
<br />
<br />
Nippon siger: “Vi har fået et rigtigt godt produkt fra Re_Agency, som vi er rigtig tilfredse med. Hele processen har været god og vi har også lært en masse om hvordan vi kan inddrage bæredygtighed på vores digitale tilstedeværelser”.</p>

      </section>

      <section className='case_section_cases' style={{backgroundImage: `url(${case_section})`, backgroundSize: "cover"}}>
        <h2>ByNadiaSpange</h2>

        <div className='case_img_wrapper'>
          <img src={Bynadiaspange1} alt="" />
          <img src={Bynadiaspange2} alt="" />
          <img src={Bynadiaspange3} alt="" />
        </div>

        <p>ByNadiaSpange er en lille selvstændig virksomhed, der drives af Nadia som er pilatesinstruktør. Hun ville gerne have hjælp til visuel identitet, markedsføring på sociale medier og en hjemmeside. Hun ønskede at vi skulle lægge vægt på at skabe et design, der ville skabe en rolig stemning. 
<br />
<br />
Nadia siger: “Jeg er virkelig tilfreds med den hjælp og de produkter jeg har fået fra Re_Agency. De har virkelig lyttet til mine ønsker og lavet noget, der passer perfekt til mit univers.”.</p>

      </section>
    </>
  )
}