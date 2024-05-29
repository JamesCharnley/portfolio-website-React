import Button from './Button';
import NavLinks from "./NavLinks";
import ProfilePicture from "./ProfilePicture";
import "./Home.css";

export default function Home() {
  return (
    <div className="container no-margin transform-center-vertical">
      <div className="text-center">
        <ProfilePicture imageUrl={"assets/ProfilePic.jpg"} />
      </div>
      <h1 className="center text-center no-margin text-ghost-white">
        James Charnley
      </h1>
      <h2 className="center text-center no-margin text-ghost-white">
        Programmer
      </h2>
      <div style={{ height: "60px" }}>
        <NavLinks
          links={[
            { href: "https://github.com/JamesCharnley", text: "GitHub" },
            {
              href: "https://www.linkedin.com/in/james-charnley-6b3486193/",
              text: "LinkedIn",
            },
            {
              href: "https://jamescharnley.itch.io/",
              text: "Itch.io",
            },
          ]}
          color={"ghostwhite"}
        />
      </div>
      <Button>Projects</Button>
    </div>
  );
}
