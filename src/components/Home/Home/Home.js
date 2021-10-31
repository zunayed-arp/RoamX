import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Tour from '../../Tours/Tour/Tour';
import Tours from '../../Tours/Tours/Tours';
import Banner from '../Banner/Banner';


const Home = () => {
	const {tours} = useAuth();
	return (
		<div>
			<Banner></Banner>
			{/* <Tours></Tours> */}

			<Container>
				<div className="my-3 d-flex flex-wrap justify-content-between">
					<Row>
						{tours.slice(0, 6)?.map(tour => (
							<Tour key={tour.key} tour={tour} />
						))}
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default Home;