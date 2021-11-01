import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {

	const history = useHistory();
	const { allContexts,
		tours, setTours,
		setSelectedTour, deleteSingleReserve, addToCart, selectedTour } = useAuth();

	const [orders, setOrders] = useState([])
	const [tour,setTour] = useState([]);
	useEffect(() => {
		fetch('https://radiant-hollows-38398.herokuapp.com/cart')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setOrders(data);
			});

	}, [orders]);








	return (
		<div>

		<h1>Manages All Orderes</h1>
			{
				orders.map(order => <div>

					<img src={order.img} alt="" />
					<h3>{order.title}</h3>
					<h4>Price{order.price}</h4>

					<button
						onClick={() => deleteSingleReserve(order._id)}

						className="btn btn-primary m-3"
					>
						Remove {order.title}
					</button>




					<button
						onClick={() => {
							fetch(
								`https://radiant-hollows-38398.herokuapp.com/cart_delete_all/${order.uid}`,
								{
									method: "delete",
								}
							)
								.then((res) => res.json())
								.then((data) => {
									if (data.deletedCount > 0) {
										alert("Thanks for purchasing");
										setSelectedTour([]);
										history.push("/home");
									}
								});
						}}
						className="btn btn-primary"
					>
						Remove All
					</button>
				</div>
				)
			}

			

			




		</div>
	);
};



export default ManageAllOrders;