import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StyledRadio from './StyledRadio';
import { PaycheckCalculatorContext } from '../context/PaycheckCalculatorContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 64,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const SavingsAccounts = ({setApyYearly}) => {
  const classes = useStyles();
  const [savingsRadioButton, setSavingsRadioButton] = useState();

  const { salaryWorkSavingInfo, setSalaryWorkSavingInfo } = useContext(PaycheckCalculatorContext);
  const marcusRates = '1.10';
  const boaRates = '1.00';

  // useEffect(() => {
  //   console.log(savingsRadioButton);
  //   if (savingsRadioButton === '0') {
  //     setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, apyAnnually: amexRate });
  //   } else if (savingsRadioButton === '1') {
  //     setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, apyAnnually: allyRate });
  //   }
  // }, [savingsRadioButton])

  const handleRadioChange = e => {
    if (e.target.value === '0') {
      setSavingsRadioButton('0')
      setApyYearly(marcusRates)
    }
    else if (e.target.value === '1') {
      setSavingsRadioButton('1')
      //setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, apyAnnually: allyRate });
      setApyYearly(boaRates)

    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item xs={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <FormControlLabel value="0" control={<StyledRadio />} style={{margin: '5px'}} checked={savingsRadioButton === '0'} onChange={handleRadioChange}/>
            </Grid>
            <Grid item xs={3}>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="/marcus.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={4} sm container>
                <Grid item xs style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                    fontWeight: 'bold', fontSize: '30px'}}>
                            {marcusRates}%
                    </div>
                </Grid>
          </Grid>
          <Grid item xs={4} sm container>
                <Grid item xs style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                    fontWeight: 'bold', fontSize: '14px'}}>
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                Learn more
                            </Button>
                    </div>
                </Grid>
          </Grid>
          
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <FormControlLabel value="1" control={<StyledRadio />} style={{margin: '5px'}} checked={savingsRadioButton === '1'} onChange={handleRadioChange}/>
            </Grid>
            <Grid item xs={3}>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="/boa.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={4} sm container>
                <Grid item xs style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                    fontWeight: 'bold', fontSize: '30px'}}>
                            {boaRates}%
                    </div>
                </Grid>
          </Grid>
          <Grid item xs={4} sm container>
                <Grid item xs style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                    fontWeight: 'bold', fontSize: '14px'}}>
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                Learn more
                            </Button>
                    </div>
                </Grid>
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
            <Grid item xs={4}>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="/ally.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={4} sm container>
                <Grid item xs style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                    fontWeight: 'bold', fontSize: '30px'}}>
                            1.00%
                    </div>
                </Grid>
          </Grid>
          <Grid item xs={4} sm container>
                <Grid item xs style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                    fontWeight: 'bold', fontSize: '14px'}}>
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                Learn more
                            </Button>
                    </div>
                </Grid>
          </Grid>
        </Grid> */}
      </Paper>
    </div>
  );
}

export default SavingsAccounts;