import ProfileCard from './components/ProfileCard';
import NavCard from './components/NavCard';
import AboutMe from './components/AboutMe';
import Page from './components/Page';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import "./style/layout/App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect} from 'react'
import ClimbingBoxLoader from "react-spinners/ClipLoader";

const App = () => {
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, [])
  return (
    <Router>
      {
        loading ? (
      <div className="loading">
        <ClimbingBoxLoader color={"rgba(255, 255, 0, 0.644)"} loading={loading} size={60} />
      </div>
      ): (
      <div className="container">
        <div className="info">
          <ProfileCard />
          <NavCard />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component = { Page } />
            <Route path="/hakkımda" component = { AboutMe } />
            <Route path="/yetkinlikler" component = { Skills } />
            <Route path="/projeler" component = { Project } />
            <Route path="/iletişim" component = { Contact } />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
      )
    }
    </Router>
  );
}

export default App;
