import React from 'react';
import { Container, Row } from "react-bootstrap";
import Tour from '../Tour/Tour';
import useAuth from '../../../hooks/useAuth';

const Tours = () => {
	const { tours } = useAuth();
	return (
		<div className="py-5">



			<Container>
		
				<div className="my-3 d-flex flex-wrap justify-content-between">
					<Row>
					
						{tours.map(tour => (
							<Tour
								key={tour.key} tour={tour}
							></Tour>
						))}
					</Row>
				</div>

				<div>

				</div>

			</Container>

		</div>
	);
};

export default Tours;


