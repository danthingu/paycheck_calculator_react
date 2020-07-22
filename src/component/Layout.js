import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import RightPanel2 from './RightPanel2';

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
  }
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item className={classes.gridLeft} xs={3}>
          <LeftPanel />
        </Grid>
        <Grid item xs={4}>
          <RightPanel />
        </Grid>
        <Grid item xs={4} style={{marginLeft: '30px'}}>
          <RightPanel2 />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;