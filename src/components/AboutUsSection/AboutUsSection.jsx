// AboutUsSection.jsx
import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Established in <strong>2019</strong>, <strong>The Learning Point Academy</strong> has been dedicated to providing <strong>quality education and personalized guidance</strong> to students from <strong>Classes I to XII</strong>, covering all major boards — <strong>CBSE, ICSE, SEBA, and AHSEC.</strong>
        </p>

        <p>Over the years, we have successfully guided hundreds of students to:</p>
        <ul className="about-list">
          <li>Strengthen their fundamentals</li>
          <li>Develop analytical and problem-solving skills</li>
          <li>Improve overall academic performance</li>
          <li>Gain confidence in both classroom and exam settings</li>
        </ul>

        <p>
          Our approach combines <strong>experienced tutors, small batch sizes,</strong> and a <strong>result-oriented learning system</strong> that ensures every student receives the attention they deserve.
          Through <strong>concept clarity, regular assessments,</strong> and <strong>personal progress tracking,</strong> we help each learner grow at their own pace while maintaining academic excellence.
        </p>

        <p>
          At <strong>The Learning Point Academy</strong>, we firmly believe that every child can achieve greatness when guided with care, patience, and commitment — building the foundation for a brighter and more successful future.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
