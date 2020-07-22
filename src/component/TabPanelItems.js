import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`a11y-tabpanel-${index}`}
        aria-labelledby={`a11y-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
export const DemoTabs = (props) => {
    const { labelId, onChange, selectionFollowsFocus, value } = props;
  
    return (
      <AppBar position="static">
        <Tabs
          aria-labelledby={labelId}
          onChange={onChange}
          selectionFollowsFocus={selectionFollowsFocus}
          value={value}
        >
          <Tab label="Savings" aria-controls="a11y-tabpanel-0" id="a11y-tab-0" />
          <Tab label="CD" aria-controls="a11y-tabpanel-1" id="a11y-tab-1" />
          <Tab label="Mutual/Index Funds" aria-controls="a11y-tabpanel-2" id="a11y-tab-2" />
        </Tabs>
      </AppBar>
    );
  }
  
  DemoTabs.propTypes = {
    labelId: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selectionFollowsFocus: PropTypes.bool,
    value: PropTypes.number.isRequired,
  };
  
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });