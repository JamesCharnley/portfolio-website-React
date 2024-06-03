
import projectsStyles from './Projects.module.css';
import { DynamicGrid } from "./DynamicGrid";
import { NavBar } from "./NavBar";

export default function Projects(){
  

  return (
    <>
    <NavBar />
    <div className={projectsStyles.list_container}>
      <DynamicGrid />
    </div>
    </>
  );
}
