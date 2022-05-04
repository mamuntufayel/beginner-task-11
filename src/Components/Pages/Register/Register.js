import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import google from "../../../images/social/google.png";

const Register = () => {
  return (
    <div>
      <h2 className="text-success text-center">Register</h2>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            autoComplete="off"
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

        <Button variant="primary" type="submit">
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
          <button className="btn btn-primary d-block mx-auto w-50">
            <span>
              {" "}
              <img src={google} alt="" />{" "}
            </span>{" "}
            Sign Up With Google
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
