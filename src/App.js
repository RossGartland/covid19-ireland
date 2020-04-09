import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Footer from './components/footer/footer.component';
import Stats from "./pages/stats/stats.component";
import Map from './pages/map/map.component';
import Advice from './pages/advice/advice.component';
import StatsBanner from "./components/overall-stats/stats-banner/stats-banner.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <HashRouter>
        <div>
        <Route exact path='/' component={Stats} />
        <Route path='/map' component={Map} />
        <Route path='/advice' component={Advice} />
        </div>
      </HashRouter>
      <Footer/>
    </div>
  );
}
export default App;
