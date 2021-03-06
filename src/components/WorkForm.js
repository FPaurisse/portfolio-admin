import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import useLocalStorage from 'react-use-localstorage';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import WorkPreview from '../utils/WorkPreview';
import api from '../api';

const useStyles = makeStyles((theme) => ({
  WorkForm: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  inputFile: {
    display: 'none',
  },
  pickers: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  preview: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    padding: '30px',
  },
  submit: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  submitButton: {
    backgroundColor: '#33B0CB',
  },
  uploadLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '18px',
    marginLeft: '10px',
  },
}));

window.onload = () => { localStorage.clear(); };

const WorkForm = ({ data }) => {
  const classes = useStyles();

  const [redirectHome, setRedirectHome] = useState(false);

  const [titlePreview, setTitlePreview] = useLocalStorage('title', '');
  const [primaryColorPreview, setPrimaryColorPreview] = useLocalStorage('primaryColor', '');
  const [secondaryColorPreview, setSecondaryColorPreview] = useLocalStorage('secondaryColor', '');
  const [optionalColorPreview, setOptionalColorPreview] = useLocalStorage('optionalColor', '');
  const [imagePreview, setImagePreview] = useLocalStorage('image', '');
  const [mockupPreview, setMockupPreview] = useLocalStorage('mockup', '');
  const [widthPreview, setWidthPreview] = useLocalStorage('width', data && data.width ? data.width : '100');
  const [heightPreview, setHeightPreview] = useLocalStorage('height', data && data.height ? data.height : '100');

  const imageStorage = (e, file) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = (event) => {
        if (file === 'image') {
          setImagePreview(event.target.result);
        } else {
          setMockupPreview(event.target.result);
        }
      };
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (data) {
      await api.put(`/works/${data.slug}`, formData);
    } else {
      await api.post('/works', formData);
    }
    window.onload = () => { localStorage.clear(); };
    setRedirectHome(true);
  };

  const baseURL = process.env.REACT_APP_API_URL || '';

  return (
    <form
      className={classes.WorkForm}
      encType="multipart/form-data"
      onSubmit={formSubmit}
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="title"
          name="title"
          label="Title"
          defaultValue={data && data.title}
          variant="outlined"
          onChange={(e) => setTitlePreview(e.target.value)}
          fullWidth
        />
      </div>
      <div>
        <TextField
          required
          id="context"
          name="context"
          label="Context"
          multiline
          fullWidth
          rows="4"
          defaultValue={data && data.context}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          required
          id="tools"
          name="tools"
          label="Tools"
          defaultValue={data && data.tools}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <TextField
          required
          id="categories"
          name="categories"
          label="Categories"
          defaultValue={data && data.categories}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className={classes.pickers}>
        <TextField
          required
          id="primaryColor"
          name="primaryColor"
          label="Primary color"
          defaultValue={data && data.primaryColor}
          variant="outlined"
          onChange={(e) => setPrimaryColorPreview(e.target.value)}
          fullWidth
        />
        <TextField
          required
          id="secondaryColor"
          name="secondaryColor"
          label="Secondary color"
          defaultValue={data && data.secondaryColor}
          variant="outlined"
          onChange={(e) => setSecondaryColorPreview(e.target.value)}
          fullWidth
        />
        <TextField
          required
          id="optionalColor"
          name="optionalColor"
          label="Optional color"
          defaultValue={data && data.optionalColor}
          variant="outlined"
          onChange={(e) => setOptionalColorPreview(e.target.value)}
          fullWidth
        />
      </div>
      <div className={classes.buttons}>
        <ButtonGroup fullWidth>
          <Button>
            <label htmlFor="image" className={classes.uploadLabel}>
              Upload background *
              {((data && data.image) || imagePreview)
                && (
                <div className={classes.icons}>
                  <PhotoCameraIcon className={classes.icon} />
                </div>
                )}
              <input
                accept="image/*"
                className={classes.inputFile}
                id="image"
                name="image"
                type="file"
                onChange={(e) => imageStorage(e, 'image')}
              />
              <input type="hidden" required defaultValue={data && data.image ? data.image : imagePreview} />
            </label>
          </Button>
          <Button>
            <label htmlFor="mockup" className={classes.uploadLabel}>
              Upload mockup *
              {((data && data.mockup) || mockupPreview)
                && (
                  <div className={classes.icons}>
                    <PhotoCameraIcon className={classes.icon} />
                  </div>
                )}
              <input
                accept="image/*"
                className={classes.inputFile}
                id="mockup"
                name="mockup"
                type="file"
                onChange={(e) => imageStorage(e, 'mockup')}
              />
              <input type="hidden" required defaultValue={data && data.mockup ? data.mockup : mockupPreview} />
            </label>
          </Button>
        </ButtonGroup>
      </div>
      {((imagePreview
      && mockupPreview
      && primaryColorPreview
      && secondaryColorPreview
      && optionalColorPreview
      && titlePreview) || data) && (
      <div className={classes.preview}>
        <WorkPreview dataPreview={{
          data,
          baseURL,
          titlePreview,
          primaryColorPreview,
          secondaryColorPreview,
          optionalColorPreview,
          widthPreview,
          heightPreview,
          imagePreview,
          mockupPreview,
        }}
        />
      </div>
      )}
      <div className={classes.pickers}>
        <TextField
          required
          id="width"
          name="width"
          label="Width (%)"
          type="number"
          defaultValue={data && data.width ? data.width : widthPreview}
          variant="outlined"
          onChange={(e) => setWidthPreview(e.target.value)}
          fullWidth
        />
        <TextField
          required
          id="height"
          name="height"
          label="Height (%)"
          type="number"
          defaultValue={data && data.height ? data.height : heightPreview}
          variant="outlined"
          onChange={(e) => setHeightPreview(e.target.value)}
          fullWidth
        />
      </div>
      <div className={classes.submit}>
        <Button className={classes.submitButton} type="submit" variant="contained" color="primary" component="button">
          {data ? 'Update work' : 'Create work'}
        </Button>
      </div>
      {redirectHome && <Redirect to="/" />}
    </form>
  );
};

export default WorkForm;
