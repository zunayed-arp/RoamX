import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageServices = () => {


	const [services,setServices] = useState([]);
	useEffect(()=>{
		fetch('http://localhost:5000/packages')
		.then(res=>res.json())
		.then(data=>setServices(data))
	},[services])

	const handleDelete = id =>{
		const url = `http://localhost:5000/packages/${id}`;
		fetch(url,{
			method:'DELETE'
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
		})
	}

	return (
		<div>
			<h2>Manage Services</h2>
			{
				services.map(service=><div
				key={service._id}>

					<h4>Name: {service.title}</h4>
					<img src={service.img} alt="" className="img-fluid" />

					<Link to={`/packages/update/${service._id}`}>
					<button className="btn btn-primary m-2">Update</button>
					</Link>

					<button  onClick={()=>handleDelete(service._id)}className="btn btn-primary m-2">Delete</button>
				</div>
				
				)
			}
		</div>
	);
};

export default ManageServices;