import './Button.css';

export default function Button({ children }) {
  return (
    <div className="button-container">
      <a className="button" href="/projects">
        {children}
      </a>
    </div>
  );
}
