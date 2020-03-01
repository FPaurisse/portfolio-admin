import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WorkForm from '../components/WorkForm';

const useStyles = makeStyles(() => ({
  title: {
    color: '#33B0CB',
  },
}));

const WorkCreatePage = () => {
  const classes = useStyles();

  return (
    <div className="WorkCreatePage">
      <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
        Create
      </Typography>
      <WorkForm />
    </div>
  );
};

export default WorkCreatePage;
