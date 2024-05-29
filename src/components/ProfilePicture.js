import './ProfilePicture.css';

export default function ProfilePicture({ imageUrl }) {
  return <img className="circle-border profile-picture" src={imageUrl} alt="avatar" />;
}
