import React from 'react';

function Loader(props) {
	if (props.loading == true) {
		return (
			<div className="Loading">
				<img className="loading" src="img/loading.gif" />
			</div>
		);
	}
	else {
		return null;
	}
}

export default Loader;