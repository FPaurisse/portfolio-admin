import React from 'react';
import workStyles from './WorkPreview.module.css';

const Work = ({ dataPreview }) => (
  <div className={workStyles.Work}>
    <div
      className={workStyles.image}
      style={{
        backgroundImage: `url(${dataPreview.imagePreview ? dataPreview.imagePreview : dataPreview.baseURL + dataPreview.data.image})`,
      }}
    />
    <div
      className={workStyles.back}
      style={{ backgroundColor: `${dataPreview.optionalColorPreview ? dataPreview.optionalColorPreview : dataPreview.data.optionalColor}` }}
    />
    <div
      className={workStyles.backGradient}
      style={{ backgroundImage: `linear-gradient(45deg, ${dataPreview.primaryColorPreview ? dataPreview.primaryColorPreview : dataPreview.data.primaryColor} 15%, ${dataPreview.secondaryColorPreview ? dataPreview.secondaryColorPreview : dataPreview.data.secondaryColor} 70%)` }}
    />
    <h1
      className={workStyles.title}
      style={{
        backgroundImage: `url(${dataPreview.imagePreview ? dataPreview.imagePreview : dataPreview.baseURL + dataPreview.data.image})`,
      }}
    >
      {dataPreview.titlePreview ? dataPreview.titlePreview : dataPreview.data.title}

    </h1>
    <div
      className={workStyles.mockup}
      style={{
        backgroundImage: `url(${dataPreview.mockupPreview ? dataPreview.mockupPreview : dataPreview.baseURL + dataPreview.data.mockup})`,
      }}
    />
  </div>
);

export default Work;
