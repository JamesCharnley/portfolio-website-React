import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import gridStyles from "./DynamicGrid.module.css";
import { GridItem } from "./GridItem";

export function DynamicGrid() {
  const [projectList, setProjectList] = useState([]);

  useEffect(function () {
    fetch("https://jamescharnley.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjectList(data));
  }, []);

  return (
    <div className={gridStyles.grid}>
      {projectList.map((p) => (
        <GridItem key={p.id}>
          <ProjectCard
            id={p.id}
            imageUrl={p.imageUrl}
            title={p.title}
            description={p.shortDescription}
            skills={p.skills}
          />
        </GridItem>
      ))}
    </div>
  );
}
