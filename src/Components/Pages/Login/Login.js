import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import google from "../../../images/social/google.png";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  Getting email and password value using onBlur
  const handleToGetEmailOnBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleToGetPasswordOnBlur = (event) => {
    setPassword(event.target.value);
  };
  // Handling the form submit
  const handleToSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    event.target.reset("");
  };

  // reset Password
  const handleResetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Reset password link sent to your email");
    } else {
      toast("please enter your existing email");
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <p className="text-danger">Error: {error.message}</p>;
  }

  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <h2 className="text-success text-center">Login</h2>
      <Form onSubmit={handleToSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleToGetEmailOnBlur}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handleToGetPasswordOnBlur}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <h5>{error}</h5>
        <Button
          className="d-block mx-auto w-50"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
        <p className="mt-2">
          Don't have an account?{" "}
          <span>
            {" "}
            <Link className="text-decoration-none" to="/register">
              Click To Register
            </Link>{" "}
          </span>
        </p>
      </Form>
      <p className="d-block mx-auto w-50 border-none">
        Forget Password?{" "}
        <button
          onClick={handleResetPassword}
          className="btn btn link text-primary text-decoration-none shadow-none"
        >
          Click To Reset
        </button>
      </p>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary d-block mx-auto w-25"
        >
          <span>
            {" "}
            <img src={google} alt="" />{" "}
          </span>{" "}
          Sign In With Google
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
