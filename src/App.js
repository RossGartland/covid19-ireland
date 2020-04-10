import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Footer from './components/footer/footer.component';
import Stats from "./pages/stats/stats.component";
import Map from './pages/map/map.component';
import faq from './pages/faq/faq.component';
import About from './pages/about/about.component';
import Work from './pages/out-of-work/out-of-work.component';
import WorkInfo from './components/work/job-information/job-information.component';
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
        <Route path='/work' component={Work}/>
        <Route path='/Workni' render={(props) => <WorkInfo {...props} title={`Northern Ireland Job Advice`} />}/>
        <Route path='/Workie' render={(props) => <WorkInfo {...props} title={`Republic of Ireland Job Advice`} q1={"COVID-19 Pandemic Unemployment Payment "} 
        a1={"If you have lost your job due to COVID-19 you can apply for the COVID-19 Pandemic Unemployment Payment."+ 
        "You can apply for this whether you are an employee or if you are self-employed. "} />}/>
        </div>
      </HashRouter>
      <Footer/>
    </div>
  );
}
export default App;
