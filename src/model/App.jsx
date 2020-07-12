import React from 'react';
import './App.css';
import AboutMe from './About/AboutMe';
import SkillBar from './SkillBar/SkillBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import NavBar from './NavBar/NavBar';
import ProjectDescription from './Projects/ProjectDescription';
import Footer from './Footer/Footer';


function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={(Projects)} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/projects/:id" component={ProjectDescription} />
                </Switch>
            </main> 
        </Router>
    );
}

const Home = () => {
    return (
        <div className="app">
            <div>
                <AboutMe />
            </div>
            <div>
                <SkillBar />
            </div>
        </div>
    );
}

export default App; 