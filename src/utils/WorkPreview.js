import React from 'react';
import workStyles from './WorkPreview.module.css';

const Work = ({ dataPreview }) => {
  const {
    baseURL,
    imagePreview,
    mockupPreview,
    primaryColorPreview,
    secondaryColorPreview,
    optionalColorPreview,
    titlePreview,
    data,
  } = dataPreview;
  return (
    <div className={workStyles.Work}>
      <div
        className={workStyles.image}
        style={{
          backgroundImage: `url(${imagePreview || baseURL + data.image})`,
        }}
      />
      <div
        className={workStyles.back}
        style={{ backgroundColor: `${optionalColorPreview || data.optionalColor}` }}
      />
      <div
        className={workStyles.backGradient}
        style={{ backgroundImage: `linear-gradient(45deg, ${primaryColorPreview || data.primaryColor} 15%, ${secondaryColorPreview || data.secondaryColor} 70%)` }}
      />
      <h1
        className={workStyles.title}
        style={{
          backgroundImage: `url(${imagePreview || baseURL + data.image})`,
        }}
      >
        {titlePreview || data.title}

      </h1>
      <div
        className={workStyles.mockup}
        style={{
          backgroundImage: `url(${mockupPreview || baseURL + data.mockup})`,
        }}
      />
    </div>
  );
};

export default Work;
