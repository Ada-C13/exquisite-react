import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const [poemPiece, setPoemPiece] = useState({
    adj1:'',
    noun1:'',
    adv:'',
    verb:'',
    adj2:'',
    noun2:''
  });

  const onChange =(event) => {
    
    const newPoem = {
      ...poemPiece
    }
    console.log(newPoem);
    newPoem[event.target.name] = event.target.value;
    setPoemPiece(newPoem);
  }

  

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >
        <div className="PlayerSubmissionForm__poem-inputs">
          The
        <input 
          name="adj1"
          placeholder="adjective" 
          type="text" 
          className="PlayerSubmissionForm__input--invalid" 
          value={poemPiece.adj1}
          onChange={onChange}
        />  
        <input 
          name="noun1"
          placeholder="noun" 
          type="text" 
          className="PlayerSubmissionForm__input--invalid" 
          value={poemPiece.noun1}
          onChange={onChange}
        />
        <input 
          name="adv"
          placeholder="adverb" 
          type="text" className="PlayerSubmissionForm__input--invalid" 
          value={poemPiece.adv}
          onChange={onChange}
        />
        <input 
          name="verb"
          placeholder="verb" 
          type="text" 
          className="PlayerSubmissionForm__input--invalid" 
          value={poemPiece.verb}
          onChange={onChange}
        />the
        <input 
          name="adj2"
          placeholder="adjective" 
          type="text" 
          className="PlayerSubmissionForm__input--invalid" 
          value={poemPiece.adj2}
          onChange={onChange}
        />
        <input 
          name="noun2"
          placeholder="noun" 
          type="text" 
          className="PlayerSubmissionForm__input--invalid" 
          value={poemPiece.noun2}
          onChange={onChange}
        />.
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
