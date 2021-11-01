import { useEffect, useState } from "react";
import useAuth from "./useAuth.js";
import useFirebase from "./useFirebase.js";

const useCart = () => {
	const { user } = useFirebase();
	const { uid } = user;
	const [selectedTour, setSelectedTour] = useState([]);

	useEffect(() => {
		fetch(`https://radiant-hollows-38398.herokuapp.com/cart/${uid}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.length) {
					setSelectedTour(data);
				}
			});
	}, [uid]);

	const addToCart = (tour) => {
		console.log('clicked', tour)
		const isHave = selectedTour.find(selected => selected._id === tour._id);
		delete tour._id;
		tour.uid = uid;
		tour.status = "pending";

		if (isHave) {
			alert("Tour Package has been selected!");
		} else {
			fetch("https://radiant-hollows-38398.herokuapp.com/cart/add", {
				method: "post",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(tour),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
					if (data.insertedId) {
						const newSelection = [...selectedTour, tour];
						setSelectedTour(newSelection);
					}
				});
		}
	};

	const deleteSingleReserve = id => {
		fetch(`https://radiant-hollows-38398.herokuapp.com/cart_delete/${id}`, {
			method: "delete",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount === 1) {
					const selectAfterRemove = selectedTour.filter(
						(tour) => tour._id !== id
					);
					setSelectedTour(selectAfterRemove);
				} else {
					alert("something went wrong!!");
				}
			});
	};




	return { setSelectedTour, deleteSingleReserve, addToCart, selectedTour };
};

export default useCart;