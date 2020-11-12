// We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:
//Name, Email, Password, Terms of Service, Submit button to send data to server

import React from "react";

export default function VolunteerForm(props) {
  const { formState, onChange, errorState, onSubmit } = props;

  return (
    <div className="formDiv">
      <form onSubmit={onSubmit}>
        <h2>Volunteer List</h2>

        {/*render validation errors */}

        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name here"
            value={formState.name}
            onChange={onChange}
          />
        </label>
        {errorState.name.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}

        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter e-mail"
            value={formState.email}
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
            value={formState.password}
            onChange={onChange}
          />
        </label>
        {errorState.password.length > 0 ? (
          <p className="error">{errorState.password}</p>
        ) : null}

        <label htmlFor="terms">
          Terms and Conditions:
          <input
            id="terms"
            name="terms"
            type="checkbox"
            onChange={onChange}
            checked={formState.terms}
          />
        </label>
        {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null}

        <label>
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
}
