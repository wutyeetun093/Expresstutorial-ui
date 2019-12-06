import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store/store";
import Fashion from "../pages/fashions/Fashion";

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={props => <Fashion {...props} />} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
