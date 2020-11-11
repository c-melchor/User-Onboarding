// We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:
//Name, Email, Password, Terms of Service, Submit button to send data to server

import React, { useState, useEffect } from "react";
// import axios from "axios";
import schema from "./Validation/formSchema";

export default function VolunteerForm() {
  //   const initialVal = {
  //     name: "",
  //     email: "",
  //     password: "",
  //     terms: false
  //   };
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false
  });

  //onChange needs to take the old object of form key:value pairs and set new values
  //this uses a spread operator to copy the old obj, the array looking thing allows you to pick which key to replace the value of.
  //don't forget to add onChange to the input tag below!!

  const onChange = event => {
    console.log("EVENT TARGET VALUE", event.target.value);

    setForm({ ...form, [event.target.name]: event.target.value });

    //     const target = event.target;
    //     const evtName = target.name;
    //     const evtVal =
    //       target.type === "checkbox" ? target.checked === true : target.value;

    // setForm({...form,
    //   [evtName]: evtVal
    // });
  };

  const onSubmit = event => {
    event.preventDefault();
    setForm();
    //ADD SET STATE TO CLEAR INPUT FIELDS***********
    console.log(event.target.name);
  };

  //use effect will have its regular callback function then in the conditional [], it needs to have when you want the schema to run. In this case, you are validating the values in form's current state

  useEffect(() => {
    schema.isValid(form).then(valid => {
      console.log(valid, "valid");
    });
  }, [form]);

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
            onChange={onChange}
            value={form.name}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter e-mail"
            onChange={onChange}
            value={form.email}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="text"
            name="password"
            placeholder="Create a password"
            onChange={onChange}
            value={form.password}
          />
        </label>

        <label>
          Terms and Conditions:
          <input
            name="terms"
            type="checkbox"
            checked={form.terms}
            onChange={onChange}
          />
        </label>

        <label>
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
}
