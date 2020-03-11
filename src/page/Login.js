﻿import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import LoginButtonContainer from "../containers/LoginButtonContainer";
import IdTextFieldContainer from "../containers/IdTextFieldContainer";
import DbConnectLabelContainer from '../containers/DbConnectLabelContainer';
import DbConnectButtonContainer from '../containers/DbConnectButtonContainer';
import FormControlContainer from '../containers/FormControlContainer';




const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Park Jeong Su {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [age, setAge] = React.useState("30");

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log('start onsubmit');
    window.saveDbConfig(e,age);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              DB Connect Info
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
            >
              <MenuItem value={10}>10.20.~~~</MenuItem>
              <MenuItem value={20}>10.20.~~~</MenuItem>
              <MenuItem value={30}>10.20.~~~</MenuItem>
            </Select>
          </FormControl>
          
          <FormControlContainer></FormControlContainer>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dbId"
            label="db Id"
            name="dbId"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dbPassword"
            label="db Password"
            name="dbPassword"
            autoFocus
          />
          <DbConnectLabelContainer></DbConnectLabelContainer>
          <IdTextFieldContainer></IdTextFieldContainer>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="fmPassword"
            label="Factroy Modeler Password"
            type="fmPassword"
            id="fmPassword"
            autoComplete="current-password"
          />
          <DbConnectButtonContainer test={classes.submit}></DbConnectButtonContainer>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick ={(e)=>{
            //   e.preventDefault();
            //   window.getDbConfig();
            //   }
            // }
          >
            Delete
          </Button>
          <LoginButtonContainer test={classes.submit}></LoginButtonContainer>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
