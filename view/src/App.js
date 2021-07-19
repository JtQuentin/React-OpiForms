import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import signup from "./pages/signup";
import home from "./pages/home";
import survey from "./pages/survey";
import table from "./pages/table";
import form from "./components/form";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/" component={home} />
          <Route path="/survey/:id" component={form} />
          <Route exact path="/table" component={table} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
