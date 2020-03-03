import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import api from '../api';
import Header from '../components/Header';

const useStyles = makeStyles(() => ({
  editIcon: {
    color: '#33B0CB',
  },
}));

const WorksListPage = () => {
  const classes = useStyles();

  const [works, setWorks] = useState([]);
  useEffect(() => {
    api.get('/works').then((result) => setWorks(result.data));
  }, []);

  const deleteWork = (id) => {
    api.delete(`works/${id}`);
  };

  return (
    <div className="WorksListPage">
      <Header title="Works" />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Context</TableCell>
            <TableCell align="right" />
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {works.map((work) => (
            <TableRow key={work.id}>
              <TableCell>{work.title}</TableCell>
              <TableCell>{work.context}</TableCell>
              <TableCell align="right">
                <Link to={`/edit/${work.slug}`}>
                  <IconButton color="primary" aria-label="Edit">
                    <EditIcon className={classes.editIcon} />
                  </IconButton>
                </Link>
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label="Delete" onClick={() => deleteWork(work.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WorksListPage;
