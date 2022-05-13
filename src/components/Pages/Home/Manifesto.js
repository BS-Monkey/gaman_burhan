// import Bg1Png from '../../../assets/images/bg3.jpg';
// import BookOpen from '../../../assets/images/book-open.PNG';
import ManifestoManBgPng from '../../../assets/images/manifesto_man_bg.png'

const Manifesto = () => {
  
  return (
    <section id='section-manifesto'>
      <div className="title">
        <label className='manifesto-title'>Manifesto</label>
      </div>
      <div className="content">
        <div className='withbg'>
          <label className='manifesto-content'>
            “Enduring the seemingly unbearable with patience and dignity.”  <br />
            <br />
            -	我慢 GAMAN
          </label>
        </div>
      </div>
      <div className='subcontent'>
        <div className='row'>
          <div className='col-lg-8 col-md-12 p-25 flex-items-center'>
            <div className='sub-paragraph'>
              <p>Words spoken by survivors. Words spoken by those who fight for the light and the protection of Eden. The ones that have been cast away to the shadows,  forgotten warriors. We are The Tarnished. The forgotten warriors of Eden, protectors of souls. We fight to bring the light back into those who have been led astray. </p>
              <p>Once a peaceful and prosperous place, Eden was like no other. Until the darkness overtook the land, claiming the souls of those who lost their way. Now we must stand together as one to stop the darkness and bring light back into the forgotten souls. </p>
              <p>Together we are strong, united we fight to defeat the dark and unleash the light, together we are The Tarnished. No longer shall we wait in the shadows. A new day is coming. The age of The Tarnished. Together we are stronger, together we remove doubt. Together we remove all boundaries. </p>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 flex-justify-end'>
            <img src={ManifestoManBgPng} alt='manifesto-man-bg' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
