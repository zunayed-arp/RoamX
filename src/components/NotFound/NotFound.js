import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>404 Error </h1>
			<h1>Page  Not Found</h1>
			<Link to="/home">
				<button className="btn btn-primary">Back To Home</button>
			</Link>
		</div>
	);
};

export default NotFound;