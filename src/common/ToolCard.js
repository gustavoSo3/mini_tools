import React from 'react';
import { Link } from "react-router-dom";

import "./ToolCard.css";

function ToolCard(props) {
	return (
		<div className="card mb-3">
			<div className='row g-0'>
				<div className='col-md-4'>
					<img src={props.tool.image_url} className="card-img-top" alt={props.tool.name} />
				</div>
				<div className='col-md-8'>
					<div className="card-body">
						<h3 className="card-title">{props.tool.name}</h3>
						{
							props.tool.tags.map((tag, key) => {
								return <span key={key} className="badge rounded-pill text-bg-primary">{tag}</span>
							})
						}
						<p className="card-text">{props.tool.description}</p>
					</div>
				</div>
				<div className="card-footer align-self-end">
					<Link
						to={props.tool.route}
						className="btn btn-outline-primary d-grid"
					>Check it out</Link>
				</div>
			</div>
		</div>
	)
}

export default ToolCard;