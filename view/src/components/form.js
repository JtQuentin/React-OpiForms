import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "survey-react/survey.css";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { authMiddleWare } from "../util/auth";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: 264,
  },
  toolbar: theme.mixins.toolbar,
});

class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forms: "",
      numero: "",
      name: "",
      description: "",
      json: "",
      formId: "",
      errors: [],
      open: false,
      uiLoading: true,
      buttonType: "",
      viewOpen: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentWillMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get("/forms")
      .then((response) => {
        this.setState({
          forms: response.data,
          uiLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const columns = [
      {
        Header: "Id",
        Cell: ({ original }) => {
          return <span>{original.id}</span>;
        },
      },
      {
        Header: "Name",
        Cell: ({ original }) => {
          return <span>{original.name}</span>;
        },
      },
      {
        Header: "Description",
        Cell: ({ original }) => {
          return <span>{original.description}</span>;
        },
      },
      {
        Header: "Json",
        Cell: ({ original }) => {
          return <span>{original.json}</span>;
        },
      },
      {
        Header: "button",
        Cell: ({ original }) => {
          return (
            <div>
              <Link
                to={{
                  pathname: `/survey/${original.formId}`,
                  state: { name: original.name },
                }}
                target="_blank"
              >
                <button>
                  <AddCircleIcon />
                </button>
              </Link>
            </div>
          );
        },
      },
    ];

    dayjs.extend(relativeTime);
    const { classes } = this.props;

    // const handleClickOpen = (original) => {
    //   this.setState({
    //     numero: original.json.numero,
    //     name: original.json.name,
    //     description: original.json.description,
    //     json: original.json.json,
    //     formId: original.json.formId,
    //     buttonType: "",
    //     open: true,
    //   });
    // };

    if (this.state.uiLoading === true) {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgess} />
          )}
        </main>
      );
    } else {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <ReactTable data={this.state.forms} columns={columns} />
        </main>
      );
    }
  }
}
export default withStyles(styles)(form);
