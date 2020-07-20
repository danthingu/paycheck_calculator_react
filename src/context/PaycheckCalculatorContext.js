import React, {createContext, useState, useEffect} from 'react'
import { calculatePaycheck } from '../api/services';

export const PaycheckCalculatorContext = createContext();

const PaycheckCalculatorContextProvider = props => {
    const [salaryWorkSavingInfo, setSalaryWorkSavingInfo] = React.useState({
        marialStatus: '0',
        zipCode: '94103',
        payFrequency: 365,
        federalAllowance: '0',
        stateAllowance: '0',
        localAllowance: '0',
        salaryType: '0',
        salaryInput: '80000',
        currentSavingAmount: '6000',
        apyAnnually: '1',
        paycheckPercentSaved: '40',
        yearSaved: '5',
        federalTaxTotal: '',
        stateTaxTotal: '',
        federalTaxPercent: '',
        stateTaxPercent: '',
        socialSecurityTaxAmount: '',
        socialSecurityTaxPercent: '',
        medicareTaxPercent: '',
        medicareTaxAmount: '',
        netIncome: '',
        totalTaxAmount: '', 
        totalFicaAmount: '',
        totalTaxPercent: '',
        totalFicaPercent: '',
        takeHomeSalaryTaxPercent: '',
        grossPaycheck: '',
      });
    
    const handleSalaryWorkSavingInfoChange = (prop) => (event) => {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, [prop]: event.target.value });
    };
    

    useEffect(() => {
        console.log(JSON.stringify(salaryWorkSavingInfo, null, 2));
        if (salaryWorkSavingInfo.zipCode.length === 5)
            calculatePaycheck(salaryWorkSavingInfo).then((resp) => {
                setSalaryWorkSavingInfo(resp.salaryWorkSavingInfo);
            })
            .catch(err => console.log(err));
    }, [JSON.stringify(salaryWorkSavingInfo)])

    

    return (
        <div>
            <PaycheckCalculatorContext.Provider value={{salaryWorkSavingInfo, setSalaryWorkSavingInfo, handleSalaryWorkSavingInfoChange}}>
                {props.children}
            </PaycheckCalculatorContext.Provider>
        </div>
    )
}

export default PaycheckCalculatorContextProvider
