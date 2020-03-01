import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const WorksListPage = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    api.get('/works').then((result) => setWorks(result.data));
  }, []);

  const deleteWork = (id) => {
    api.delete(`works/${id}`);
  };

  return (
    <div className="WorksListPage">
      <Link to="/create">Create</Link>
      {works.length > 0 && works.map((work) => (
        <div key={work.id}>
          <p>{work.title}</p>
          <Link to={`/edit/${work.slug}`}>Edit</Link>
          <button type="button" onClick={() => deleteWork(work.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default WorksListPage;
