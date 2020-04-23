import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  const arrayOfStrings = props.submissions.map((input) =>{
    return (
      <p>The {input.adjective1} {input.noun1} {input.adverb} {input.verb} the {input.adjective2} {input.noun2}</p>
    )
  })

  const onButtonClick = () =>{
    props.onClickCallback()
  }

  return (
    <div className="FinalPoem">
      {props.showComponent && <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <p>{arrayOfStrings}</p>
      </section>}
      {!props.showComponent && <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn"
          onClick = {onButtonClick}
        />
      </div>}
    </div>
  );
}

FinalPoem.propTypes = {
  submissions: PropTypes.arrayOf(PropTypes.object),
  onClickCallback: PropTypes.func,
  showComponent: PropTypes.bool
}
export default FinalPoem;
