import React from 'react';
import { Container, Row } from "react-bootstrap";
import useTours from '../../../hooks/useTours';
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import bgImage from '../../../assets/images/sectionBg.png';
import Tour from '../Tour/Tour';
import useAuth from '../../../hooks/useAuth';

const Tours = () => {
	const { tours } = useAuth();
	return (
		<div className="py-5">


			<div className="text-center text-white">
				<Slide left>
					<h1> Our All Courses</h1>
				</Slide>

				<Slide right>
					<p className="mb-0">
						Here you can find our all latest courses. Choose some of them and
						try to grow up your skills.
					</p>
				</Slide>
			</div>


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


// style = {{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}