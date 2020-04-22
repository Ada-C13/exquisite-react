import React,{useState} from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const [finalDisplay, setDisplay] = useState([]);

  const onClickFinish = (event) => {
    props.onSubmitCallBack();
    setDisplay(props.poems);
  };

  const toDisplay = finalDisplay.map((poem) => {
    return(
    <p>The {poem.adj1} {poem.noun1} {poem.adv} {poem.verb} the {poem.adj2} {poem.noun2}.  </p>
    );
  });

  if (finalDisplay.length === 0 ){
    return (
      <div className="FinalPoem">
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onClickFinish} />
      </div>
    </div>
    );
  }
  else {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {toDisplay}
        </section>
      </div>
    );
  };

};


FinalPoem.propTypes = {
  onSubmitCallBack: PropTypes.func.isRequired
};
export default FinalPoem;
