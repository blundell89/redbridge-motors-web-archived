import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Routes from "./Routes";

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <Router>
    <>
      <Header />
      <main>
        <Route exact path={Routes.home} component={Home} />
        <Route path={Routes.about} component={About} />
      </main>
    </>
  </Router>
);

export default App;
