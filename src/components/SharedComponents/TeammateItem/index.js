const TeammateItem = ({ wrapperClass = '', teammateItem }) => {
  return (
    <div className={wrapperClass}>
      <div className={`flex-items-end ${teammateItem.class}`}>
        <div className='img-wrapper'>
          <img
            className='img-teammate'
            src={teammateItem.imgSrc}
            alt='protocol'
          />
          <div className='title-wrapper'>{teammateItem.name}</div>
          <label className='description'>{teammateItem.description}</label>
        </div>
      </div>
    </div>
  );
};

export default TeammateItem;