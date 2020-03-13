import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';


import DbConnectLabelContainer from '../containers/DbConnectLabelContainer';
import AutocompleteContainer from '../containers/AutocompleteContainer';
import TextFieldContainer from '../containers/TextFieldContainer';

import { connect } from 'react-redux';
import { logIn,saveDbconfig ,deleteDbconfig ,changeName ,changeHost,changeDbId,changeDbPw ,changeUserId, changeUserPw} from '../store/modules/logInOut';
import { connectTest } from '../store/modules/DbConnect';

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
    margin: theme.spacing(3, 0, 2),
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

const Login = (props)=>{
  const classes = useStyles();

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
        <form className={classes.form} noValidate>
          <AutocompleteContainer
            onInputChange={props.changeName}
          ></AutocompleteContainer>
          <TextFieldContainer
            label="host"
            namef="host"
            autoFocus
            onChange={props.changeHost}
          ></TextFieldContainer>
          <TextFieldContainer
            label="db Id"
            namef="dbid"
            autoFocus
            onChange={props.changeDbId}
          ></TextFieldContainer>
          <TextFieldContainer
            label="db pw"
            namef="dbpw"
            type="password"
            autoFocus
            onChange={props.changeDbPw}
          ></TextFieldContainer>

          <DbConnectLabelContainer></DbConnectLabelContainer>

          <TextFieldContainer
            label="user id"
            namef="userid"
            autoFocus
            onChange={props.changeUserId}
          ></TextFieldContainer>
          <TextFieldContainer
            label="user pw"
            namef="userpw"
            type="password"
            autoFocus
            onChange={props.changeUserPw}
          ></TextFieldContainer>

          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e => {
                  e.preventDefault();
                  props.dbConnectTest();
                }}
              >
                Db Connect Test
              </Button>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e => {
                  e.preventDefault();
                  props.saveDbconfig();
                }}
              >
                Save
              </Button>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e => {
                  e.preventDefault();
                  props.deleteDbconfig();
                }}
              >
                Delete
              </Button>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e => {
                  e.preventDefault();
                  props.logIn();
                }}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({

  dbConnectTest:()=>dispatch(connectTest()),

  logIn:()=>dispatch(logIn()),
  saveDbconfig: () => dispatch(saveDbconfig()),
  deleteDbconfig : ()=>dispatch(deleteDbconfig()),

  changeName : (name)=> dispatch(changeName(name)),
  changeHost  : (host)=> dispatch(changeHost(host)),
  changeDbId : (dbid)=> dispatch(changeDbId(dbid)),
  changeDbPw : (dbpw)=> dispatch(changeDbPw(dbpw)),
  changeUserId : (userid)=> dispatch(changeUserId(userid)),
  changeUserPw : (userpw)=> dispatch(changeUserPw(userpw)),
});

export default connect(null,mapDispatchToProps)(Login);