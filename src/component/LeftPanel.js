import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import NumberFormatCustom from './NumberFormatCustom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { PaycheckCalculatorContext } from '../context/PaycheckCalculatorContext';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		// gridGap: theme.spacing(1),
	  },
	formControl: {
    margin: theme.spacing(3),
    },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    },    
  divider: {
		margin: theme.spacing(2, 0),
		width: '70%',
	},
	select: {
		width: '120px',
		marginLeft: '10px'
	},
	allowancesDiv: {
		marginTop: '3px',
	},
	divStyle: {
		marginLeft: '20px',
	},
	formLabel: {
		margin: 10,
	},
	textField: {
    marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		marginTop: theme.spacing(2),
    width: '25ch',
  },
}));

const LeftPanel = () => {
  const classes = useStyles();
  const { salaryWorkSavingInfo, setSalaryWorkSavingInfo, handleSalaryWorkSavingInfoChange } = useContext(PaycheckCalculatorContext)

	const [open, setOpen] = React.useState(false);
	const [contribution401k, setContribution401k] = useState(salaryWorkSavingInfo.contribution401kAmount);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	const handleContribution401kBlur = e => {
		if (parseFloat(contribution401k) < 0) {
			setContribution401k(0);
			setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, contribution401kAmount: 0 });
		}
		else if (parseFloat(contribution401k) > 19500) {
			setContribution401k(19500);
			setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, contribution401kAmount: 19500 });
		}
		else {
			setContribution401k(contribution401k);
			setSalaryWorkSavingInfo({ ...salaryWorkSavingInfo, contribution401kAmount: contribution401k });
		}
	  }
	return (
		<div>
			<div className={classes.divStyle}>
			<h2>WORK INFO</h2>
		</div>
		<Divider className={classes.divider} />
		<div className={classes.divStyle}>
			<form>
				<FormControl component="fieldset" className={classes.formControl}>
					<FormLabel component="legend">Marital Status</FormLabel>
					<RadioGroup aria-label="quiz" name="quiz" value={salaryWorkSavingInfo.marialStatus} onChange={handleSalaryWorkSavingInfoChange('marialStatus')}>
						<FormControlLabel value="0" control={<Radio />} label="Single" />
						<FormControlLabel value="1" control={<Radio />} label="Married_Filing_Jointly" />
					</RadioGroup>
				</FormControl>
			</form>
		</div>
				<Divider className={classes.divider} />
					<div className={classes.divStyle}>
						<FormLabel className={classes.formLabel} component="legend">Location</FormLabel>
						<TextField
							id="outlined-number"
							label="ZIPCODE"
							className={classes.textField}
							type="number"
							InputLabelProps={{
								shrink: true,
							}}
							value={salaryWorkSavingInfo.zipCode}
							onChange={handleSalaryWorkSavingInfoChange('zipCode')}
							placeholder='94103'
							variant="outlined"
						/>
					</div>
					<Divider className={classes.divider} />
					<div className={classes.divStyle}>
						<FormLabel className={classes.formLabel} component="legend">Pay Period</FormLabel>
						<Select
							labelId="demo-controlled-open-select-label"
							id="demo-controlled-open-select"
							className={classes.select}
							open={open}
							onClose={handleClose}
							onOpen={handleOpen}
							value={salaryWorkSavingInfo.payFrequency}
							onChange={handleSalaryWorkSavingInfoChange('payFrequency')}
						>
							<MenuItem value={14}>Bi-Weekly</MenuItem>
							<MenuItem value={15}>Semi-Monthly</MenuItem>
							<MenuItem value={365}>Annually</MenuItem>
						</Select>
					</div>
					<Divider className={classes.divider} />
					<div className={classes.divStyle}>
						<FormLabel className={classes.formLabel} component="legend">Allowances</FormLabel>
						
						<TextField
							label="FEDERAL"
							id="outlined-margin-normal"
							defaultValue="1"
							className={classes.textField}
							value={salaryWorkSavingInfo.federalAllowance}
							onChange={handleSalaryWorkSavingInfoChange('federalAllowance')}
							helperText="FEDERAL allowances 0-4"
							margin="normal"
							variant="outlined"
						/>
						<TextField
							label="STATE"
							id="outlined-margin-normal"
							defaultValue="1"
							className={classes.textField}
							value={salaryWorkSavingInfo.stateAllowance}
							onChange={handleSalaryWorkSavingInfoChange('stateAllowance')}
							helperText="STATE allowances 0-4"
							margin="normal"
							variant="outlined"
						/>
						<TextField
							label="LOCAL"
							id="outlined-margin-normal"
							defaultValue="1"
							className={classes.textField}
							value={salaryWorkSavingInfo.localAllowance}
							onChange={handleSalaryWorkSavingInfoChange('localAllowance')}
							helperText="LOCAL allowances 0-4"
							margin="normal"
							variant="outlined"
						/>
					</div>
					<Divider className={classes.divider} />
					<div className={classes.divStyle}>
						<FormLabel className={classes.formLabel} component="legend">Pre-Tax Deductions</FormLabel>
						<Grid container spacing={2}>
        					<Grid item xs={5}>
								<TextField
									label="Medical Insurance"
									id="outlined-margin-normal"
									defaultValue="1"
									className={classes.textField}
									value={'$0'}
									onChange={handleSalaryWorkSavingInfoChange('medicalInsurance')}
									margin="normal"
									variant="outlined"
									style={{width: '100%'}}
									disabled={true}
									/>
								<TextField
									label="Dental Coverage"
									id="outlined-margin-normal"
									defaultValue="1"
									className={classes.textField}
									value={'$0'}
									onChange={handleSalaryWorkSavingInfoChange('dentalConverage')}
									margin="normal"
									variant="outlined"
									style={{width: '100%'}}
									disabled={true}

								/>
								<TextField
									label="Vision Insurance"
									id="outlined-margin-normal"
									defaultValue="1"
									className={classes.textField}
									value={'$0'}
									onChange={handleSalaryWorkSavingInfoChange('visionInsurance')}
									margin="normal"
									variant="outlined"
									style={{width: '100%'}}
									disabled={true}
								/>
							</Grid>
							<Grid item xs={5}>
								<ClickAwayListener onClickAway={handleContribution401kBlur}>
									<TextField
										label="401k Contribution"
										id="outlined-margin-normal"
										defaultValue="1"
										className={classes.textField}
										value={contribution401k}
										onChange={e => setContribution401k(e.target.value)}
										// helperText=" 401(k) contribution limit: $19,500(0-49)
										// 			401(k) contribution limit: $26,000(50+)"
										margin="normal"
										variant="outlined"
										style={{width: '100%'}}
										InputProps={{
											inputComponent: NumberFormatCustom,
										}}
									/>
								</ClickAwayListener>
								<TextField
									label="HSA Contribution"
									id="outlined-margin-normal"
									defaultValue="1"
									className={classes.textField}
									value={salaryWorkSavingInfo.localAllowance}
									onChange={handleSalaryWorkSavingInfoChange('hsaAmount')}
									margin="normal"
									variant="outlined"
									style={{width: '100%'}}
									disabled={true}

								/>
								<TextField
									label="FSA Contribution"
									id="outlined-margin-normal"
									defaultValue="1"
									className={classes.textField}
									value={salaryWorkSavingInfo.localAllowance}
									onChange={handleSalaryWorkSavingInfoChange('fsaAmount')}
									margin="normal"
									variant="outlined"
									style={{width: '100%'}}
									disabled={true}

								/>
							</Grid>
						</Grid>
					</div>
		</div>
  );
}

export default LeftPanel;