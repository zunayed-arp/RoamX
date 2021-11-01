import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";




const Cart = () => {

	const [orders, setOrders] = useState([])
	const { allContexts,
		tours, setTours,
		setSelectedTour, deleteSingleReserve, addToCart, selectedTour } = useAuth();
	const { user } = allContexts;
	const { uid } = user;

	const history = useHistory();
	// const totalPrice = selectedTour.reduce(
	// 	(total, course) => total + course.price,
	// 	0
	// );

	let totalQuantity = 0;
	let total = 0;
	
	for (const product of selectedTour) {
		if (!product.quantity) {
			product.quantity = 1;
		}
		total = total + product.price * product.quantity;
		totalQuantity = totalQuantity + product.quantity;
	}

	// const shipping = total > 0 ? 15 : 0;
	// const tax = (total ) * 0.10;
	const grandTotal = total


	useEffect(() => {
		const url = `https://radiant-hollows-38398.herokuapp.com/cart/${uid}`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setOrders(data)
				console.log(data)
			})
	}, [uid])

	return (
		<div className="my-4">


			<h3>My Orders</h3>
			<p>User name: {user?.displayName}</p>
			{/* <p>uid: {user?.uid}</p> */}
			<p>Email: {user?.email}</p>
			<p>Order: {orders.length}</p>
			<p>Order status: {selectedTour.status}</p>
			
			<Container>
				{selectedTour.length ? (
					<Row>
						<Col className="text-center" md={4}>
							<h4>Total {selectedTour.length} Package </h4>
							<h6>Total Price : {grandTotal.toFixed(2)}</h6>
					

							<button
								onClick={() => {
									fetch(
										`https://radiant-hollows-38398.herokuapp.com/cart_delete_all/${uid}`,
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
								Check Out
							</button>
						</Col>

						<Col className="" md={8}>
							{selectedTour.map((tour) => {
								const { img, _id, title, description, rating, price } =
									tour;

								return (
									<Row className="my-2 bg-info" key={_id}>
										<Col sm={7}>
											<h5>{title}</h5>
											<h4>Price: {price}</h4>
											<Row>
												<Col sm={8}>
													<div className="d-flex">
														{/* <NavLink
															to={`/packages/${_id}`}
															className="btn btn-primary w-100 me-1"
														>
															View Details
														</NavLink> */}

														<button
															onClick={() => deleteSingleReserve(_id)}

															className="btn btn-primary  w-100"
														>
															Remove
														</button>
													</div>
												</Col>
											</Row>
										</Col>
									</Row>
								);
							})}
						</Col>
					</Row>
				) : (
					<div className="text-center my-5 py-5">
						<h1>No Tour Selected!</h1>
					</div>
				)}
			</Container>
		</div>
	);
};

export default Cart;