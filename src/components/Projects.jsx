import React from "react";
import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.jpeg"; 

export const Projects = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 mb-4">My Projects</h1>
          <p className="lead mb-4">
            Here are some of the projects I have worked on. Each project has provided me with invaluable experience and knowledge.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card bg-black text-white border-0 h-100">
              <img src={projectImage1} className="card-img-top" alt="AI Listing App"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">AI Listing App</h5>
                <p className="card-text text-white flex-grow-1">
                  Developed an AI-powered application for Amazon product listings. Utilizing prompt engineering, this app generates listings with specific formats and word counts, saving clients time, money, and resources.
                </p>
                <a href="https://www.linkedin.com/posts/malik-ibrar_ai-ecommerce-shopify-activity-7148628979627855872-vKvA?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card bg-black text-white border-0 h-100">
              <img src={projectImage2} className="card-img-top" alt="Chat Support for Websites"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">Chat Support for Websites</h5>
                <p className="card-text text-white flex-grow-1">
                  Created a chatbot for websites, significantly reducing the time website owners spend answering customer queries by providing instant, automated responses.
                </p>
                <a href="https://www.linkedin.com/posts/malik-ibrar_ai-chatbot-customerservice-activity-7150861040140947456-cttZ?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card bg-black text-white border-0 h-100">
              <img src={projectImage3} className="card-img-top" alt="AI VerticalSols Assistant"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">AI VerticalSols Assistant</h5>
                <p className="card-text text-white flex-grow-1">
                  Developed an AI-based chatbot using Retrieval-Augmented Generation (RAG) techniques and the Langchain library to answer company-specific questions effectively.
                </p>
                <a href="/" className="btn btn-outline-light">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card bg-black text-white border-0 h-100">
              <img src={projectImage4} className="card-img-top" alt="AI Pneumonia Classifier"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">AI Pneumonia Classifier</h5>
                <p className="card-text text-white flex-grow-1">
                  Developed a deep learning CNN model to classify medical images for pneumonia detection, providing accurate probability assessments to aid in diagnosis.
                </p>
                <a href="https://www.linkedin.com/posts/malik-ibrar_ai-healthcare-pneumonia-activity-7143248240723881984-MDLH?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card bg-black text-white border-0 h-100">
              <img src={projectImage5} className="card-img-top" alt="Object Detection"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">Object Detection for Potholes</h5>
                <p className="card-text text-white flex-grow-1">
                  Built a YOLO model for pothole detection, enabling easy identification of road hazards to improve road safety and maintenance.
                </p>
                <a href="https://www.linkedin.com/posts/malik-ibrar_ai-chatbot-customerservice-activity-7150861040140947456-cttZ?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
