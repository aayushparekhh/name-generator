import React from "react";
import "../App/App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");
function App() {
	const [isHeaderExpanded, setIsHeaderExpanded] = useState(true);

	const [SuggestedNames, setSuggestedNames] = useState([]);

	function handleInputChange(e) {
		if (e.target.value.length > 1) {
			setIsHeaderExpanded(false);
		} else if (e.target.value < 1) {
			setIsHeaderExpanded(true);
		}

		setSuggestedNames(e.target.value ? name(e.target.value) : []);
	}
	return (
		<div>
			<Header headerExpanded={isHeaderExpanded} />
			<SearchBox onInputChange={handleInputChange} />
			<ResultsContainer genratedNames={SuggestedNames} />
		</div>
	);
}

export default App;
