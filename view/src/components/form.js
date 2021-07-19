import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Todo from "../components/todo";

function Form() {
  //   useEffect(() => {
  //     fetchForms();
  //   }, []);

  //   const [forms, setForms] = useState([]);

  //   const fetchForms = async () => {
  //     const data = await fetch(
  //       "http://localhost:5000/react-todoapp-efe9c/us-central1/api/forms"
  //     );

  //     const forms = await data.json();
  //     console.log(forms);
  //     setForms(forms);
  //   };

  return (
    <div>
      <h1>Form</h1>
    </div>
  );
}

export default Form;
