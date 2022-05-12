import LogoPng from '../assets/images/logo.png';
import Logo3Png from '../assets/images/logo3.png';
import TwitterIconSvg from '../assets/images/icon-twitter.svg';
import DiscordIconSvg from '../assets/images/icon-discord.svg';
import Banner1Jpg from '../assets/images/banner_1.jpg';
import Banner2Jpg from '../assets/images/banner_2.jpg';
import Logo from '../assets/images/logo.png';
import Logo2Svg from '../assets/images/logo2.svg';
import BtnPlaySvg from '../assets/images/btn-knife-play.svg';
import BtnMoonPng from '../assets/images/moon.png';
import BtnSunPng from '../assets/images/sun.png';
import Bg2Png from '../assets/images/bg2.png';
import Bg3Jpg from '../assets/images/bg3.jpg';
import Bg4Jpg from '../assets/images/volcano.jpg';
import Cloud1 from '../assets/images/cloud1.png';
import Cloud2 from '../assets/images/cloud2.png';
import Cloud3 from '../assets/images/cloud3.png';
import Lightning1 from '../assets/images/lightning1.png';
import Lightning2 from '../assets/images/lightning2.png';
import Lightning3 from '../assets/images/lightning3.png';
import Lightning4 from '../assets/images/lightning4.png';
import Lightning5 from '../assets/images/lightning5.png';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { KANE_ITEMS, PROTOCOL_ITEMS } from '../contants';
import ProtocolItem from '../components/SharedComponents/ProtocolItem';
import AudioPlayer from '../components/Pages/Home/AudioPlayer';
import BookSection from '../components/Pages/Home/BookSection';
import Manifesto from '../components/Pages/Home/Manifesto';

const Home = () => {
  const [bannerImg, setBannerImg] = useState(0);
  const [selectedKane, setKane] = useState(0);

  return (
    <>
      <Navbar id='gaman-navbar' bg='dark' expand='lg' variant='dark'>
        <Container className='container'>
          <Navbar.Brand href='#'>
            {/* <img src={LogoPng} alt='logo' /> */}
            <img className='logo3' src={Logo3Png} alt='logo' />
            <img className='logo3' src={Logo2Svg} alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            {/* <Nav>
              <Nav.Item>
                <Nav.Link href='#'>The Tarnished</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>Souls</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>Manifesto</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>Spirit Guide</Nav.Link>
              </Nav.Item>
            </Nav> */}
            <Nav className='social-nav'>
              {/* <Nav.Item>
                <Nav.Link href='#'>
                  <img src={FacebookIconSvg} alt='facebook' />
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link href='' target=''>
                  <p alt='manifesto' >MANIFESTO</p>
                </Nav.Link>
                {/* <Nav.Link href='https://twitter.com/gamannft' target='_blank'>
                  <img src={TwitterIconSvg} alt='twitter' />
                </Nav.Link> */}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='' target=''>
                  <p alt='classes' >CLASSES</p>
                </Nav.Link>
                {/* <Nav.Link
                  href='https://twitter.com/gamannft'
                  target='_blank'
                  disabled
                >
                  <img
                    src={DiscordIconSvg}
                    alt='discord'
                    style={{ width: '100%' }}
                  />
                </Nav.Link> */}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='' target=''>
                  <p alt='souls-protocol' >SOULS PROTOCOL</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='' target=''>
                  <p alt='spirit-guide' >SPIRIT GUIDE</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='' target=''>
                  <p alt='team' >TEAM</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='' target=''>
                  <p className='black' alt='the-tarnished' >THE TARNISHED</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='' target=''>
                  <p className='black' alt='merch' >MERCH</p>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link href='#'>
                  <img src={InstagramIconSvg} alt='instagram' />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>
                  <img src={YoutubeIconSvg} alt='youtube' />
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        id='section-one'
        className={`${bannerImg === 0 ? 'day_banner' : 'night_banner'}`}
      >
        {/* <img className='logo' src={Logo2Svg} alt='logo' /> */}
        <div className='btn-play'>
          <img src={BtnPlaySvg} alt='play' />
        </div>
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

      <BookSection />

      <section id='section-three'>
        <img className='img-back' src={Bg4Jpg} alt='bg 2' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 anim-wrapper'>
              <img className={`custom-img custom-img${selectedKane}`} src={KANE_ITEMS[selectedKane].animSrc} alt='anim' />
            </div>
            <div className='col-lg-6'>
              <h1 className='title'>MEET TOJI</h1>
              <p className='description'>
                Interact with Toji and allow him to showcase some of the different classes and their weapons and skills!
              </p>
              <p className='description'>
                All while relaxing with a toothpick in his mouth, cool guy Toji strikes again.
              </p>
              <div id='item-select-wrapper'>
                  {KANE_ITEMS.filter(item => item.id !== 0).map((item) => {
                      return(
                    <div
                      key={item.id}
                      className={`btn-item-selector ${
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
                {/* {KANE_ITEMS.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`btn-item-selector ${
                        item.id === selectedKane ? 'active' : ''
                      }`}
                      onClick={() => {
                        setKane(item.id);
                      }}
                    >
                      <img src={item.imgSrc} alt='select one' />
                      {item.title}
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='section-four'>
        <img className='img-back' src={Bg3Jpg} alt='bg 3' />
        <div className='container'>
          <h1 className='title'>SOULS PROTOCOL</h1>
          <div className='protocol-wrapper'>
            {PROTOCOL_ITEMS.map((item) => {
              return (
                <ProtocolItem
                  key={item.id}
                  wrapperClass='protocol-item-wrapper'
                  protocolItem={item}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id='gaman-footer'>
        <div className='container'>
          <div className='row'>
            {/* <div className='col-lg-6 audio-wrapper'>
              <AudioPlayer />
            </div> */}
            <div className='logo'>
                <img src={Logo} alt="logo..." />
            </div>
            <div className='col-lg-12 footer-text'>
                <p>&copy; Copyrights 2022 Gaman, All rights reserved </p>
              {/* A PVP battle arena where players. */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
