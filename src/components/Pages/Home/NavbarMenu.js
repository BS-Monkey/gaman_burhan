import { Navbar, Container, Nav } from 'react-bootstrap';

import Logo3Png from '../../../assets/images/logo3.png';
import Logo2Svg from '../../../assets/images/logo2.svg';

const NavbarMenu = () => {
  
  return (
    <Navbar id='gaman-navbar' bg='dark' expand='lg' variant='dark'>
      <Container className='container'>
        <Navbar.Brand href='#'>
          {/* <img src={LogoPng} alt='logo' /> */}
          <img className='logo3' src={Logo3Png} alt='logo' />
          <img className='logo3' src={Logo2Svg} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='social-nav'>
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
                <div className='lock'>
                  <label>Locked</label>
                  <p className='black' alt='the-tarnished' >THE TARNISHED</p>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='' target=''>
                <div className='lock'>
                  <label>Locked</label>
                  <p className='black' alt='merch' >MERCH</p>
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
