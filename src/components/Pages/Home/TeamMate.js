import { TEAMMATES } from "../../../contants";
import TeammateItem from "../../SharedComponents/TeammateItem";

const TeamMate = () => {

  return (
    <section id='section-teammate'>
      <div className='container'>
        <div className='row'>
          <div className="col-lg-6">
            <h1 className='title'>Meet <br />Our Team</h1>
          </div>
          <div className="col-lg-6">
            <div className='item-select-wrapper'>
              {TEAMMATES.map((item) => {
                return (
                  <TeammateItem
                    key={item.id}
                    wrapperClass='teammate-item-wrapper'
                    teammateItem={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMate;
