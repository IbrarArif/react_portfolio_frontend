import React from 'react';
import backgroundImage from '../assets/simple-bg.jpg'; 
export const Home2 = () => {
  return (
    <div className="home2-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-container text-white p-5">
        <h1 className="display-1">Malik Ibrar</h1>
        <p className="lead">Welcome to my portfolio! Explore my work and feel free to connect with me. I look forward to hearing your feedback and thoughts.</p>
        <div className="roles-list">
          <span className="role">Software Engineer</span>
          <span className="role">Web Developer</span>
          <span className="role">AI Specialist</span>
          <span className="role">Machine Learning Expert</span>
          <span className="role">Deep Learning Enthusiast</span>
        </div>
      </div>
    </div>
  );
}
