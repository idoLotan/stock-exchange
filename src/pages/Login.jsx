import React, { useState } from "react";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        // Perform login logic here
        console.log("Login successful");
      })
      .catch((validationErrors) => {
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      });
  };

  return (
    <div className="bg-green-700 h-[100vh]">
      <div className="flex justify-center ">
        <form
          onSubmit={handleSubmit}
          className="rounded mt-[30vh] bg-green-800 w-[330px] h-[340px] p-5 relative"
        >
          <h1 className="font-bold text-3xl text-white flex justify-start">
            Please login to start chatting
          </h1>
          <div className="p-2 ">
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              fullWidth
              autoComplete="off"
              error={!!errors.email}
              helperText={errors.email}
            />
          </div>

          <div className="p-2">
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="standard"
              fullWidth
              autoComplete="off"
              error={!!errors.password}
              helperText={errors.password}
              id="standard-basic"
            />
          </div>
          <button className=" w-[300px] absolute left-3  bottom-3 p-2 font-medium text-center text-white rounded bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-900">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
