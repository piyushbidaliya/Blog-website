import React from "react";
import './about.css';
import {TeamMember} from '../../components';
import image from '../../assests/image.jpg'

const About = () =>{
    return(
        <div>
        <div className="header">
          {/* Image with text overlay */}
          <div className="overlay">
            <h1>Welcome to Our Team</h1>
            <p>Learn more about us and our mission.</p>
          </div>
          <img src={image} alt="About Us" />
        </div>
  
        <section className="admin-section">
          <h2>Meet the Admin</h2>
          {/* Display information about the admin */}
        </section>
  
        <section className="team-section">
          <h2>Our Team</h2>
          {/* Display information about the team members */}
          <TeamMember name="John Doe" position="CEO" description="Lorem ipsum..." />
          <TeamMember name="Jane Smith" position="COO" description="Lorem ipsum..." />
          {/* Add more team members */}
        </section>
      </div>
        
    )
}

export default About;