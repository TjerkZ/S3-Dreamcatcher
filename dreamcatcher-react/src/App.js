import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import second from 'first'
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router history={history}>
      <Container>
        <Switch>
          <Route path="/" exact component={}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
