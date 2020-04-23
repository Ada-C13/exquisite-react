import React from "react";
import PropTypes from 'prop-types';
import "./FinalPoem.css";

const FinalPoem = (props) => {
  const formatPoem = props.submissions.map((submission, index) => (
    <p key={index}>
      The {submission.adj1} {submission.noun1} {submission.adv}{" "}
      {submission.verb} the {submission.adj2} {submission.noun2}.
    </p>
  )); // this should return an array of strings not array of objects

  // show final poem if the final poem button has been clicked
  const showFinalPoem = () => {
    if (props.revealBox) {
      return (
        <div className="FinalPoem__reveal-btn-container">
          <input
            type="button"
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
            onClick={props.onFinalPoem}
          />
        </div>
      );
    } else {
      return <div>{formatPoem}</div>;
    }
  };

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>
      {showFinalPoem()}
    </div>
  )};
  FinalPoem.propTypes = {
  onFinalPoem: PropTypes.func.isRequired,
  onSubmissions:PropTypes.arrayOf(PropTypes.objects),
  revealBox: PropTypes.bool.isRequired,
  }

export default FinalPoem;
