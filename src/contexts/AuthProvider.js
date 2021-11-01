import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import useFirebase from '../hooks/useFirebase';
import useTours from '../hooks/useTours';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	//hooks

	const allContexts = useFirebase();
	const {tours,setTours} = useTours();
	const { setSelectedTour, deleteSingleReserve, addToCart, selectedTour} = useCart();

	const data = {
		allContexts,
		tours,setTours,
		setSelectedTour,deleteSingleReserve, addToCart, selectedTour
	}

	return (
		<AuthContext.Provider value={data}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;