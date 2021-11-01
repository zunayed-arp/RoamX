import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import BookingForm from '../BookingForm/BookingForm.js';
import useAuth from '../../../hooks/useAuth.js';

const TourDetails = () => {
	const history = useHistory();
	const [tour, setTour] = useState({});
	const { id } = useParams();
	const { addToCart, allContexts } = useAuth();
	const { user } = allContexts;
	const { uid } = user;

	useEffect(() => {
		fetch(`http://localhost:5000/packages/${id}`)
			.then((res) => res.json())
			.then((data) => {
				if (data?._id) {
					setTour(data);
				} else {
					alert("Error happened");
				}
			});
	}, [id]);

	
	return (
		<div className="my-5">
			<Row>
				<Col className="m-4" lg={3}>

					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={tour?.img} />
						<Card.Body>
							<Card.Title>{tour?.title}</Card.Title>
							<Card.Text>
								{tour?.description?.slice(0, 80)}
							</Card.Text>
							<Card.Text>
								Price: {tour?.price}
							</Card.Text>

							<Button
								onClick={
									() => {
										if (uid) {
											addToCart(tour);
										} else {
											history.push('/login');
										}
									}
								}
								className="btn btn-primary">Book Now</Button>
						</Card.Body>
					</Card>

				</Col>

				<Col>
					<BookingForm></BookingForm>
				</Col>
			</Row>
		</div>
	);
};

export default TourDetails;