import React from 'react';
import './sass/Projects.scss';
import Button from './Button';
import data from '../projects.js';
import img from '../images/project-mockup-example.jpeg';



const Projects = () => {
    return (
        <section className='projects-wrapper'>
                  <a name="projects"></a>
            <h1>PROJECTS</h1>
            <div className='decorative'></div>
            <p className='desc'>These are a few projects of mine, which I've made in order to consolidate my knowledge of the technologies I've been learning so far in the last 6 months  </p>
            <section className='projects-content'>
            {data.projects.map(item => {
                        return (
                        <article key={item.id}>
                                <img src={img} alt="img" />
                                <div className='project'>
                                    <h3>{ item.title}</h3>
                                    <p>{item.description}</p>
                                    <a href={item.link }>
                                        <Button name="Case study" classTag="projects" />
                                    </a>
                                </div>
                        </article>
                    )
                })    
            }
            </section>
        </section>
    );
};

export default Projects;
