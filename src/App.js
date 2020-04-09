import React from 'react';
import Nav from './components/nav/nav.component';
import Stats from './pages/stats/stats.component';
import StatsBanner from './components/overall-stats/stats-banner/stats-banner.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Stats/>
      <StatsBanner/>
    </div>
  );
}
export default App;
