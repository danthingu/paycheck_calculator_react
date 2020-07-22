import React, { useContext } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import { PaycheckCalculatorContext } from '../context/PaycheckCalculatorContext';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const PieChart = () => {
	const { salaryWorkSavingInfo } = useContext(PaycheckCalculatorContext)
	const savedPercent = salaryWorkSavingInfo.paycheckPercentSaved / 100.00
	const remainingPercent = (100.00 - parseFloat(salaryWorkSavingInfo.paycheckPercentSaved))/100.00;
	const options = {
		exportEnabled: true,
		animationEnabled: true,
		title: {
			text: "Saving and Investment Summary"
		},
		data: [{
			type: "pie",
			startAngle: 75,
			toolTipContent: "<b>{label}</b>: ${y}",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 12,
			indexLabel: "{label} - ${y}",
			dataPoints: [
				{ y: parseFloat(salaryWorkSavingInfo.totalTaxAmount.replace(/,/g, '')), label: "Taxes" },
				{ y: parseFloat(salaryWorkSavingInfo.netIncome.replace(/,/g, ''))*remainingPercent, label: "Remaining cash" },
				{ y: parseFloat(salaryWorkSavingInfo.totalFicaAmount.replace(/,/g, '')), label: "Fica" },
				{ y: parseFloat(salaryWorkSavingInfo.netIncome.replace(/,/g, ''))*savedPercent, label: "Savings" },
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