import React from "react";
import Saved from "../Saved/Saved";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const Routes = () => {
  let userRoutes = <Redirect to="/" />;

  return (
    <div>
      <Switch>
        <Route path="/saved">{userRoutes}</Route>
      </Switch>
      <Saved />
    </div>
  );
};

export default Routes;
