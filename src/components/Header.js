import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  Header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#33B0CB',
  },
}));

const Header = ({
  title,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
        {title}
      </Typography>
    </div>
  );
};

export default Header;
