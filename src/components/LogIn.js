import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const LogIn = () => {
  let [data, setData] = useState([]);
  let [emailid, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function saveData(e) {
    e.preventDefault();
    let detail = { emailid, password };
    setData([detail]);
    setEmail("");
    setPassword("");
    fetch("http://127.0.0.1:8000/accounts/login/", {
      method: "POST",
      header: {
        key: "Authorization",
        value: "",
        type: "text",
        disabled: true,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  return (
    <div className="content">
      <form
        method="post"
        action="#"
        onSubmit={saveData}
        style={{ marginTop: "8%", display: "flex", flexDirection: "column" }}
      >
        <p className="logTitle">Uncover your hidden potential with us!</p>
        <TextField
          value={emailid}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{ margin: "10% auto 2% 5%", width: "300px" }}
          id="outlined-email"
          label="email"
          variant="outlined"
          autoComplete="username email"
        />
        <TextField
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{ marginLeft: "5%", width: "300px" }}
          id="outlined-password"
          label="password"
          variant="outlined"
          type="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          style={{
            margin: "3% 5% 5% 4.8%",
            height: "55px",
            width: "300px",
            border: "1px solid red",
          }}
          variant="contained"
        >
          <Link to="/addLicense" className="button">
            Log-In
          </Link>
        </Button>
      </form>
      <p className="title">
        Empowering the Aviation Industry <br /> with Turnkey Solutions.
      </p>
    </div>
  );
};

export default LogIn;
