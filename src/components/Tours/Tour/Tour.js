import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";

const Tour = ({ tour }) => {

	const { key, title, rating, duration, description, price, img } = tour;

	return (


















		<Col className=" m-4border-5 border d-flex justify-content-center align-items-center" xs={12} md={4} lg={4}  >
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
					{/* <div className="d-flex justify-content-evenly ">
						<Link to={`/booking/${key}`}>
							<Button variant="primary">Book Now</Button>

						</Link>

						<Link to={`/cart`}>
							<Button variant="primary">Go To Cart</Button>
						</Link>
					</div> */}

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
						to={`/tours/${key}`}
						className="btn btn-primary w-100 me-1"
					>
						Book Now
					</NavLink>
					<button
						// onClick={() => {
						// if (uid) {
						// 		addToCart(course);
						// 	} else {
						// 	}
						// }}
						className="btn btn-primary  w-100"
					>
						Add to Cart
					</button>
				</Card.Body>



			</Card>

		</Col>

		// <Col sm={12}  md={3} lg={4} className="m-3" >

		// 		<div className="m-2">
		// 			<Card className="mx-auto" style={{ width: "16rem" }}>
		// 				<Card.Img variant="top" style={{ minHeight: "150px" }} src={img} />
		// 				<Card.Body className="my-1 py-1">
		// 					<Card.Title>{title}</Card.Title>
		// 					<Card.Text>{description?.slice(0,100)}</Card.Text>
		// 				</Card.Body>
		// 				<Card.Body className="my-1 py-1">
		// 					<h4>Price: {price}$</h4>
		// 				</Card.Body>
		// 				<Card.Body className="my-1 py-1">
		// 					<Row>
		// 						<Col>
		// 							<Rating
		// 								initialRating={rating}
		// 								readonly
		// 								emptySymbol={
		// 									<FontAwesomeIcon
		// 										className="text-warning"
		// 										icon={emptyStar}
		// 									/>
		// 								}
		// 								fullSymbol={
		// 									<FontAwesomeIcon
		// 										className="text-warning"
		// 										icon={fullStar}
		// 									/>
		// 								}
		// 							/>
		// 							<span>{rating}</span>
		// 						</Col>
		// 						<Col>Total review {rating}</Col>
		// 					</Row>
		// 				</Card.Body>
		// 				<Card.Body className="d-flex">
		// 					<NavLink
		// 						to={`/tours/${key}`}
		// 						className="btn btn-primary w-100 me-1"
		// 					>
		// 						View Details
		// 					</NavLink>

		// 					<button
		// 						// onClick={() => {
		// 						// 	if (uid) {
		// 						// 		addToCart(course);
		// 						// 	} else {
		// 						// 		history.push("/login");
		// 						// 	}
		// 						// }}
		// 						className="btn btn-primary  w-100"
		// 					>
		// 						Add to Cart
		// 					</button>
		// 				</Card.Body>
		// 			</Card>
		// 		</div>
		// </Col>

	);
};

export default Tour;