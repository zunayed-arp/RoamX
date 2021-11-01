import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './BookingForm.css';


const BookingForm = () => {

	const { register, handleSubmit,reset } = useForm();
	// const onSubmit = data => console.log(data);

	const onSubmit = data => {
		console.log(data);

		axios.post('https://radiant-hollows-38398.herokuapp.com/booking', data)
			.then(res => {
				console.log(res)
			})
	}




	return (
	<div className="add-service">
			<h3>Booking</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
				<input {...register("email", { required: true, maxLength: 100 })} placeholder="Email" />
				<textarea {...register("description")} placeholder="description" />
			
				<input type="submit" className="btn btn-primary" />
			</form>
		</div>
	
	);
}



export default BookingForm;




	

