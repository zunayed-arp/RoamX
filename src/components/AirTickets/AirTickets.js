import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const AirTickets = () => {

	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		const url = `http://localhost:5000/airticket`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setTickets(data)
				console.log(data)
			})
	}, [])
	return (
		<>

			<h1>Air Tickets</h1>
			<Row>
				{
					tickets.map(ticket =>

						<Col>
							<div class="card  justify-content-center align-items-center" style={{ width: '18rem' }} >
								<img src={ticket?.img} className="card-img-top" alt="" />
								<div class="card-body">
									<h5 class="card-title">{ticket?.name}</h5>
								</div>
							</div>
						</Col>


					)
				}
			</Row>

		</>
	);
};




export default AirTickets;