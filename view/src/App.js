import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import signup from "./pages/signup";
import home from "./pages/home";
import formDetail from "./components/formDetail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/" component={home} />
          <Route path="/survey/:id" component={formDetail} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
