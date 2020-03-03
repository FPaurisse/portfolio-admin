import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    color: '#33B0CB',
    marginBottom: '1rem',
  },
}));

const Header = ({
  title,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
        <ArrowRightIcon />
        {' '}
        {title}
      </Typography>
    </div>
  );
};

export default Header;
