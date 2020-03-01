import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import api from '../api';
import WorkForm from '../components/WorkForm';

const WorkEditPage = () => {
  const { slug } = useParams();
  const [work, setWork] = useState(null);
  useEffect(() => {
    api.get(`/works/${slug}`).then((result) => setWork(result.data[0]));
  }, [slug]);

  return (
    work
      ? (
        <div className="WorkEditPage">
          {`Edit ${work.title}`}
          <WorkForm data={work} />
        </div>
      )
      : <Redirect to="/" />

  );
};

export default WorkEditPage;
