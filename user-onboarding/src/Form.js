// We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

import React, { useState, useEffect } from "react";
import axios from "axios";
import schema from "./Validation/formSchema";

export default function VolunteerForm(props) {
  console.log("PROPS HERE", props);

  const [form, setForm] = useState({
    //INITIAL STATE FOR FORM
    name: "",
    email: "",
    password: "",
    terms: ""
  });

  //   const {} = props;

  useEffect(() => {
    schema.isValid(form).then(valid => {
      console.log(valid, "valid");
    });
  }, [form]);

  const onChange = event => {
    console.log("this is the event.target", event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log("form submitted!", event.target);
  };

  return (
    <div className="formDiv" onSubmit={onSubmit}>
      {/* add onSubmit above */}

      <form>
        <h2>Volunteer List</h2>

        {/*render validation errors */}

        {/*text input below */}

        <label htmlFor="name">
          Name:
          <input id="name" type="text" name="name" />
        </label>

        <label htmlFor="email">
          Email:
          <input id="email" type="text" name="email" />
        </label>

        <label htmlFor="password">
          Password:
          <input is="password" type="text" name="password" />
        </label>

        <label>
          Terms and Conditions:
          <input type="checkbox" />
        </label>

        <label>
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
}
