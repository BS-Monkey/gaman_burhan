import { TEAMMATES } from "../../../contants";
import TeammateItem from "../../SharedComponents/TeammateItem";
import Logo from '../../../assets/images/logo.png';

const Footer = () => {

  return (
    <section id='gaman-footer'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt="logo..." />
        </div>
        <div className='footer-text'>
          <p>&copy; Copyrights 2022 Gaman, All rights reserved </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
