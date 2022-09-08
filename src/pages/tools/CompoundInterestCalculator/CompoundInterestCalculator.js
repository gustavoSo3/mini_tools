import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import "./CompoundInterestCalculator.css";

var formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

function CompoundInterestCalculator() {

	const [startAmount, setStartAmount] = useState(100);
	const [yearlyInterestRate, setYearlyInterestRate] = useState(0.1);
	const [years, setYears] = useState(10);
	const [graphData, setGraphData] = useState(generateData({
		start_amount: startAmount,
		y_interest_rate: yearlyInterestRate,
		years: years
	}));

	function generateData(input) {
		const date = new Date();
		var data = [];

		let limit = date.getFullYear() + input.years;

		let amount = input.start_amount;

		for (let i = date.getFullYear(); i < limit; i++) {
			let current_year = {
				year: `${i}`, amount: amount, USD: formatter.format(amount),
			}
			data.push(current_year);
			amount = amount * (1 + input.y_interest_rate);
			amount = Number(parseFloat(amount).toFixed(2));
		}
		return data;
	}

	function handleStartAmount(event) {
		setStartAmount(parseInt(event.target.value));

		setGraphData(generateData({
			start_amount: startAmount,
			y_interest_rate: yearlyInterestRate,
			years: years
		}))
	}
	function handleYearlyInterestRate(event) {
		setYearlyInterestRate(parseFloat(event.target.value));

		setGraphData(generateData({
			start_amount: startAmount,
			y_interest_rate: yearlyInterestRate,
			years: years
		}))
	}
	function handleYears(event) {
		setYears(parseInt(event.target.value));

		setGraphData(generateData({
			start_amount: startAmount,
			y_interest_rate: yearlyInterestRate,
			years: years
		}))
	}


	return (
		<div>
			<h2>
				Compound Interest Calculator
			</h2>
			<div className="container">
				<form className="container inputs">
					<div className="input-group">
						<span className="input-group-text">Start amount (USD)</span>
						<input type="text" className="form-control" placeholder="E.g. 100" onKeyUp={handleStartAmount} />
					</div>
					<div className="input-group">
						<span className="input-group-text">Yearly interest rate</span>
						<input type="text" className="form-control" placeholder="E.g. 0.1" onKeyUp={handleYearlyInterestRate} />
					</div>

					<div className="input-group">
						<span className="input-group-text">For {years} years</span>
						<input type="text" className="form-control" placeholder="E.g. 10" onKeyUp={handleYears} />
					</div>
				</form >
				<div className="container">
					<ResponsiveContainer width="100%" height={500}>
						<LineChart data={graphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
							<Line type="monotone" dataKey="amount" stroke="#8884d8" formatter={(value, name, prop) => [formatter.format(value), "USD"]} />
							<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
							<XAxis dataKey="year" />
							<YAxis dataKey="amount" />
							<Tooltip />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div >
	)
}

export default CompoundInterestCalculator;