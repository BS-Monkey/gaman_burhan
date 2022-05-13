import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import FlamePng from '../../../assets/images/flame.png';
import BtnMoonPng from '../../../assets/images/moon.png';
import BtnSunPng from '../../../assets/images/sun.png';
import TwitterIconSvg from '../../../assets/images/twitter_white.svg';
import DiscordIconSvg from '../../../assets/images/discord_black.svg';

const DefaultSection = () => {  
  const [bannerImg, setBannerImg] = useState(0);

  return (
    <section
        id='section-one'
        className={`${bannerImg === 0 ? 'day_banner' : 'night_banner'}`}
      >
        <img className='flameimage' src={FlamePng} alt='Flame' />
        <div className='day-count-selector'>
          <div
            className={`btn-select ${bannerImg === 1 ? 'active' : ''}`}
            onClick={() => {
              setBannerImg(1);
            }}
          >
            <img src={BtnMoonPng} alt='moon' />
          </div>
          <div
            className={`btn-select ${bannerImg === 0 ? 'active' : ''}`}
            onClick={() => {
              setBannerImg(0);
            }}
          >
            <img src={BtnSunPng} alt='sun' />
          </div>
        </div>
      </section>
  );
};

export default DefaultSection;
