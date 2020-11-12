import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { getLoginAuth } from "../redux/auth-redux/authActionCreator";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleonChangeforEmail = (e) => {
    const { value } = e.target;
    console.log("VaLUe: ", value);
    setEmail(value);
  };

  const handleonChangeforPwd = (e) => {
    const { value } = e.target;
    console.log("VaLUe: ", value);
    setPassword(value);
  };

  const disPatch = useDispatch();
  const history = useHistory();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("STATE:", email, password);
    disPatch(getLoginAuth({ email, password }));
    history.push("/dashboard");
  };
  // <Redirect to="/dashboard" />;
  return (
    <>
      <form className={classes.root}>
        {/* <TextField id="outlined-basic" label="Outlined" variant="username" /> */}

        {/* <TextField id="outlined-basic" label="Outlined" variant="password" /> */}
        <TextField
          id="outlined-required"
          label="Email"
          type="text"
          name="email"
          defaultValue={email}
          variant="outlined"
          onChange={handleonChangeforEmail}
        />
        <br />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          defaultValue={password}
          variant="outlined"
          onChange={handleonChangeforPwd}
        />
        <br />
        <br />
        <Button
          onClick={handleOnSubmit}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
      </form>
    </>
  );
}
