import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';



const PlayerSubmissionForm = (props) => {

  const [line, setLine] = useState({
    the1: 'The',
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    the2: 'the',
    adj2: '',
    noun2: '',
    
  });

  const onInputChange = (event) => {
    console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    
    const newLine = {
      ...line
    }
  
    newLine[event.target.name] = event.target.value;
    setLine(newLine);
    
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form');
    
    if (line.adj1 !== '' && line.noun1 !== '' && line.adv !== '' && line.verb !== '' && line.adj2 !== '' && line.noun2 !== '') {
      props.onSubmitCallback(line);  
      setLine ({    //Clearing Fields
        the1: 'The',
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        the2: 'the',
        adj2: '',
        noun2: '',
      }); 
    }
  }

  const boxColor = (name) => {
    return (name === "") ? "PlayerSubmissionFormt__input--invalid" : "valid";
  };
 

  return (
    <div className={(props.className=="noShow") ? "noShow" : "PlayerSubmissionForm"}>
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className={props.className} 
            onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          <p>The </p>
          <input
            className={boxColor(line.adj1)}
            placeholder="adjective"
            type="text" 
            name='adj1'
            value={line.adj1}
            onChange={onInputChange}/>
          <input
            className={boxColor(line.noun1)}
            placeholder="noun"
            type="text" 
            name='noun1'
            value={line.noun1}
            onChange={onInputChange}/>
          <input
            className={boxColor(line.adv)}
            placeholder="adverb"
            type="text" 
            name='adv'
            value={line.adv}
            onChange={onInputChange}/>
          <input
            className={boxColor(line.verb)}
            placeholder="verb"
            type="text" 
            name='verb'
            value={line.verb}
            onChange={onInputChange}/>
          <p> the </p>
          <input
            className={boxColor(line.adj2)}
            placeholder="adjective"
            type="text" 
            name='adj2'
            value={line.adj2}
            onChange={onInputChange}/>
          <input
            className={boxColor(line.noun2)}
            placeholder="noun"
            type="text" 
            name='noun2'
            value={line.noun2}
            onChange={onInputChange}/>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};
export default PlayerSubmissionForm;


 // const baseInput = props.fields.forEach((field) => {
  //   return (
  //     <input
  //       placeholder={field.placeholder}
  //       type={field.key} />
  //   )
  // });