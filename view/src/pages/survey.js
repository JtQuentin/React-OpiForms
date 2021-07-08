import React, { Component } from "react";
import ReactDOM from "react-dom";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { opi_forms } from "../components/opi_config";

class Surveyjs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent = () => {
    this.setState({
      isCompleted: true,
    });
  };

  render() {
    var json = opi_forms["form"];

    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;

    var onSurveyCompletion = this.state.isCompleted ? (
      <div>Thanks for completing the survey</div>
    ) : null;

    return (
      <div className="Survey">
        <div>
          {surveyRender}
          {onSurveyCompletion}
        </div>
      </div>
    );
  }
}

export default Surveyjs;
