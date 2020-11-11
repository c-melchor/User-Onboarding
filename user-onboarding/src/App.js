import "./App.css";

import React from "react";
import VolunteerForm from "./Form";
// import * as yup from "yup"; //yup will be used for validation
// import schema from "./Validation/formSchema"; //schema questions if the conditions are being met
// import axios from "axios";

function App() {
  //app component

  // const [form, setForm] = useState({
  //   //INITIAL STATE FOR FORM
  //   name: "",
  //   email: "",
  //   password: "",
  //   terms: ""
  // });

  //FORM ERROR STATE IS BELOW

  // const [formErrors, setFormErrors] = useState({
  //   //formError initial state
  //   name: "",
  //   email: "",
  //   password: ""
  // });

  //FRIENDS STATE?? MAYBE NOT NEEDED, IS BELOW

  // const [volunteers, setVolunteers] = useState([]); //friends initial state
  // const [disabled, setDisabled] = useState(true); //disabled initial state

  return (
    <div className="App">
      <h1>Things are still working 🥳 </h1>
      <VolunteerForm />
    </div>
  );
}

export default App;
