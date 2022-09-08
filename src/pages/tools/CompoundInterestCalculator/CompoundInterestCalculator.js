import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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
			amount = amount + (amount * input.y_interest_rate);
			amount = Number(parseFloat(amount).toFixed(2));
		}
		console.log(data)
		return data;
	}

	function handleStartAmount(event) {
		console.log(event.target.value);
		setStartAmount(parseInt(event.target.value));

		setGraphData(generateData({
			start_amount: startAmount,
			y_interest_rate: yearlyInterestRate,
			years: years
		}))
	}
	function handleYearlyInterestRate(event) {
		console.log(event.target.value);
		setYearlyInterestRate(parseFloat(event.target.value));

		setGraphData(generateData({
			start_amount: startAmount,
			y_interest_rate: yearlyInterestRate,
			years: years
		}))
	}
	function handleYears(event) {
		console.log(event.target.value);
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
				<div className="input-group">
					<span className="input-group-text">Start amount (USD)</span>
					<input type="text" className="form-control" placeholder="E.g. 100" onKeyUp={handleStartAmount} />

					<span className="input-group-text">Yearly interest rate</span>
					<input type="text" className="form-control" placeholder="E.g. 0.1" onKeyUp={handleYearlyInterestRate} />

					<span className="input-group-text">For {years} years</span>
					<input type="text" className="form-control" placeholder="E.g. 10" onKeyUp={handleYears} />
				</div >
				<LineChart width={700} height={500} data={graphData} className="graph">
					<Line type="monotone" dataKey="amount" stroke="#8884d8" formatter={(value, name, prop) => [formatter.format(value), "USD"]} />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="year" />
					<YAxis dataKey="amount" />
					<Tooltip />
				</LineChart>
			</div>
		</div >
	)
}

export default CompoundInterestCalculator;