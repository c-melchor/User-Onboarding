import "./App.css";

import React, { useState } from "react";
import VolunteerForm from "./Form";
import * as yup from "yup"; //yup will be used for validation
import formSchema from "./Validation/formSchema";
import axios from "axios";

function App() {
  // const [disabled, setDisabled] = useState(true); //disabled initial state

  const initialForm = {
    name: "",
    email: "",
    password: "",
    terms: false
  };

  const [formState, setFormState] = useState(initialForm);

  const defaultErrors = {
    name: "",
    email: "",
    password: "",
    terms: ""
  };

  const [errorState, setErrorState] = useState(defaultErrors);
  const [users, setUsers] = useState([]);

  //this function (validate) below will help us show error messages when things aren't put in correctly
  const validate = event => {
    //method in yup called reach, which allows us to reach into our schema and test one piece of it
    //.reach(schema, field to validate)
    //in this field(2nd param of reach), validate this data(info in validate method
    yup
      .reach(formSchema, event.target.name)
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

    // created a variable below to be able to check if the type of event.target is a check box. if it is, we can change the value of e.target to be true when clicked. otherwise, the value will remain a string....

    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormState({ ...formState, [event.target.name]: value }); //checked not working, why? ************************
    console.log(event.target, "LOOK CHECKED HERE");
  };

  const onSubmit = event => {
    event.preventDefault();
    //ADD SET STATE TO CLEAR INPUT FIELDS*********************
    console.log("submitted");
    console.log(formState, "FORM STATE HERE");

    //axios post takes the URL and also takes a second argument (object with data we want to send)
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        //.push() doesn't work in hooks
        //setUser takes (original array => [...spread of old array, PLUS what you want to add]);
        setUsers(arr => [...arr, res.data]);
        setFormState({
          name: "",
          email: "",
          password: "",
          terms: false
        });
        // setUsers(res.data.data); //need to see what data will look like first***************************
      })
      .catch(err => {
        console.log(err, "error");
      });
  };

  return (
    <div className="App">
      <h1>Things are still working 🥳 </h1>
      <VolunteerForm
        formState={formState}
        onSubmit={onSubmit}
        onChange={onChange}
        errorState={errorState}
      />
      <pre>{JSON.stringify(users)}</pre>
    </div>
  );
}

export default App;
