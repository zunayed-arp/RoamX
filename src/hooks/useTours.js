const { useState, useEffect } = require("react")

const useTours = () => {
	const [tours, setTours] = useState([]);
	// const [totalPage, setTotalPage] = useState(0);
	// const [currentPage, setCurrentPage] = useState(0);
	// const size = 9
	
	useEffect(() => {
		fetch('/tours.json')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setTours(data);
				// const totalData = data.count;
				// const pages = Math.ceil(totalData/size);
				// setTotalPage(pages)
			})
	}, []);

	return {
		tours,setTours
	};


}

export default useTours;