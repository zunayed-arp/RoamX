import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children, ...rest }) => {
	const { allContexts } = useAuth();
	const {user,loading} = allContexts;

	if (loading) {
		return (
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.displayName ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>


	);
};

export default PrivateRoute;