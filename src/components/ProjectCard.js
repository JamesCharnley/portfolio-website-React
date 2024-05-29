import './ProjectCard.css';

export default function ProjectCard({id, imageUrl, title, description, skills}){
  const projectId= id;
  return (
    <div className="project-container">
      <img src={imageUrl} alt="Avatar" />
      <h1>{title}</h1>
      <p style={{ padding: "20px", fontSize: "18px" }}>
        <strong>Description:</strong> {description}
      </p>
      <p style={{ padding: "20px", fontSize: "18px" }}>
        <strong>Skills:</strong> {skills}
      </p>
      <div className="button-container">
        <button>View</button>
      </div>
    </div>
  );
}