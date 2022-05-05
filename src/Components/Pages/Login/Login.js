import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import google from "../../../images/social/google.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const handleToSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    signInWithEmailAndPassword(email, password);
    event.target.reset("");
  };

  if (user || googleUser) {
    navigate("/home");
  }
  return (
    <div>
      <h2 className="text-success text-center">Login</h2>
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

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>
          Don't have an account?{" "}
          <span>
            {" "}
            <Link className="text-decoration-none" to="/register">
              Click To Register
            </Link>{" "}
          </span>
        </p>
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary d-block mx-auto w-50"
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

export default Login;
