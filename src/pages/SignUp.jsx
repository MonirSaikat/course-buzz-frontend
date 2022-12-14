import React from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../adapter/authAdapter";
import Form from "../components/Form/Form";
import { useAuth } from "../hooks/auth/useAuth";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { Card } from '../components/Card/Card';

function SignUp() {
  const [token, setToken] = useLocalStorage("token", "");
  const { user, setUser, setFormSubmitting } = useAuth();

  const handleSubmit = (data) => {
    registerUser(data)
      .then((data) => {
        if (data) {
          const { user, token } = data;
          setUser(user);
          setToken(token);
          setFormSubmitting(false);
        }
      })
      .catch(() => {
        setFormSubmitting(false);
      });
  };

  const inputs = [
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Enter your full name",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter you email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter new password",
    },
  ];

  return (
    <div className="page">
      <div className="small-container">
        <Card>
          <h1>Sign Up</h1>
          <Form inputs={inputs} handler={handleSubmit} />
          <p className="help-text">
            <span>Already have an account ? </span>
            <Link to="/sign-in">Login</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
