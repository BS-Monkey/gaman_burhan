import { PROTOCOL_ITEMS } from '../../../contants';
import ProtocolItem from '../../../components/SharedComponents/ProtocolItem';

const SoulsProtocol = () => {
  
  return (
    <section id='section-protocol'>
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
  );
};

export default SoulsProtocol;
