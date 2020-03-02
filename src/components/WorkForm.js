import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useLocalStorage from 'react-use-localstorage';
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
  card: {
    margin: theme.spacing(2, 0),
  },
}));

window.onload = () => { localStorage.clear(); };

const WorkForm = ({ data }) => {
  const classes = useStyles();

  const [titlePreview, setTitlePreview] = useLocalStorage('title', '');
  const [primaryColorPreview, setPrimaryColorPreview] = useLocalStorage('primaryColor', '');
  const [secondaryColorPreview, setSecondaryColorPreview] = useLocalStorage('secondaryColor', '');
  const [optionalColorPreview, setOptionalColorPreview] = useLocalStorage('optionalColor', '');
  const [imagePreview, setImagePreview] = useLocalStorage('image', '');
  const [mockupPreview, setMockupPreview] = useLocalStorage('mockup', '');

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
      className={classes.WorkForm}
      encType="multipart/form-data"
      onSubmit={formSubmit}
      noValidate
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
      <div>
        <label htmlFor="image">
          <input
            accept="image/*"
            className={classes.inputFile}
            id="image"
            name="image"
            type="file"
            onChange={(e) => imageStorage(e, 'image')}
          />
          <Button variant="contained" color="primary" component="span">
            Upload background
          </Button>
        </label>
      </div>
      <div>
        <label htmlFor="mockup">
          <input
            accept="image/*"
            className={classes.inputFile}
            id="mockup"
            name="mockup"
            type="file"
            onChange={(e) => imageStorage(e, 'mockup')}
          />
          <Button variant="contained" color="primary" component="span">
            Upload mockup
          </Button>
        </label>
      </div>
      <WorkPreview dataPreview={{
        data,
        baseURL,
        titlePreview,
        primaryColorPreview,
        secondaryColorPreview,
        optionalColorPreview,
        imagePreview,
        mockupPreview,
      }}
      />
      <button type="submit">{data ? 'Update' : 'create'}</button>
    </form>
  );
};

export default WorkForm;
