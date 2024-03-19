// Routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ReactDom from 'react-dom/client';


function RoutesApp() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesApp

ReactDom.createRoot(document.getElementById('root')).render(<RoutesApp/>);