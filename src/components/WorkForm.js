import React from 'react';
import api from '../api';

const WorkForm = ({ data }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (data) {
      api.put(`/works/${data.slug}`, formData);
    } else {
      api.post('/works', formData);
    }
  };

  const baseURL = process.env.REACT_APP_API_URL || '';

  return (
    <form
      className="WorkForm"
      encType="multipart/form-data"
      onSubmit={formSubmit}
    >
      <input type="text" name="title" defaultValue={data && data.title} />
      <textarea name="context" defaultValue={data && data.context} />
      <input name="tools" type="text" defaultValue={data && data.tools} />
      <input name="categories" type="text" defaultValue={data && data.categories} />
      <input name="primaryColor" type="text" defaultValue={data && data.primaryColor} />
      <input name="secondaryColor" type="text" defaultValue={data && data.secondaryColor} />
      <input name="optionalColor" type="text" defaultValue={data && data.optionalColor} />
      <input name="image" type="file" defaultValue={data && data.image} />
      {data && <img alt="Work background" src={data && baseURL + data.image} />}
      <input name="mockup" type="file" defaultValue={data && data.mockup} />
      {data && <img alt="Work mockup" src={data && baseURL + data.mockup} />}
      <button type="submit">{data ? 'Update' : 'create'}</button>
    </form>
  );
};

export default WorkForm;
