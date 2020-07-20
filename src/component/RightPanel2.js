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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import clsx from  'clsx';
import { PieChart } from 'react-minimal-pie-chart';
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
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));
export default function RadioButtonsGroup() {
  const classes = useStyles();
  const { salaryWorkSavingInfo, setSalaryWorkSavingInfo, handleSalaryWorkSavingInfoChange } = useContext(PaycheckCalculatorContext)
 
  const handlePaycheckPercentSavedSliderChange = (event, newValue) => {
    setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, paycheckPercentSaved: newValue });
  };
  const handleYearsSavedSliderChange = (event, newValue) => {
    setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, yearSaved: newValue });
  };
  const handlePaycheckPercentSavedBlur = () => {
    if (salaryWorkSavingInfo.salaryInput < 0) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, salaryInput: 0 });
    } else if (salaryWorkSavingInfo.salaryInput > 100) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, salaryInput: 100 });
    }
  };

  const handleYearSavedBlur = () => {
    if (salaryWorkSavingInfo.salaryInput < 0) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, salaryInput: 0 });
    } else if (salaryWorkSavingInfo.salaryInput > 100) {
        setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, salaryInput: 100 });
    }
  };

  const dataMock = [
    { title: 'One', value: 10, color: '#E38627', tooltip: 'current saving balance: $100' },
    { title: 'Two', value: 15, color: '#C13C37', tooltip: 'current saving balance: $100' },
    { title: 'Three', value: 20, color: '#6A2135', tooltip: 'current saving balance: $100' },
  ];

  const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
    fill:'white',
  };
  
  
  return (
    <div>
        <h2>SAVE MORE, EARN MORE!!</h2>
        <Divider className={classes.divider} />
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel style={{fontWeight: 'bold', fontSize: '18px', color:'black'}} htmlFor="outlined-adornment-amount">Current Saving Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={salaryWorkSavingInfo.currentSavingAmount}
                            onChange={handleSalaryWorkSavingInfoChange('currentSavingAmount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={200}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">APY Annually</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={salaryWorkSavingInfo.apyAnnually}
                            onChange={handleSalaryWorkSavingInfoChange('apyAnnually')}
                            endAdornment={<InputAdornment position="end">%</InputAdornment>}
                            labelWidth={140}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <div>
                    <Typography id="input-slider" gutterBottom>
                        Percent saved from your paycheck
                    </Typography>
                    <Slider
                        className={classes.slider}
                        value={typeof salaryWorkSavingInfo.paycheckPercentSaved === 'number' ? salaryWorkSavingInfo.paycheckPercentSaved : 0}
                        onChange={handlePaycheckPercentSavedSliderChange}
                        aria-labelledby="input-slider"
                        />
                        <div>
                            <span class="currencyinput">
                            <Input
                                className={classes.input}
                                value={salaryWorkSavingInfo.paycheckPercentSaved}
                                margin="dense"
                                onChange={handleSalaryWorkSavingInfoChange('paycheckPercentSaved')}
                                onBlur={handlePaycheckPercentSavedBlur}
                                inputProps={{
                                step: 1,
                                min: 0,
                                max: 10000000,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />%</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                    <Typography id="input-slider" gutterBottom>
                        Years to save
                    </Typography>
                    <Slider
                        className={classes.slider}
                        value={typeof salaryWorkSavingInfo.yearSaved === 'number' ? salaryWorkSavingInfo.yearSaved : 0}
                        onChange={handleYearsSavedSliderChange}
                        aria-labelledby="input-slider"
                        />
                        <div>
                            <Input
                                className={classes.input}
                                value={salaryWorkSavingInfo.yearSaved}
                                margin="dense"
                                onChange={handleSalaryWorkSavingInfoChange('yearSaved')}
                                onBlur={handleYearSavedBlur}
                                inputProps={{
                                step: 1,
                                min: 0,
                                max: 10000000,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={clsx(classes.root, classes.spacious)}>
            <Grid container spacing={1}  style={{textAlign: "center"}}>
                <Grid item xs={12}>
                    <h2>Your savings balance at the end of 2024 will be</h2>
                    <h1 style={{color: 'green'}}>$1234</h1>
                </Grid>
            </Grid>                
        </div>
        <Divider className={classes.divider} />
        <div>
          <PieChart
            data={dataMock}
            radius={25}
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={(index) => ({
              fill: 'white',
              fontSize: '5px',
              fontFamily: 'sans-serif',
            })}
            labelPosition={60}
          />
        </div>
        
    </div>
    
  );
}