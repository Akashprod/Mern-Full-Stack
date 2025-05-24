import React, { useState } from "react";
import { GlobalUseContext } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const { LoginUser } = GlobalUseContext();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = {
      email: mail,
      password: password,
    };

    axios
      .post(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        userData
      )
      .then((res) => {
        if (res.data.token) {
          // console.log(res.data.token);
          const userDetails = {
            email: mail,
            token: res.data.token,
          };
          LoginUser(userDetails);
          alert("LogIn Successful");
          navigate("/");
        }
      })
      .catch((error) => console.log(error));

    setMail("");
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden",
        marginBottom: "5px",
        padding: 0,
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Login Page</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          htmlFor=""
        >
          Email{" "}
        </label>
        <input
          type="email"
          placeholder="please enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <label
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          htmlFor=""
        >
          Password
        </label>
        <input
          type="password"
          placeholder="please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={handleLogin}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
