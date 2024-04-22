
import Lottie from 'lottie-react'
import animationData from '../Re_Agency_animation.json'
import guides from './img_pages/guides.png'
import visuel_identitet from './img_pages/visuel_identitet.png'
import workshops from './img_pages/workshops.png'
import optimering from './img_pages/optimering.png'
import case_section from './img_pages/case_section.png'
import case1 from './img_pages/case1.png'
import case2 from './img_pages/case2.png'
import case3 from './img_pages/case3.png'
import pil_left from './img_pages/pil_left.png'
import pil_right from './img_pages/pil_right.png'
import podcast from './img_pages/podcast.png'
import bølge_m_skygge from './img_pages/bølge_m_skygge.png'
import PriceCalculator from '../components/Prisudregner'




export default function Forside() {
return(
  <>
  <Lottie animationData={animationData} loop={true} style={{
    width: "90%", 
   
  }}/>

<section className='services_m_overskrift'>
  <h2>Services</h2>

  <div className='services_row'>
    <div className='service_div'>
      <img src={guides} alt="Guides" />
      <p> Hos os kan du få nogle guides til hvordan du kan implementere bæredygtige tiltag i virksomheds digitale tilstedeværelse. 
 
      </p>
    </div>

    <div className='service_div'>
      <img src={visuel_identitet} alt="Visuel Identitet" />
      <p>Vi kan hjælpe dig med flere forskellige services indenfor visuel identitet, blandt andet logo design, branding og rebranding. 
      </p>
    </div>

    <div className='service_div'>
      <img src={workshops} alt="Workshops" />
      <p>Vi tilbyder workshops, hvor du og din virksomhed har mulighed for at deltage og lære mere om hvordan man kan inddrage bæredygtige tiltag </p>
    </div>

    <div className='service_div'>
      <img src={optimering} alt="Optimering" />
      <p>Optimering af eksisterende løsninger kan vi også hjælpe dig med, hvis du for eksempel har en hjemmeside, der trænger til at blive optimeret. 
      </p>
    </div>
  </div>

</section >

<section className='case_section' style={{backgroundImage: `url(${case_section})`}}>
  <h2>Cases</h2>

  <div className='case_wrapper'>
  <img className='hide_on_mobile'  src={pil_left} alt="Venstrepil" />

    <div className='case_div'>
      <img src={case1} alt="" />
      <button>Se mere</button>
    </div>

    <div  className='case_div'>
      <img className='hide_on_mobile' src={case2} alt="" />
      <button className='hide_on_mobile'>Se mere</button>
    </div>

    <div className='case_div'>
      <img className='hide_on_mobile' src={case3} alt="" />
      <button className='hide_on_mobile'>Se mere</button>
    </div>

    <img className='hide_on_mobile' src={pil_right} alt="Højrepil" />
  </div>

</section>

<PriceCalculator></PriceCalculator>

<section className='podcast_section' style={{backgroundImage: `url(${bølge_m_skygge})`}}>


  <div className='podcast_div'>
    <img src={podcast} alt="" />
  </div>

  <div className='podcast_div'>
    <h2>Podcast</h2>
    <br />
    <p> Ønsker du at lære mere om hvordan du kan inddrage bæredygtige tiltag på din hjemmeside eller når du skal udarbejde grafisk materiale til sociale medier? Så lyt til vores podcast her! Her kan du i seneste afsnit lære mere om internettets Co2 udslip og hvad man kan gøre, for at sørge for, at ens digitale løsninger ikke er med til at få Co2 udslippet til at stige. 
</p>
<br />
<button>Se mere</button>
  </div>

</section>

<section className='omos'>
<div className="service_bobbel_midt">
        <h5>Om os</h5>
        <h3>Hvem er Re_Agency? Vi er et markedsførings og webbureau, der tilbyder forskellige digitale services til dig og din virksomhed. Vi kan hjælpe dig med opgaver indenfor visuel identitet, såsom logo design branding og webdesign. <br /> <br /> Vi tilbyder også at hjælpe med at optimere eksisterende løsninger. Vi har en mission i vores bureau om at inddrage ting i de løsninger vi laver, som er med til at skåne miljøet. 
</h3>
      </div>
</section>



  </>
)
  
   
  }