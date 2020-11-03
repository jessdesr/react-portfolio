import React from "react";
import imgimg from "./assets/img1.png";

type ProjectsProps = {
  data: Array<ProjectProps>;
  featuredOnly: boolean;
};

type ProjectProps = {
  title: string;
  byline: string;
  link: string;
  description: any;
};

function Project({ data, featuredOnly }: ProjectsProps) {
  let projectData = featuredOnly ? data.slice(0, 1) : data;

  return (
    <ul className="projects-list">
      {projectData.map((project, index) => {
        return (
          <li className="card" key={project.title}>
            <img className="card__image" src={imgimg}></img>
            <h3>{project.title}</h3>
            <p style={{ fontStyle: "italic" }}>{project.byline}</p>
            <div
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></div>
            <a href={project.link}>Link to code</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Project;
