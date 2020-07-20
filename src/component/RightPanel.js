import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { PaycheckCalculatorContext } from '../context/PaycheckCalculatorContext';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  gridLeft: {
      textAlign: 'left',
  },
  slider: {
      width: '80%',
  },
  root: {
    flexGrow: 1,
  },
}));
export default function RadioButtonsGroup() {
  const classes = useStyles();
  const { salaryWorkSavingInfo, setSalaryWorkSavingInfo, handleSalaryWorkSavingInfoChange } = useContext(PaycheckCalculatorContext)

  const formatNumbers = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleSliderChange = (event, newValue) => {
    setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, salaryInput: newValue });
  };

  const handleBlur = () => {
    if (salaryWorkSavingInfo.salaryInput < 0) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, salaryInput: 0 });
    } else if (salaryWorkSavingInfo.salaryInput > 10000000) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, salaryInput: 100 });
    }
  };


  return (
    <div>
        <h2>SALARY INFO</h2>
        <Divider className={classes.divider} />
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup aria-label="payType" name="payType" value={salaryWorkSavingInfo.salaryType} onChange={handleSalaryWorkSavingInfoChange('salaryType')}>
                            <FormControlLabel value="0" control={<Radio />} label="Salary" />
                            <FormControlLabel value="1" control={<Radio />} label="Hourly" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={9}>
                    <div>
                    <Typography id="input-slider" gutterBottom>
                        Salary
                    </Typography>
                    <Slider
                        className={classes.slider}
                        value={typeof salaryWorkSavingInfo.salaryInput === 'number' ? salaryWorkSavingInfo.salaryInput : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        />
                        <div>
                            <span class="currencyinput">$
                            <Input
                                className={classes.input}
                                value={salaryWorkSavingInfo.salaryInput}
                                margin="dense"
                                onChange={handleSalaryWorkSavingInfoChange('salaryInput')}
                                onBlur={handleBlur}
                                inputProps={{
                                step: 1,
                                min: 0,
                                max: 10000000,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            /></span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.root}>
            <Grid container spacing={1} style={{textAlign: "center"}}>
                <Grid item xs={12}>
                    <h1>Your estimated take home is <span style={{color: 'green'}}>${salaryWorkSavingInfo.netIncome}</span></h1>
                </Grid>
            </Grid>                
        </div>
        <Divider className={classes.divider} />
        <div className={classes.root}>
            <Paper variant="outlined" style={{padding: 50}}>

                {/* TAXES */}
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h2>Where is your money going?</h2>
                    </Grid>
                    <Grid item xs={10}>
                        Gross Paycheck
                    </Grid>
                    <Grid item xs={2} justify='flex-end' direction='row' style={{fontWeight: 'bold', fontSize: '18px', color: 'green'}}>
                        ${formatNumbers(salaryWorkSavingInfo.grossPaycheck)}
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>Taxes</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">Federal Income</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">State Income</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">Local Income</FormLabel> 
                            </div>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={2} justify="flex-end">
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>{salaryWorkSavingInfo.totalTaxPercent}%</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">{formatNumbers(salaryWorkSavingInfo.federalTaxPercent)}%</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">{formatNumbers(salaryWorkSavingInfo.stateTaxPercent)}%</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">0.00%</FormLabel> 
                            </div>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={2}  justify="flex-end">
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>${salaryWorkSavingInfo.totalTaxAmount}</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">${formatNumbers(salaryWorkSavingInfo.federalTaxTotal)}</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">${formatNumbers(salaryWorkSavingInfo.stateTaxTotal)}</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">$0</FormLabel> 
                            </div>
                        </React.Fragment>
                    </Grid>
                </Grid>  
                
                {/* FICA */}
                <Divider className={classes.divider} />
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>FICA</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">Social Security</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">Medicare</FormLabel>
                            </div>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={2} justify="flex-end">
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>{salaryWorkSavingInfo.totalFicaPercent}%</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">{salaryWorkSavingInfo.socialSecurityTaxPercent}%</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">{salaryWorkSavingInfo.medicareTaxPercent}%</FormLabel>
                            </div>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={2}  justify="flex-end">
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>${salaryWorkSavingInfo.totalFicaAmount}</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">${salaryWorkSavingInfo.socialSecurityTaxAmount}</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">${salaryWorkSavingInfo.medicareTaxAmount}</FormLabel>
                            </div>
                        </React.Fragment>
                    </Grid>
                </Grid>  

                {/* PRE TAX DEDUCTION  */}
                <Divider className={classes.divider} />
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>Pre-Tax Deductions</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">Medical Insurance</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">Dental Coverage</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">Vision Insurance</FormLabel> 
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">401K</FormLabel> 
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">HSA</FormLabel> 
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">FSA</FormLabel> 
                            </div>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={2} justify="flex-end">
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>0.00%</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">0.00%</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">0.00%</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">0.00%</FormLabel> 
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">0.00%</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">0.00%</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">0.00%</FormLabel> 
                            </div>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={2}  justify="flex-end">
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '14px'}}>$0</label>
                            <div>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">$0</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">$0</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">$0</FormLabel> 
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">$0</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">$0</FormLabel>
                                <FormLabel style={{fontSize: '14px', padding: 5}} component="legend">$0</FormLabel> 
                            </div>
                        </React.Fragment>
                    </Grid>
                </Grid>  
                {/* PRE TAX DEDUCTION  */}
                <Divider className={classes.divider} />
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '16px', color: 'green'}}>Take Home Salary</label>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={2} justify="flex-end">
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '16px', color: 'green'}}>{salaryWorkSavingInfo.takeHomeSalaryTaxPercent}%</label>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={2}  justify="flex-end">
                        <React.Fragment>
                            <label style={{fontWeight: 'bold', fontSize: '16px', color: 'green'}}>${salaryWorkSavingInfo.netIncome}</label>
                        </React.Fragment>
                    </Grid>
                </Grid>  
            </Paper>              
        </div>

    </div>
    
  );
}