import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import google from "../../../images/social/google.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [error, setError] = useState("");
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleToSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const ConfirmPassword = event.target.confirmPassword.value;
    if (password !== ConfirmPassword) {
      setError("Password didn't match !!!");
      return;
    }
    if (password.length < 6) {
      setError("Your Password is too small !!!");
      return;
    }
    console.log(email, password, ConfirmPassword);
    createUserWithEmailAndPassword(email, password);
    event.target.reset("");
  };
  if (user || googleUser) {
    navigate("/home");
  }

  return (
    <div style={{ height: "100vh" }}>
      <h2 className="text-success text-center">Register</h2>
      <Form onSubmit={handleToSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm-Password"
            required
          />
        </Form.Group>
        <div className="text-danger">{error}</div>
        <Button
          className="text-white d-block mx-auto w-50"
          variant="info"
          type="submit"
        >
          Register
        </Button>
        <p>
          Already registered?{" "}
          <span>
            {" "}
            <Link className="text-decoration-none" to="/login">
              Click To Login
            </Link>{" "}
          </span>
        </p>
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-info d-block mx-auto w-50 text-white"
          >
            <span>
              {" "}
              <img src={google} alt="" />{" "}
            </span>{" "}
            Sign In With Google
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
