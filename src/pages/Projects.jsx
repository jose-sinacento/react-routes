//Projects.jsx
//import React, { useState, useEffect } from 'react';
import projects from '../data/projects.js';
function Projects() {
    function mapProjects(projects) {
        return projects.map((project) => 
        <div key={project}>
            <li>
                <h2>Name: {project.name}</h2>
                <p>ID: {project.id}</p>
                <img src={project.image} alt="Project Image" />
                <p>{project.description}</p>
                <a href={project.url}>{project.url}</a>
            </li>
        </div>
        )
    }
    return (
        <>
        <h1>Testing la ruta de projects</h1>
        <div>
            {mapProjects(projects)}
        </div>
  
        </>
    )
}

export default Projects