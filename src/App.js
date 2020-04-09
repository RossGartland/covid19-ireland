import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Footer from './components/footer/footer.component';
import Stats from "./pages/stats/stats.component";
import Map from './pages/map/map.component';
import faq from './pages/faq/faq.component';
import About from './pages/about/about.component';
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
        <Route path='/faq' component={faq} />
        <Route path='/about' component={About} />
        </div>
      </HashRouter>
      <Footer/>
    </div>
  );
}
export default App;
