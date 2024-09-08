import React from "react";
import portfolioImage from "../assets/portfolio.png";

export const Home = () => {
  return (
    <>
      <div className="bg-black text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 order-2 order-lg-1">
              <h1 className="title text-center mb-4">Who is Malik Ibrar</h1>
              <div className="about-text">
                <p className="mb-3">
                  Greetings! I am Malik Ibrar, a dedicated AI enthusiast with a
                  relentless commitment to advancing my knowledge and prowess in
                  the dynamic realm of artificial intelligence.
                </p>
                <p className="mb-3">
                  My journey unfolds against the backdrop of continuous
                  exploration and growth, fueled by an insatiable curiosity for
                  the possibilities that AI holds.
                </p>
                <p className="mb-3">
                  With a solid foundation in AI, machine learning, and deep
                  learning, I find myself at the intersection of innovation and
                  transformation. Currently immersed in the intricate world of
                  Natural Language Processing (NLP) tasks and at the forefront
                  of pioneering AI Applications driven by cutting-edge GPT
                  technology, I am constantly pushing the boundaries of what is
                  possible in the field.
                </p>
                <p className="mb-3">
                  My passion extends to exploring emerging technologies such as
                  LangChain and generative AI, where I am enthusiastic about
                  broadening my expertise and unlocking their transformative
                  potential within the expansive landscape of AI.
                </p>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 text-center">
              <img
                src={portfolioImage}
                alt="Malik Ibrar"
                className="img-fluid rounded-circle border mt-4"
              />
            </div>
          </div>
          <h1 className="title text-center mt-5">My Vision</h1>
          <div className="about-text mt-3">
            <p>
              My vision is to harness my skills and passion for technology to
              drive global transformation and innovation. I am committed to
              building a tech startup that pushes boundaries and creates
              meaningful change in the world. My goal is to develop
              groundbreaking solutions that not only benefit individuals but
              also foster a supportive ecosystem for visionary entrepreneurs. By
              contributing to the latest emerging technologies, I aim to make a
              lasting impact, inspire future innovators, and help shape a
              brighter future for everyone. With a lifelong dedication to
              nurturing talent and advancing technology, I am excited to embark
              on this journey of transforming lives through innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
