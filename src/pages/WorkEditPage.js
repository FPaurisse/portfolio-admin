import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

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
    </div>
  );
};

export default WorkEditPage;
