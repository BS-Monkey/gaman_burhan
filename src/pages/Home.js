import { Navbar, Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import TwitterIconSvg from '../assets/images/twitter_white.svg';
import DiscordIconSvg from '../assets/images/discord_black.svg';
import NavbarMenu from '../components/Pages/Home/NavbarMenu';
import DefaultSection from '../components/Pages/Home/DefaultSection';
import TitleImage from '../assets/images/others_title.png'
import OthersSection from '../components/Pages/Home/OthersSection';

const HomeComponent = styled.div`
  .connect-component {
    position: relative;
  }
  .image-title {
    position: absolute;
    width: 100%;
    transform: translate(0%, 50%);
    bottom: 0px;
  }
  .icon-container {
    z-index: 1;
    position: absolute;
    bottom: 0px;
    display: flex;
  }
  .icon-container .nav-item .nav-link:hover {
    filter: brightness(0.75);
  }
  @media (max-width: 991px) {
    .icon-container {
      display: none;
    }
  }
  @media (max-width: 1288px) {
    .icon-container .nav-item {
      margin-right: -30px;
    }
    .icon-container .nav-item .nav-link img {
      width: 75%;
    }
  }
`
const Home = () => {
  return (
    <HomeComponent>
      <NavbarMenu />
      <DefaultSection />
      <div className='connect-component'>
        <img src={TitleImage} alt='others-section' className='image-title'/>        
        <div className='icon-container'>
          <Nav.Item>
            <Nav.Link href='#'>
              <img src={TwitterIconSvg} alt='twitter' />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#'>
              <img src={DiscordIconSvg} alt='youtube' />
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
      <OthersSection />
    </HomeComponent>
  );
};

export default Home;
