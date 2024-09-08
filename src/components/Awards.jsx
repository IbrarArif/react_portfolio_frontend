import React from 'react';
import certificate1 from '../assets/certificate1.jpeg';
import certificate2 from '../assets/certificate2.jpeg';
import certificate3 from '../assets/certificate3.jpeg';
import certificate4 from '../assets/certificate4.jpeg';
import certificate5 from '../assets/certificate5.jpeg';

export const Awards = () => {
  return (
    <div className="bg-light text-dark py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-primary">Honors & Awards</h1>
          <p className="lead">
            I am thrilled to showcase my achievements in AI, a field that continues to evolve and revolutionize industries. My journey, guided by experts like Irfan Malik, has been both challenging and rewarding. Here’s a glimpse of the certifications that mark my progress.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm border-light rounded h-100">
              <img src={certificate1} className="card-img-top" alt="AI Basic Course"/>
              <div className="card-body">
                <h5 className="card-title">AI Basic Course</h5>
                <p className="card-text">Completed the AI Basic Course with a focus on fundamental AI concepts and practical applications. Demonstrated a strong understanding of AI and contributed effectively through assignments and projects.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm border-light rounded h-100">
              <img src={certificate2} className="card-img-top" alt="Hugging Face Audio Course"/>
              <div className="card-body">
                <h5 className="card-title">Hugging Face Audio Course</h5>
                <p className="card-text">Gained expertise in audio technologies, including Automatic Speech Recognition and Text-to-Speech synthesis. Acquired valuable skills in audio classification and processing, thanks to the comprehensive resources provided by Hugging Face.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm border-light rounded h-100">
              <img src={certificate3} className="card-img-top" alt="AI and Public Health"/>
              <div className="card-body">
                <h5 className="card-title">AI and Public Health</h5>
                <p className="card-text">Completed the AI and Public Health course, gaining insights into how AI can impact public health systems. This course provided a deep understanding of AI-driven solutions for improving public health outcomes.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm border-light rounded h-100">
              <img src={certificate4} className="card-img-top" alt="AI Internship Certificate"/>
              <div className="card-body">
                <h5 className="card-title">AI Internship Certificate</h5>
                <p className="card-text">Completed a rigorous AI internship, working on real-world projects involving recommendation systems and chatbots. Gained hands-on experience and practical skills that were recognized through this certificate.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm border-light rounded h-100">
              <img src={certificate5} className="card-img-top" alt="Recommendation Systems"/>
              <div className="card-body">
                <h5 className="card-title">Recommendation Systems</h5>
                <p className="card-text">Completed Stanford & DeepLearning.AI’s course on recommendation systems, focusing on unsupervised learning and reinforcement learning. Acquired the skills to develop personalized recommendations and intelligent agents.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
