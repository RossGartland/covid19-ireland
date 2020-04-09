import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Stats from "./pages/stats/stats.component";
import Map from './pages/map/map.component';
import StatsBanner from "./components/overall-stats/stats-banner/stats-banner.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Stats} />
        <Route path="/map" component={Map} />
      </BrowserRouter>
    </div>
  );
}
export default App;
