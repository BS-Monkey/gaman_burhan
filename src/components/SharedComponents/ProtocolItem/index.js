import styled from 'styled-components';
import TitleBg from '../../../assets/images/ttl5.png';
import BgPng from '../../../assets/images/bx2.png';

const ProtocolItem = ({ wrapperClass = '', protocolItem }) => {
  return (
    <div className={wrapperClass}>
      <div className={`row flex-items-end ${protocolItem.class}`}>
        <div className='col-lg-6'>
          <div className='img-wrapper'>
            <img
              className='img-protocol'
              src={protocolItem.imgSrc}
              alt='protocol'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='title-wrapper'>{protocolItem.title}</div>
          <p className='description'>{protocolItem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProtocolItem;