import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() => ({
  list: {
    padding: '0',
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.80)',
    display: 'flex',
  },
  active: {
    backgroundColor: '#EEEEEE',
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <Divider />
      <NavLink exact to="/" activeClassName={classes.active} className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>
            Work list
          </ListItemText>
        </ListItem>
      </NavLink>
      <NavLink to="/create" activeClassName={classes.active} className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>
            Add work
          </ListItemText>
        </ListItem>
      </NavLink>
      <Divider />
    </List>
  );
};

export default Menu;
