import React, { useState, useContext } from 'react';
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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import clsx from  'clsx';
import { PaycheckCalculatorContext } from '../context/PaycheckCalculatorContext';
import PieChart from './PieChart';
import {TabPanel, DemoTabs} from './TabPanelItems';
import SavingsAccounts from './SavingsAccounts';
import CDAccounts from './CDAccounts';

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
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));
export default function RadioButtonsGroup() {
  const classes = useStyles();
  const { salaryWorkSavingInfo, setSalaryWorkSavingInfo, handleSalaryWorkSavingInfoChange } = useContext(PaycheckCalculatorContext)

  const [ initialDeposit, setInitialDeposit ] = useState(salaryWorkSavingInfo.currentSavingAmount);
  const [ apyYearly, setApyYearly ] = useState(salaryWorkSavingInfo.apyAnnually);
  const [ percentSavedFromPayCheck, setPercentSavedFromPayCheck ] = useState(salaryWorkSavingInfo.paycheckPercentSaved);
  const [ yearsSaved, setYearsSaved ] = useState(salaryWorkSavingInfo.yearSaved)
  const [ futureCompoundInterestDisplay, setFutureCompoundInterestDisplay] = useState(salaryWorkSavingInfo.futureCompoundInterest)
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabValueChange = (event, newValue) => {
    setTabValue(newValue);
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleInitialDepositBlur = e => {
    setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, currentSavingAmount: initialDeposit });
  }

  const handleApyYearlyBlur = () => {
    setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, apyAnnually: apyYearly });
  }

  const handlePaycheckPercentSavedSliderChange = (event, newValue) => {
    
    setPercentSavedFromPayCheck(newValue)
  };
  const handleYearsSavedSliderChange = (event, newValue) => {
    setYearsSaved(newValue);
  };

  const handlePaycheckPercentSavedBlur = (e) => {
      if (percentSavedFromPayCheck < 0) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, paycheckPercentSaved: 0 });
    } else if (percentSavedFromPayCheck > 100) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, paycheckPercentSaved: 100 });
    } else {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, paycheckPercentSaved: percentSavedFromPayCheck });
    }
  };

  const handleYearSavedBlur = (e) => {
    if (yearsSaved < 0) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, yearSaved: 0 });
    } else if (yearsSaved > 100) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, yearSaved: 100 });
    } else {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, yearSaved: yearsSaved });
    }
  };
  return (
    <div>
        <h2>SAVE MORE, EARN MORE!!</h2>
        <Divider className={classes.divider} />
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel style={{fontWeight: 'bold', fontSize: '18px', color:'black'}} htmlFor="outlined-adornment-amount">Current Saving Amount</InputLabel>
                        <ClickAwayListener onClickAway={handleInitialDepositBlur}>
                          <OutlinedInput
                              id="outlined-adornment-amount"
                              value={initialDeposit}
                              onChange={e => setInitialDeposit(e.target.value)}
                              startAdornment={<InputAdornment position="start">$</InputAdornment>}
                              labelWidth={200}
                          />
                        </ClickAwayListener>
                        
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">APY Annually</InputLabel>
                        <ClickAwayListener onClickAway={handleApyYearlyBlur}>
                          <OutlinedInput
                              id="outlined-adornment-amount"
                              value={apyYearly}
                              onChange={e => setApyYearly(e.target.value)}
                              endAdornment={<InputAdornment position="end">%</InputAdornment>}
                              labelWidth={140}
                          />
                        </ClickAwayListener>
                       
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <div>
                    <Typography id="input-slider" gutterBottom>
                        Percent saved from your take home paycheck 
                    </Typography>
                    {/* <ClickAwayListener onClickAway={handlePaycheckPercentSavedBlur}>
                      <Slider
                          className={classes.slider}
                          value={percentSavedFromPayCheck}
                          onChange={handlePaycheckPercentSavedSliderChange}
                          aria-labelledby="input-slider"
                          />
                    </ClickAwayListener> */}
                    
                        <div>
                          <Grid container spacing={3}>
                              <Grid item xs={4}>
                              <ClickAwayListener onClickAway={handlePaycheckPercentSavedBlur}>

                                <span class="currencyinput">
                                <Input
                                    className={classes.input}
                                    value={percentSavedFromPayCheck}
                                    margin="dense"
                                    style={{width:'46px'}}
                                    onChange={e => setPercentSavedFromPayCheck(e.target.value)}
                                    onBlur={() => handlePaycheckPercentSavedBlur}
                                    inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                    }}
                                />%</span>
                              </ClickAwayListener>
                            </Grid>
                            <Grid item xs={4}>
                                <div style={{color: 'blue', fontWeight: 'bold', paddingTop: 5, paddingRight: '20px'}}>${salaryWorkSavingInfo.monthlyPutAsideFromPaycheck}/month</div>
                            </Grid>
                          </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                    <Typography id="input-slider" gutterBottom>
                        Years to save
                    </Typography>
                    {/* <ClickAwayListener onClickAway={handleYearSavedBlur}>
                      <Slider
                          className={classes.slider}
                          value={yearsSaved}
                          onChange={handleYearsSavedSliderChange}
                          aria-labelledby="input-slider"
                          />
                    </ClickAwayListener> */}
                    
                        <div>
                        <ClickAwayListener onClickAway={handleYearSavedBlur}>
                            <Input
                                className={classes.input}
                                value={yearsSaved}
                                style={{maxWidth: '60px'}}
                                margin="dense"
                                onChange={e => setYearsSaved(e.target.value)}
                                onBlur={() => handleYearSavedBlur}
                                inputProps={{
                                step: 1,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                          </ClickAwayListener>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={clsx(classes.root, classes.spacious)}>
            <Grid container spacing={1}  style={{textAlign: "center"}}>
                <Grid item xs={12}>
                    {/* <h6>Your savings balance at the end of {salaryWorkSavingInfo.yearFuture} will be</h6>
                    <h6 style={{color: 'green'}}>${salaryWorkSavingInfo.futureCompoundInterest}</h6> */}
                    <div style={{fontWeight: 'bold', fontSize: '22px'}}>Your savings balance at the end of {salaryWorkSavingInfo.yearFuture} will be</div>
                    <div style={{color: 'green', fontWeight: 'bold', fontSize: '22px'}}>${salaryWorkSavingInfo.futureCompoundInterest}</div>
                </Grid>
            </Grid>                
        </div>
        <Divider className={classes.divider} />
        <div>
          <PieChart />
        </div>
        <Divider className={classes.divider} />
        <div style={{marginTop: '20px', textAlign: 'center'}}>
          <Typography id="demo-a11y-tabs-manual-label">
          <span style={{fontWeight: 'bold', fontSize: '24px', fontFamily: 'fantasy'}}>Places to save your extra money!</span>
            </Typography>
            <DemoTabs labelId="demo-a11y-tabs-manual-label" onChange={handleTabValueChange} value={tabValue} />
            <TabPanel value={tabValue} index={0}>
              <SavingsAccounts setApyYearly={setApyYearly} />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <CDAccounts setApyYearly={setApyYearly}/>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              Item Three
            </TabPanel>
        </div>
       
        
    </div>
    
  );
}