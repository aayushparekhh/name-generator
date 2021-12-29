import React from "react";
import "./SearchBox.css";
const SearchBox = (props) => {
	return (
		<div className="search-container">
			<input
				onChange={props.onInputChange}
				placeholder="Type KeyWords"
				className="search-input"
			/>
		</div>
	);
};

export default SearchBox;
