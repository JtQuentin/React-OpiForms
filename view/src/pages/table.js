import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

import { Link } from "react-router-dom";

import { db } from "../util/config";
import { ItemValue } from "survey-react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       forms: [],
//       loading: true,
//     };
//   }
//   async getUsersData() {
//     const res = await axios.get(
//       "http://localhost:5000/react-todoapp-efe9c/us-central1/api/forms"
//     );
//     console.log(res.data);
//     this.setState({ loading: false, forms: res.data });
//   }
//   componentDidMount() {
//     this.getUsersData();
//   }
//   render() {
//     const columns = [
//       {
//         Header: "Id",
//         accessor: "id",
//       },
//       {
//         Header: "Name",
//         accessor: "name",
//       },

//       {
//         Header: "Description",
//         accessor: "description",
//       },
//       {
//         Header: "Json",
//         accessor: "json",
//       },
//     ];
//     return <ReactTable data={this.state.forms} columns={columns} />;
//   }
// }

function Table() {
  useEffect(() => {
    fetchForms();
  }, []);

  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const data = await fetch(
      "http://localhost:5000/react-todoapp-efe9c/us-central1/api/forms"
    );

    const forms = await data.json();
    console.log(forms);
    setForms(forms);
  };

  return (
    <div>
      {forms.map((form) => (
        <h1 key={form.formId}>
          <Link to={"/survey/${form.formId}"}></Link>
        </h1>
      ))}
    </div>
  );
}

export default Table;
