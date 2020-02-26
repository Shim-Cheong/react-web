import React, { useState, useRef } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import isEmail from "../helpers/auth";
import "./SignUp.css";

export default function SignUp(props) {
  const submitButton = useRef();
  const [signUpId, setSignUpId] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpStudentId, setSignUpStudentId] = useState("");
  const [signUpStudentName, setSignUpStudentName] = useState("");
  const [signUpStudentEmail, setSignUpStudentEmail] = useState("");

  function validateForm() {
    return (
      signUpId.length > 0 &&
      signUpPassword.length > 0 &&
      signUpStudentId.length > 0 &&
      signUpStudentName.length > 0 &&
      signUpStudentEmail.length > 0
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const onTextValidation = () => {
    let emailError = "";

    if (!isEmail(signUpStudentEmail)) {
      emailError = "email Error!";
    }
    if (emailError) {
      setSignUpStudentEmail({ emailError });
      return false;
    }
    return true;
  };

  const onSignUpSubmit = e => {
    e.preventDefault();
    const valid = onTextValidation();
    if (!valid) {
      console.log("fuck");
      setSignUpStudentEmail("");
      // submitButton.current.focus();
    } else {
      console.log("통과");
    }
  };

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="signUpId" bsSize="small">
          <ControlLabel>ID</ControlLabel>
          <FormControl
            autoFocus
            type="id"
            value={signUpId}
            onChange={e => setSignUpId(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="signUpPassword" bsSize="small">
          <ControlLabel>password</ControlLabel>
          <FormControl
            value={signUpPassword}
            onChange={e => setSignUpPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="signUpStudentId" bsSize="small">
          <ControlLabel>학번</ControlLabel>
          <FormControl
            type="text"
            value={signUpStudentId}
            onChange={e => setSignUpStudentId(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="signUpStudentName" bsSize="small">
          <ControlLabel>이름</ControlLabel>
          <FormControl
            ref={submitButton}
            type="text"
            value={signUpStudentName}
            onChange={e => setSignUpStudentName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="signUpStudentEmail" bsSize="small">
          <ControlLabel>GIST 이메일</ControlLabel>
          <FormControl
            type="text"
            value={signUpStudentEmail}
            onChange={e => setSignUpStudentEmail(e.target.value)}
          />
        </FormGroup>
        <br />
        <Button
          block
          bsSize="large"
          disabled={!validateForm()}
          type="submit"
          onClick={onSignUpSubmit}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
