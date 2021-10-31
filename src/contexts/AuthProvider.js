import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useTours from '../hooks/useTours';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	//hooks

	const allContexts = useFirebase();
	const {tours,setTours} = useTours();

	const data = {
		allContexts,
		tours,setTours
	}

	return (
		<AuthContext.Provider value={data}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;