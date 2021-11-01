const { useState, useEffect } = require("react")

const useTours = () => {
	const [tours, setTours] = useState([]);
	// const [totalPage, setTotalPage] = useState(0);
	// const [currentPage, setCurrentPage] = useState(0);
	// const size = 9
	// console.log(tours)
	
	useEffect(() => {
		fetch('http://localhost:5000/packages')
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setTours(data);

		
			})
	}, [tours]);

	return {
		tours,setTours
	};


}

export default useTours;