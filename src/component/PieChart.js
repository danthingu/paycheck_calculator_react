import React, { useContext } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import { PaycheckCalculatorContext } from '../context/PaycheckCalculatorContext';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const PieChart = () => {
	const { salaryWorkSavingInfo, setSalaryWorkSavingInfo, handleSalaryWorkSavingInfoChange } = useContext(PaycheckCalculatorContext)

	const options = {
		exportEnabled: true,
		animationEnabled: true,
		title: {
			text: "Saving and Investing Summary"
		},
		data: [{
			type: "pie",
			startAngle: 75,
			toolTipContent: "<b>{label}</b>: ${y}",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 16,
			indexLabel: "{label} - ${y}",
			dataPoints: [
				{ y: parseFloat(salaryWorkSavingInfo.salaryInput.replace(/,/g, '')), label: "Gross Salary" },
				{ y: parseFloat(salaryWorkSavingInfo.totalTaxAmount.replace(/,/g, '')), label: "Taxes" },
				{ y: parseFloat(salaryWorkSavingInfo.totalFicaAmount.replace(/,/g, '')), label: "Fica" },
				{ y: parseFloat(salaryWorkSavingInfo.netIncome.replace(/,/g, '')), label: "Take Home Salary" },
				{ y: parseFloat(salaryWorkSavingInfo.futureCompoundInterest.replace(/,/g, '')), label: "Investment" }
			]
		}]
	}
	
	return (
	<div>
		<CanvasJSChart options = {options} 
			/* onRef={ref => this.chart = ref} */
		/>
		{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
	</div>
	);
}

export default PieChart;