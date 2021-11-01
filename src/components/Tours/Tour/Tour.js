import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Tour = ({ tour }) => {

	const { allContexts, addToCart } = useAuth();
	const { user } = allContexts;
	const { uid } = user;
	const { _id, title, rating, duration, description, price, img } = tour;

	return (
		<Col className="d-flex justify-content-center align-items-center" xs={12} md={4} lg={4}  >
			<Card >
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</Card.Text>
					<Card.Text>
						Duration: {duration}
					</Card.Text>
					<Card.Text>
						price: {price}
					</Card.Text>
				</Card.Body>

				<Card.Body className="my-1 py-1">
					<Row>
						<Col>
							<Rating
								initialRating={rating}
								readonly
								emptySymbol={
									<FontAwesomeIcon
										className="text-warning"
										icon={emptyStar}
									/>
								}
								fullSymbol={
									<FontAwesomeIcon
										className="text-warning"
										icon={fullStar}
									/>
								}
							/>
							<span>{rating}</span>
						</Col>
						<Col>Total review {rating}</Col>
					</Row>
				</Card.Body>

				<Card.Body className="d-flex">
					<NavLink
						to={`/packages/${_id}`}
						className="btn btn-primary me-1"
					>
						Details
					</NavLink>

					<Link to="/cart">

						<button
							//   onClick={() => { 
							//   if (uid) {
							//  		addToCart(tour);
							//  	} else {
							//  	}
							//  }} 
							className="btn btn-primary  w-100"
						>
							Go to Cart
						</button>
					</Link>

				</Card.Body>



			</Card>

		</Col>



	);
};

export default Tour;