import React from "react";
import './teammember.css';


const TeamMember = ({ name, position, description }) => {
    return (
      <div className="team-member">
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    );
  };

export default TeamMember;