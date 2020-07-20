import React, { useContext } from 'react';
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
import { PaycheckCalculatorContext } from '../context/PaycheckCalculatorContext';

const useStyles = makeStyles((theme) => ({
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

//   const [value, setValue] = React.useState('1');
//   const [error, setError] = React.useState(false);

//   const handleRadioChange = (event) => {
//     setValue(event.target.value);
//     setError(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (value === '1') {
//       setError(false);
//     } else if (value === '2') {
//       setError(true);
//     } else {
//       setError(true);
//     }
// 	};
// 	const [payFrequency, setPayFrequency] = React.useState('14');
	const [open, setOpen] = React.useState(false);

// 	// const handleChange = (event) => {
// 	// 	setPayFrequency(event.target.value);
// 	// };

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	
// 	const [checked, setChecked] = React.useState([0]);

// 	const handleToggle = (value) => () => {
// 		const currentIndex = checked.indexOf(value);
// 		const newChecked = [...checked];

// 		if (currentIndex === -1) {
// 		newChecked.push(value);
// 		} else {
// 		newChecked.splice(currentIndex, 1);
// 		}

// 		setsalaryWorkSavingInfo({ ...salaryWorkSavingInfo, [prop]: event.target.value});
// 	};

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
						<FormControlLabel value="1" control={<Radio />} label="Married" />
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
					
		</div>
  );
}

export default LeftPanel;