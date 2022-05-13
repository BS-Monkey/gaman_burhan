import Bg1Png from '../../../assets/images/bg3.jpg';
import BookOpen from '../../../assets/images/book-open.PNG';
import BookClose from '../../../assets/images/book-close.png';
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
    <section id='section-book'>
      <div className='pl-07'>
        {openBook === BOOK_STATS.CLOSE && (
          <>
            <div className='title-closed'>prologue</div>
            <div className='book-closed' onClick={onBook}>
              <img src={BookClose} alt='book close'/>
            </div>
          </>
        )}
        {openBook === BOOK_STATS.OPENING && <div className='anim-book'></div>}
        {openBook === BOOK_STATS.OPENED && (
          <>
            <div className='title-opened'>prologue</div>
            <div className='book-opened'>
              <img src={BookOpen} alt="..." />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BookSection;
