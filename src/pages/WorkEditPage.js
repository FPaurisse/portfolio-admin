import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import api from '../api';
import WorkForm from '../components/WorkForm';

const useStyles = makeStyles(() => ({
  title: {
    color: '#33B0CB',
  },
}));

const WorkEditPage = () => {
  const classes = useStyles();

  const { slug } = useParams();
  const [work, setWork] = useState(null);
  useEffect(() => {
    api.get(`/works/${slug}`).then((result) => setWork(result.data));
  }, [slug]);

  return (
    <div className="WorkEditPage">
      {work
        && (
          <>
            <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
              {`Edit "${work.title}"`}
            </Typography>
            <WorkForm data={work} isEdit />
          </>
        )}
    </div>
  );
};

export default WorkEditPage;
