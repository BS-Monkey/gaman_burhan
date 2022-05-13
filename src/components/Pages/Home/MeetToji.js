import { useState } from 'react';
import { KANE_ITEMS, PROTOCOL_ITEMS } from '../../../contants';

const MeetToji = () => {  
  const [selectedKane, setKane] = useState(0);

  return (
    <section id='section-meettoji'>
      <div className='container'>
        <div className='row flex-items-end'>
          <div className='col-lg-6 title'>
            <label>MEET</label><label className='toji'>TOJI</label>
          </div>
          <div className='col-lg-6'>
            <p className='description'>
              Interact with Toji and allow him to showcase some of the different classes and their weapons and skills!
            </p>
            <br className='only-992'/>
            <p className='description'>
              All while relaxing with a toothpick in his mouth, cool guy Toji strikes again.
            </p>
          </div>
        </div>
        <div className='row flex-items-center'>
          <div className='col-lg-6 anim-wrapper'>
            <img className={`custom-img custom-img${selectedKane}`} src={KANE_ITEMS[selectedKane].animSrc} alt='anim' />
          </div>
          <div className='col-lg-6'>
            <div id='item-select-wrapper'>
                {KANE_ITEMS.filter(item => item.id !== 0).map((item) => {
                  return(
                    <div
                      key={item.id}
                      className={`col-md-6 btn-item-selector ${
                        item.id === selectedKane ? 'active' : ''
                      }`}
                      onClick={() => {
                        setKane(item.id);
                      }}
                    >
                      <img src={item.imgSrc} alt='select one' />
                      {item.title}
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetToji;
