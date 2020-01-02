import React from "react";
import { ContentContainer } from "../components/Containers";
import ReactMarkdown from "react-markdown";

const content = require("../content/pages/about.json");

interface TeamMemberInterface {
  name: string;
  position: string;
  photo: string;
}

const TeamMember = ({ name, position, photo }: TeamMemberInterface) => (
  <div className="team-member">
    <img className="team-member-image" src={photo} alt="avatar" />
    <div>
      <strong>{name}</strong>
      {` : ${position}`}
    </div>
  </div>
);

const About = () => (
  <ContentContainer>
    <h1>{content.title}</h1>
    <article className="text-block">
      <ReactMarkdown source={content.intro} />
    </article>
    <h2>The team</h2>
    <section className="row justify-content-center team">
      {content.team.map((teamMember: any, index: number) => {
        return <TeamMember key={index} {...teamMember} />;
      })}
    </section>
  </ContentContainer>
);

export default About;
