import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import './Projects.css';

export default function Projects(){
  const [projectList, setProjectList] = useState([]);

  useEffect(function () {
    fetch("https://jamescharnley.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjectList(data));
  }, []);

  return (
    <div className="list-container">
      <ul>
        {projectList.map((p) => (
          <li>
            <ProjectCard
              id={p.id}
              imageUrl={p.imageUrl}
              title={p.title}
              description={p.shortDescription}
              skills={p.skills}
              key={p.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}