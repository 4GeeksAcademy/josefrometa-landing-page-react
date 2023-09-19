import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotom from "./Jumbotom.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	const arr=[ 0, 1, 2, 3]
	return (
		<>

			<Navbar />
			<div className="container">
				<Jumbotom />	
			<div className="row">
			{
				arr.map((index, item)=>{
					return(
						<Cards key={index} item={item}/>
					)
					
				}
				)
			}
			</div>
			</div>
			<Footer/>
		</>
	)
}

export default Home;
