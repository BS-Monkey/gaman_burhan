// import Bg1Png from '../../../assets/images/bg3.jpg';
// import BookOpen from '../../../assets/images/book-open.PNG';
import Manifesto from './Manifesto';
import BookSection from './BookSection';
import AttentionSection from './AttentionSection';
import MeetToji from './MeetToji';
import SoulsProtocol from './SoulsProtocol';
import SpiritGuide from './SpiritGuide';
import GameStudio from './GameStudio';
import TeamMate from './TeamMate';
import Questions from './Questions';
import Footer from './Footer';

const OthersSection = () => {
  
  return (
    <section id='section-other'>
      <Manifesto />
      <BookSection />
      <AttentionSection />
      <MeetToji />
      <SoulsProtocol />
      <SpiritGuide />
      <GameStudio />
      <TeamMate />
      <Questions />
      <Footer />
    </section>
  );
};

export default OthersSection;
