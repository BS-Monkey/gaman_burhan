import StudioVideoPng from '../../../assets/images/studio_video.png';
import StudioImagePng1 from '../../../assets/images/studio_image1.png';
import StudioImagePng2 from '../../../assets/images/studio_image2.png';
import StudioImagePng3 from '../../../assets/images/studio_image3.png';

const GameStudio = () => {

  return (
    <section id='section-studio'>
      <div className='container'>
        <h1 className='title'>Game Studio</h1>
        <div className='row'>
          <div className="col-lg-9">
            <video controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-3">
            <div className='image-container'>
              <img src={StudioImagePng1} alt='studio image' />
              <img src={StudioImagePng2} alt='studio image' />
              <img src={StudioImagePng3} alt='studio image' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameStudio;
