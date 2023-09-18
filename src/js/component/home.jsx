import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotom from "./Jumbotom.jsx";
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
	return (
		<>

			<Navbar />
			<div className="container">
				<Jumbotom />	
			</div>

		</>
	)
}

export default Home;
