import React, { useState } from "react";
import "./PlayerSubmissionForm.css";
import PropTypes from "prop-types";

const PlayerSubmissionForm = (props) => {
	const [formFields, setFormFields] = useState({
		adj1: "",
		noun1: "",
		adv: "",
		verb: "",
		adj2: "",
		noun2: "",
	});

	const onInputChange = (event) => {
		console.log(event);
		console.log(`Changing field ${event.target.name} to ${event.target.value}`);
		const newFormFields = {
			...formFields,
		};
		newFormFields[event.target.name] = event.target.value;
		setFormFields(newFormFields);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		props.addPoemCallback(formFields);
		console.log(formFields);

		setFormFields({
			adj1: "",
			noun1: "",
			adv: "",
			verb: "",
			adj2: "",
			noun2: "",
		});
	};

	const makeMePink = (value) => {
		return value === ""
			? "PlayerSubmissionFormt__input--invalid"
			: "PlayerSubmissionFormt__input--valid";
	};

	return (
		!props.gameon && (
			<div className="PlayerSubmissionForm" onSubmit={onFormSubmit}>
				<h3>Player Submission Form for Player #{props.player}</h3>

				<form className="PlayerSubmissionForm__form">
					<div className="PlayerSubmissionForm__poem-inputs">
						<p>The</p>
						<input
							className={makeMePink(formFields.adj1)}
							placeholder="adjective"
							type="text"
							onChange={onInputChange}
							value={formFields.adj1}
							name={"adj1"}
						/>
						<input
							className={makeMePink(formFields.noun1)}
							placeholder="noun"
							type="text"
							onChange={onInputChange}
							value={formFields.noun1}
							name={"noun1"}
						/>
						<input
							className={makeMePink(formFields.adv)}
							placeholder="adverb"
							type="text"
							onChange={onInputChange}
							value={formFields.adv}
							name={"adv"}
						/>
						<input
							className={makeMePink(formFields.verb)}
							placeholder="verb"
							type="text"
							onChange={onInputChange}
							value={formFields.verb}
							name={"verb"}
						/>
						<p>the</p>
						<input
							className={makeMePink(formFields.adj2)}
							placeholder="adjective"
							type="text"
							onChange={onInputChange}
							value={formFields.adj2}
							name={"adj2"}
						/>
						<input
							className={makeMePink(formFields.noun2)}
							placeholder="noun"
							type="text"
							onChange={onInputChange}
							value={formFields.noun2}
							name={"noun2"}
						/>
						<p>.</p>
					</div>

					<div className="PlayerSubmissionForm__submit">
						<input
							type="submit"
							value="Submit Line"
							className="PlayerSubmissionForm__submit-btn"
						/>
					</div>
				</form>
			</div>
		)
	);
};

PlayerSubmissionForm.propTypes = {
	adj1: PropTypes.string.isRequired,
	noun1: PropTypes.string.isRequired,
	adv: PropTypes.string.isRequired,
	verb: PropTypes.string.isRequired,
	adj2: PropTypes.string.isRequired,
	noun2: PropTypes.string.isRequired,
};

export default PlayerSubmissionForm;
