import React from 'react';
import './projects.css'
import image1 from './nbody-planets.jpg'
import image2 from './todolist.png'

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>N-Body Simulation</h3>
                <p>Simulation of n bodies in Space</p>
                <img src={image1}/>
            </div>
            <div className="project">
                <h3>To-Do List App</h3>
                <p>Application for listing and tracking To-do items</p>
                <img src={image2} />
            </div>
        </section>
    );
}

export default Projects;
