import {
	sendEmailVerification, updateProfile, createUserWithEmailAndPassword,
	signOut,
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [photo, setPhoto] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(true);

	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();


	// clear error
	useEffect(() => {
		setTimeout(() => {
			setError("");
		}, 5000);
	}, [error]);

	// google sign in
	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	}

	 // gitHub sign in
	// const signInWithGithub =()=> {
	// 	return signInWithPopup(auth, gitHubProvider);
	// }


	// Email sign in
	function signInWithEmail(e) {
		e.preventDefault();
		return signInWithEmailAndPassword(auth, email, password);
	}


	// set name and profile image url
	const setNameAndImage = () => {
		updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		})
			.then(() => { })
			.catch((error) => {
				setError(error.message);
			});
	}

	const emailVerify = () => {
		sendEmailVerification(auth.currentUser).then(() => {
			alert(`A Verification mail has been set to ${email}`);
		});
	}

	// Get the currently signed-in user
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
			if (signedInUser) {
				setUser(signedInUser);
			} else {
				setUser({});
			}
			setLoading(false);
		});
		return () => unsubscribe;
	}, []);

	// sign out
	const logOut = () => {
		signOut(auth)
			.then((res) => {
				setUser({});
			})
			.catch((error) => {
				setError(error.message);
			});
	}

	// reset password
	const passwordReset = e => {
		e.preventDefault();
		sendPasswordResetEmail(auth, email)
			.then(() => {
				alert("password reset email has been sent");
			})
			.catch((err) => {
				setError(err.message);
			});
	}

	// sign up with email password
	const singUp = e => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setNameAndImage();
				emailVerify();
				alert("user has been created");
			})
			.catch((err) => {
				setError(err.message);
			});
	}
	// get name
	const getName = e => {
		console.log(e.target.value)
		setName(e?.target?.value);
	}

	// get Email
	const getEmail = e => {
		setEmail(e?.target?.value);
	}
	// Get password
	const getPassword = e => {
		setPassword(e?.target?.value);
	}
	// Get photoUrl
	const getPhoto = (e) => {
		setPhoto(e?.target?.value);
	}

	return {
		user,
		logOut,
		getEmail,
		getPassword,
		signInWithEmail,
		error,
		setUser,
		setError,
		signInWithGoogle,
		loading

	
	};






}


export default useFirebase;