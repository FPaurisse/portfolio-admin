import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import api from '../api';

const useStyles = makeStyles((theme) => ({
  WorkForm: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  input: {
    display: 'none',
  },
  card: {
    margin: theme.spacing(2, 0),
  },
}));

const WorkForm = ({ data }) => {
  const classes = useStyles();

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
          id="title"
          name="title"
          label="Title"
          defaultValue={data && data.title}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <TextField
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
          id="categories"
          name="categories"
          label="Categories"
          defaultValue={data && data.categories}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="primaryColor"
          name="primaryColor"
          label="Primary Color"
          defaultValue={data && data.primaryColor}
          variant="outlined"
        />
        <TextField
          id="secondaryColor"
          name="secondaryColor"
          label="Secondary Color"
          defaultValue={data && data.secondaryColor}
          variant="outlined"
        />
        <TextField
          id="optionalColor"
          name="optionalColor"
          label="Optional Color"
          defaultValue={data && data.optionalColor}
          variant="outlined"
        />
      </div>
      <div>
        <label htmlFor="image">
          <input
            accept="image/*"
            className={classes.input}
            id="image"
            name="mockup"
            multiple
            type="file"
          />
          <Button variant="contained" color="primary" component="span">
            Upload background
          </Button>
        </label>
        {data
        && (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Work background"
              height="140"
              image={baseURL + data.image}
            />
          </CardActionArea>
        </Card>
        )}
      </div>
      <div>
        <label htmlFor="mockup">
          <input
            accept="image/*"
            className={classes.input}
            id="mockup"
            name="mockup"
            multiple
            type="file"
          />
          <Button variant="contained" color="primary" component="span">
            Upload mockup
          </Button>
        </label>
        {data
        && (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Work mockup"
              height="140"
              image={baseURL + data.mockup}
            />
          </CardActionArea>
        </Card>
        )}
      </div>
      <button type="submit">{data ? 'Update' : 'create'}</button>
    </form>
  );
};

export default WorkForm;
