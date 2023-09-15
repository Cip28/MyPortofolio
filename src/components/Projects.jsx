import React from "react";
import "./sass/Projects.scss";
import Button from "./Button";
import data from "../projects.js";
import proj1 from "../images/proj1.png";
import proj2 from "../images/proj2.png";
import proj3 from "../images/proj3.png";

const images = [proj1, proj2, proj3];

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <a name="projects"></a>
      <h1>PROJECTS</h1>
      <div className="decorative"></div>
      <p className="desc">
        These are a few projects of mine, which I've made in order to
        consolidate my knowledge of the technologies I've been learning from the beginning of my professional career{" "}
      </p>
      <section className="projects-content">
        {data.projects.map((item, index) => {
          return (
            <article key={item.id}>
              <img src={images[index]} alt="Project" />
              <div className="project">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link}>
                  <Button name="Case study" classTag="projects" />
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
