import React from 'react';
import { Outlet } from 'react-router-dom';

import ToolCard from '../common/ToolCard';

function ToolShowcase(props) {
	return (
		<div className="container">
			<h2>Available Tools</h2>
			{
				props.availableTools.map((tool, key) => {
					return < ToolCard key={key} tool={tool} />
				})
			}
			<Outlet />
		</div >
	)
}

export default ToolShowcase;