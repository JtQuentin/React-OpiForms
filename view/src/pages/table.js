import React, { Component } from "react";
import DataTablesComp from "./DataTables";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { opi_forms } from "../components/opi_config";

class table extends Component {
  constructor(props) {
    super(props);
    const dataSet = [
      {
        id: 1,
        name: "Tiger Nixon",
        description: "System Architect",
        json: opi_forms["test"],
      },
      {
        id: 2,
        name: "Garrett Winters",
        description: "Accountant",
        json: "Tokyo",
      },
      {
        id: 3,
        name: "Ashton Cox",
        description: "Junior Technical Author",
        json: "San Francisco",
      },
    ];
    this.state = {
      data: dataSet,
    };
  }
  deleteRow = (id) => {
    const filteredData = this.state.data.filter((i) => i.id !== id);
    this.setState({ data: filteredData });
  };
  render() {
    return (
      <div>
        <DataTablesComp
          columns={this.columns}
          data={this.state.data}
          deleteRow={this.deleteRow}
          gotoEdit={this.gotoEdit}
        />
      </div>
    );
  }
}
export default table;
