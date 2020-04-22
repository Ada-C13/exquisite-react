import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {

  
  const sentence = props.sentence.split(" ");
  
  let fullSentence = '';
    if(props.sentence.length !== 0){
      for(let i = 0; i < sentence.length; i++){

        if(i === 0){
          fullSentence += ("The " + sentence[i]);

        }else if(i === 3){
          fullSentence += (" " +  sentence[i] + " the ");

        }else{
          fullSentence +=  (" " + sentence[i]);
        }
      }
    }


  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{fullSentence}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  sentence: PropTypes.string
};

export default RecentSubmission;
