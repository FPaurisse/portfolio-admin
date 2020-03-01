import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <List>
      <Link to="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>
            Portfolio
          </ListItemText>
        </ListItem>
      </Link>
    </List>
  );
};

export default Menu;
