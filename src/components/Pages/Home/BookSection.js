import Bg1Png from '../../../assets/images/bg3.jpg';
import BookOpen from '../../../assets/images/book-open.PNG';
// import BookClose from '../../../assets/images/book-close.png';
// import BookAnimGif from '../../../assets/images/book.gif';
import { useState } from 'react';

const BOOK_STATS = {
  CLOSE: 0,
  OPENING: 1,
  OPENED: 2,
};

const BookSection = () => {
  const [openBook, setOpen] = useState(BOOK_STATS.CLOSE);

  const onBook = () => {
    setOpen(BOOK_STATS.OPENING);
    setTimeout(() => {
      setOpen(BOOK_STATS.OPENED);
    }, 2500);
  };
  
  return (
    <section id='section-two'>
      <img className='img-back' src={Bg1Png} alt='bg 1' />
      <div className='container'>
        {openBook === BOOK_STATS.CLOSE && (
          <div className='btn-book' onClick={onBook}></div>
        )}
        {openBook === BOOK_STATS.OPENING && <div className='anim-book'></div>}
        {openBook === BOOK_STATS.OPENED && (
          <>
            {/* <div className='book-div'>
              <h3 className='title'>PROLOGUE</h3>
              <p>“In the Age of the Forgotten, the earth was unformed, covered by
              an eerie mist. A land molded for a humanity left fragmented.</p>

              <p>Destruction and ruin brought by its inhabitants, Stone Giants and
              Elemental Dragons crush those beneath them.</p>
              <p>A world shrouded by darkness and evil, the shadows consume
              the light which once brought hope.</p>
              <p>Ebalees, a spirit forged from fire, banished from the heavens, the
              Dark Sorceress Baezil, and her Witches of Chaos, Phantos the King
              of the undead, harvesting the dead.</p>
              <p>Their mission to extinguish the flame of Souls</p>
              <p>But then there was light, a rekindled flame, from darkness came
              light, from death came life,</p>
            </div>
            <div className='book-div'>
                <p>God’s light shared within the Souls, providing strength in theircrusades,</p>
              <p>The Paladin’s lightning spears pierced through the fog, shimmers
              of hope.The Witches obeyed Ebalees, accumulating souls through
              black magic.</p>
              <p>As he feasted, his power grew and his army spread. Thus began the
              Age of Darkness, but soon the flames will grow, and only light
              will remain.</p>
              <p>Yet now, we see not light, but only endless nights, veiled in
              evil.</p>
              <p>On the brink of annihilation, we turn to the forgotten, the ones
              with purified Souls, For even in dark times, we cannot relinquish
              the things that make us human.</p>
              <p>Although broken & unspoken, God’s light guides you, within you,{' '}
              <br />… you are the Tarnished, this is your destiny.”</p>
            </div> */}
            <img className='img-open-book' src={BookOpen} alt="..." />
          </>
        )}
        {/* <div className='book-div book-div-m'>
            <h3 className='title'>PROLOGUE</h3>
            <p>“In the Age of the Forgotten, the earth was unformed, covered by
            an eerie mist. A land molded for a humanity left fragmented.</p>
            <p>Destruction and ruin brought by its inhabitants, Stone Giants and
            Elemental Dragons crush those beneath them.</p>
            <p>A world shrouded by darkness and evil, the shadows consume
            the light which once brought hope.</p>
            <p>Ebalees, a spirit forged from fire, banished from the heavens, the
            Dark Sorceress Baezil, and her Witches of Chaos, Phantos the King
            of the undead, harvesting the dead.</p>
            <p>Their mission to extinguish the flame of Souls</p>
            <p>But then there was light, a rekindled flame, from darkness came
            light, from death came life,</p>
            <p>God’s light shared within the Souls, providing strength in theircrusades,</p>
            <p>The Paladin’s lightning spears pierced through the fog, shimmers
            of hope.The Witches obeyed Ebalees, accumulating souls through
            black magic.</p>
            <p>As he feasted, his power grew and his army spread. Thus began the
            Age of Darkness, but soon the flames will grow, and only light
            will remain.</p>
            <p>Yet now, we see not light, but only endless nights, veiled in
            evil.</p>
            <p>On the brink of annihilation, we turn to the forgotten, the ones
            with purified Souls, For even in dark times, we cannot relinquish
            the things that make us human.</p>
            <p>Although broken & unspoken, God’s light guides you, within you,{' '}
            <br />… you are the Tarnished, this is your destiny.”</p>
        </div> */}
      </div>
    </section>
  );
};

export default BookSection;
