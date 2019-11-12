import React from 'react';
function Loader(props) {
	if (props.loading === true) {
		return (
			<div className="loading">
				<img src="../images/loading.gif" alt="Loading..."></img>
			</div>
		);
	}
	else {
		return null;
	}
}
export default Loader;
