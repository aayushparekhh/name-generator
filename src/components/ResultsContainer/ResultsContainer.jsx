import React from "react";
import "./ResultsContainer.css";
const nameCheap =
	"https://www.namecheap.com/domains/registration/results/?domain=";

const ResultsContainer = ({ genratedNames }) => {
	const names = genratedNames.map((name) => {
		return (
			<a className="card-link" target="_blank" href={`${nameCheap}${name}`}>
				<div className="result-name-card">
					<p className="result-name" key={name}>
						{name}
					</p>
				</div>
			</a>
		);
	});
	return <div className="results-container">{names}</div>;
};

export default ResultsContainer;
