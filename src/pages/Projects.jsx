//Projects.jsx
//import React, { useState, useEffect } from 'react';
import projects from '../data/projects.js';
function Projects() {
    function mapProjects(projects) {
        return projects.map((project) => 
            <li key={project}>
                <h2>Name: {project.name}</h2>
                <p>ID: {project.id}</p>
                <img src={project.image} alt="Project Image" />
                <p>{project.description}</p>
                <a href={project.url}>{project.url}</a>
            </li>
        )
    }
    return (
        <>
        <h1>My projects</h1>
        <ul>
            {mapProjects(projects)}
        </ul>
        </>
    )
}

export default Projects