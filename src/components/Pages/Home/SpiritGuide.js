import { useState } from 'react';

const SpiritGuide = () => {  
  const [selectedSpirit, setSelectedSpirit] = useState(0);
  const [wobble, setWobble] = useState(0);

  const setSpiritAndWooble = (props) => {
    console.log('click l-2')
    setSelectedSpirit(props)
    setWobble(1)
  }

  return (
    <section id='section-spirit'>
      <div className='container'>
        <h1 className='title'>Spirit Guide</h1>
        <div className='spirit-wrapper'>
          <div className='row spirit-item-wrapper'>
            <div className='col-lg-6'>
              <div className='item-l-2' 
                onClick={() => setSpiritAndWooble(1)}
              >
                <label>we are the tranished</label>
              </div>
              <div className='item-l-3' onClick={() => setSpiritAndWooble(2)}><label>purification</label></div>
              <div className='item-l-5' onClick={() => setSpiritAndWooble(3)}><label>beam of light</label></div>
              <div className='item-r-5 only-992' onClick={() => setSpiritAndWooble(4)}><label>creation & Morals</label></div>
              <div className='item-r-3 only-992' onClick={() => setSpiritAndWooble(5)}><label>spirit bridge</label></div>
              <div className='item-r-2 only-992' onClick={() => setSpiritAndWooble(6)}><label>Metaverse & Gaming</label></div>
              <div className='item-r-2 only-992' onClick={() => setSpiritAndWooble(7)}><label>Real World Physicals</label></div>
            </div>
            <div className='col-lg-6 only_992'>
              <div className='item-r-5' onClick={() => setSpiritAndWooble(4)}><label>creation & Morals</label></div>
              <div className='item-r-3' onClick={() => setSpiritAndWooble(5)}><label>spirit bridge</label></div>
              <div className='item-r-2' onClick={() => setSpiritAndWooble(6)}><label>Metaverse & Gaming</label></div>
            </div>
          </div>
          <div className='middle-item-back only_992'>
          </div>
          <div 
            className='middle-item only_992' 
            onClick={() => setSpiritAndWooble(7)}
          >
            <div className='middle-text'>
              <label>Real World</label>
              <label>Physicals</label>
            </div>
          </div>

          
        </div>
        <div className='content'>
          <label>Not just a roadmap; we’re laying out the mind map to help guide</label>
          <label>and build a community-focused, world-leading web3 brand.</label>
        </div>
      </div>
    </section>
  );
};

export default SpiritGuide;
