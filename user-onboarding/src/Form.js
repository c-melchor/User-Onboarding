// We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:
//Name, Email, Password, Terms of Service, Submit button to send data to server

import React, { useState, useEffect } from "react";
// import axios from "axios";
import * as yup from "yup";
import schema from "./Validation/formSchema";

export default function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false
  });

  //this is needed for the schema and for validation function
  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });

  //this function (validate) below will help us show error messages when things aren't put in correctly
  const validate = event => {
    //method in yup called reach, which allows us to reach into our schema and test one piece of it
    //.reach(schema, field to validate)
    //in this field(2nd param of reach), validate this data(info in validate method
    yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        setErrorState({ ...errorState, [event.target.name]: "" });
      })
      .catch(err => {
        //have to use err.errors will log the messages inside your error. NEED THIS
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0]
        });
      });
  };

  //onChange needs to take the old object of form key:value pairs and set new values
  //this uses a spread operator to copy the old obj, the array looking thing allows you to pick which key to replace the value of.
  //don't forget to add onChange to the input tag below!!

  const onChange = event => {
    //code below is to make this async
    event.persist();
    //invoking the validate function to validate the data in the event once it is typed or clicked
    validate(event);
    //created a variable below to be able to check if the type of event.target is a check box. if it is, we can change the value of e.target to be true when clicked. otherwise, the value will remain a string....
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setForm({ ...form, [event.target.name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    //ADD SET STATE TO CLEAR INPUT FIELDS***********
    // setForm();
    console.log("submitted");
  };

  //use effect will have its regular callback function then in the conditional [], it needs to have when you want the schema to run. In this case, you are validating the values in form's current state

  //   useEffect(() => {
  //     schema.isValid(form).then(valid => {
  //       console.log(valid, "valid");
  //     });
  //   }, [form]);

  return (
    <div className="formDiv" onSubmit={onSubmit}>
      {/* add onSubmit above */}

      <form>
        <h2>Volunteer List</h2>

        {/*render validation errors */}

        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name here"
            value={form.name}
            onChange={onChange}
          />
        </label>
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}

        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter e-mail"
            value={form.email}
            onChange={onChange}
          />
        </label>
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}

        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="text"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={onChange}
          />
        </label>
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.password}</p>
        ) : null}

        <label htmlFor="terms">
          Terms and Conditions:
          <input
            id="terms"
            name="terms"
            type="checkbox"
            onChange={onChange}
            checked={form.terms}
          />
        </label>
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null}

        <label>
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
}
