import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from "./components/Header";
import Home from "./pages/Home";
import Routes from "./Routes";

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Main = styled.main`
  display: flex;
`

const App = () => (
  <Router>
    <>
      <Header />
      <Main>
        <Route exact path={Routes.home} component={Home} />
        <Route path={Routes.about} component={About} />
      </Main>
    </>
  </Router>
);

export default App;
