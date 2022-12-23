import CompoundInterestCalculator from "../pages/tools/CompoundInterestCalculator/CompoundInterestCalculator"
import ClassPlanner from "../pages/tools/ClassPlanner/ClassPlanner"

const AvailableTools = [
	{
		"name": "Compound Interest Calculator",
		"description": "A tool to help you calculate compound interest",
		"image_url": "./img/thumbnails/compund_interest.png",
		"tags": [
			"Finance",
		],
		"route": "CompoundInterestCalculator",
		"component": CompoundInterestCalculator
	},
	{
		"name": "Class Planner",
		"description": "A tool that help you to see all available schedules",
		"image_url": "./img/thumbnails/compund_interest.png",
		"tags": [
			"School",
			"Organizer",
			"ITESO"
		],
		"route": "ClassPlanner",
		"component": ClassPlanner
	},
]

export default AvailableTools;