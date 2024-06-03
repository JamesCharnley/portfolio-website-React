import projectStyles from './ProjectCard.module.css';

export default function ProjectCard({id, imageUrl, title, description, skills}){
  const projectId= id;
  return (
    <a href="/">
    <div className={projectStyles.project_container}>
      <img src={imageUrl} alt="Avatar" />
      <div className={projectStyles.text_container}>
      <h1 className={projectStyles.project_title}>{title}</h1>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Skills:</strong> {skills}
      </p>
      </div>
    </div>
    </a>
  );
}