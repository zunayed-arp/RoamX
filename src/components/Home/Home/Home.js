import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AirTickets from '../../AirTickets/AirTickets';
import Services from '../../Services/Services';
import Tour from '../../Tours/Tour/Tour';
import Banner from '../Banner/Banner';


const Home = () => {
	const { tours } = useAuth();
	return (
		<div>
			<Banner></Banner>


			<Container>
				<div className="my-3 d-flex flex-wrap justify-content-between">
					<Row>
						<h3>RoamX Packages</h3>
						{tours.map(tour => (
							<Tour key={tour._id} tour={tour} />
						))}
					</Row>
				</div>
			</Container>
			<AirTickets></AirTickets>
			<Services></Services>


		</div>
	);
};

export default Home;