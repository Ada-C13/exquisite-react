import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  const fieldInput = props.fieldInput.split(" ");
  let fullPoem = '';
    if(props.fieldInput.length !== 0){
    for(let i =0; i < fieldInput.length; i++){
      if(i ===0){
        fullPoem += ("The " + fieldInput[i]);
      }else if(i === 3){
        fullPoem += (" " + fieldInput[i] + " the "); 
      }else{
        fullPoem += (" " + fieldInput[i]);
      }
    }
  }
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{fullPoem}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  fieldInput: PropTypes.string
};

export default RecentSubmission;
