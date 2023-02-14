import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAdd } from "../redux/actions";
const AddUserComp = () => {
  const [error, setError] = React.useState("");
  const [state, setState] = React.useState({
    name: "",
    email: "",
    age: "",
  });
  let history = useNavigate();
  let dispatch = useDispatch();
  const { name, age, email } = state;
  console.log("stae--------------------------", state);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !age) {
      setError("please input all input field");
    } else {
      dispatch(userAdd(state));
      history("/");
      setError("");
    }
  };
  return (
    <Box sx={{ mt: 3, ml: 2 }}>
      <Button variant="contained" color="primary" onClick={() => history("/")}>
        Go back
      </Button>
      <Typography variant="h5">Add User</Typography>{" "}
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <TextField
          name="name"
          id="standard-basic"
          label="Name"
          value={name}
          onChange={handleChange}
          type="text"
        />
        <br />
        <br />
        <TextField
          name="email"
          id="standard-basic"
          label="Email"
          value={email}
          type="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          label="Age"
          value={age}
          name="age"
          type="number"
          id="standard-basic"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddUserComp;
