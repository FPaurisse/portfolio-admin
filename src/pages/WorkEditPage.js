import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import WorkForm from '../components/WorkForm';

const WorkEditPage = () => {
  const { slug } = useParams();
  const [work, setWork] = useState(null);
  useEffect(() => {
    api.get(`/works/${slug}`).then((result) => setWork(result.data[0]));
  }, [slug]);

  return (
    <div className="WorkEditPage">
      {work && (
        `Edit ${work.title}`
      )}
      <WorkForm data={work} />
    </div>
  );
};

export default WorkEditPage;
