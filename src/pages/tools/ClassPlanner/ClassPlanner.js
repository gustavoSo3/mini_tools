import { React, useState } from 'react';


function ClassPlanner() {

	const [classesData, setClassesData] = useState([]);

	function loadData(e) {

		e.preventDefault()

		const selectedFile = document.getElementById('dataFile').files[0];
		const fileReader = new FileReader();

		fileReader.readAsText(selectedFile, "UTF-8");
		fileReader.onload = e => {
			setClassesData(JSON.parse(e.target.result))
		};

	}

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<h3 className="navbar-brand">Class Planner</h3>
					<div></div>
					<input className="form-control" type="file" id="dataFile" onChange={loadData} accept="application/JSON" />
					<div>
					</div>
				</div>
			</nav>

			<div className="row">
			</div>
		</div>
	)
}

export default ClassPlanner;