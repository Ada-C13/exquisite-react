import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import propTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {
  const [poem, setPoem] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const onUserInputChange = (event) => {
    const { name, value } = event.target;
    const newPoem = {
      ...poem,
    };

    newPoem[name] = value;
    setPoem(newPoem);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (
      poem.adj1 !== '' &&
      poem.noun1 !== '' &&
      poem.adv !== '' &&
      poem.verb !== '' &&
      poem.adj2 !== '' &&
      poem.noun2 !== ''
    ) {
      props.onSubmitCallBack(poem);

      setPoem({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    }
  };

  const main = props.fields.map((obj) => {
    const userInput = poem[obj.key];

    if (obj.key) {
      return (
        <input
          name={obj.key}
          placeholder={obj.placeholder}
          type='text'
          key={obj.key}
          value={userInput}
          onChange={onUserInputChange}
        />
      );
    } else {
      return obj;
    }
  });

  if (props.recentLineVisibility) {
    return (
      <div className='PlayerSubmissionForm'>
        <h3>Player Submission Form for Player #{props.player}</h3>

        <form onSubmit={onFormSubmit} className='PlayerSubmissionForm__form'>
          <div className='PlayerSubmissionForm__poem-inputs'>{main}</div>

          <div className='PlayerSubmissionForm__submit'>
            <input
              type='submit'
              value='Submit Line'
              className='PlayerSubmissionForm__submit-btn'
            />
          </div>
        </form>
      </div>
    );
  } else {
    return <div>{null}</div>;
  }
};

PlayerSubmissionForm.propTypes = {
  onUserInputChange: propTypes.func.isRequired,
  onFormSubmit: propTypes.func.isRequired,
  poem: propTypes.object,
};

export default PlayerSubmissionForm;
