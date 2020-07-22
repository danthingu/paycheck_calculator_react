import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StyledRadio from './StyledRadio';

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
    maxWidth: '80%',
    maxHeight: '80%',
  },
}));

const CDAccounts = () => {
  const classes = useStyles();
  const [savingsRadioButton, setSavingsRadioButton] = useState('0');

  useEffect(() => {
    console.log(savingsRadioButton);
  }, [savingsRadioButton])
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item xs={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <FormControlLabel value="0" control={<StyledRadio />} style={{margin: '5px'}} checked={savingsRadioButton === '0'} onChange={e => setSavingsRadioButton(e.target.value)}/>
            </Grid>
            <Grid item xs={3}>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="/amex.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={4} sm container>
                <Grid item xs style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                    fontWeight: 'bold', fontSize: '30px'}}>
                            1.01%
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
                <FormControlLabel value="1" control={<StyledRadio />} style={{margin: '5px'}} checked={savingsRadioButton === '1'} onChange={e => setSavingsRadioButton(e.target.value)}/>
            </Grid>
            <Grid item xs={3}>
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

export default CDAccounts;