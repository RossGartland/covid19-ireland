import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Stats from "./pages/stats/stats.component";
import Map from './pages/map/map.component';
import StatsBanner from "./components/overall-stats/stats-banner/stats-banner.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Route exact path='/' component={Stats} />
        <Route path='/map' component={Map} />
      </HashRouter>
    </div>
  );
}
export default App;
