import ContactForm from "../components/ContactForm"
import heroImage from './img_pages/rainbow.png'
import kontakt_img from './img_pages/kontakt_img.png'

export default function Kontakt(){
    return (
    <>
    <div className='hero_section' style={{backgroundImage: `url(${heroImage})`, height: "800px", backgroundSize: "cover"}}>
        <h1>Kontakt</h1>
      </div>

<section id="kontakt_section" className='podcast_section' style= {{backgroundImage: `url(${kontakt_img})`, height: "1200px"}}>

<div className='podcast_div'>
  <h5 id="kontakt">Kontakt</h5>
  <br />
  <p> Mangler du en digital løsning eller har du problemer med en eksisterende digital løsning, så vil vi meget gerne hjælpe dig. 

Du kan udfylde formularen her og så vender vi tilbage hurtigst muligt, så vi sammen kan skabe en digital løsning, der passer til dig og dine behov. 
 


</p>
</div>

<div className='podcast_div'>
<ContactForm></ContactForm>
</div>


</section>


    

    </>
    )
  }