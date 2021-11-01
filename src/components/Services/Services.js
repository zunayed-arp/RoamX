import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Services = () => {

	const [services, setServices] = useState([]);

	useEffect(() => {
		const url = `http://localhost:5000/services`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setServices(data)
				console.log(data)
			})
	}, [])
	return (
		<>

			<h1>More Services From Us</h1>
			<Row>
				{
					services.map(service =>

						<Col>
							<div class="card  justify-content-center align-items-center" style={{ width: '18rem' }} >
								<img src={service?.img} className="card-img-top" alt="" />
								<div class="card-body">
									<h5 class="card-title">{service?.name}</h5>
								</div>
							</div>
						</Col>


					)
				}
			</Row>

		</>
	);
};

export default Services;