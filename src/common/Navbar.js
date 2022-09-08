import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<h1 className="navbar-brand">Gustavo Sotres Tools</h1>
				<Link
					to={'/'}
					className="btn btn-light"
				>See all the tools</Link>
			</div>
		</nav>
	);
}

export default Navbar;