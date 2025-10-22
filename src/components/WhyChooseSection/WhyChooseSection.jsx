import React from "react";
import "./WhyChooseSection.css";

const WhyChooseSection = () => {
  return (
    <section className="why-section" id="whychoose">
      <div className="why-container">
        <h2>Why Choose Us? 🌟</h2>

        <ul className="why-list">
          <li>✔ <strong>100% Concept Clarity –</strong> We focus on understanding, not just memorizing</li>
          <li>✔ <strong>Small Batches –</strong> Maximum 8–10 students per class for personal attention</li>
          <li>✔ <strong>Dedicated Expert Tutors –</strong> Experienced, caring, and result-oriented teachers</li>
          <li>✔ <strong>Smart Learning Tools –</strong> Modern teaching methods with practice worksheets & digital support</li>
          <li>✔ <strong>Proven Results –</strong> Consistent academic improvement and success in exams</li>
        </ul>

        <hr className="divider" />

        <div className="programs">
          <h3>Our Programs 📘</h3>
          <ul>
            <li><strong>Primary (Classes I – V):</strong> Fun & interactive learning that builds a strong base</li>
            <li><strong>Middle School (VI – VIII):</strong> Boosting confidence with concept-driven teaching</li>
            <li><strong>Secondary (IX – X):</strong> Rigorous preparation for board exams with test series</li>
            <li><strong>Senior Secondary (XI – XII):</strong> Specialized coaching for Science, Commerce & Arts</li>
            <li><strong>Competitive Edge:</strong> Foundation for Mock Tests, Entrance Exams, and more</li>
          </ul>
        </div>

        <hr className="divider" />

        <div className="parents">
          <h3>Parent-Friendly Features 👨‍👩‍👧</h3>
          <ul>
            <li>Regular progress reports & feedback meetings</li>
            <li>Safe and supportive environment for your child</li>
            <li>Flexible class timings (weekdays/weekends, offline/online)</li>
            <li>Special doubt-clearing sessions and extra classes before exams</li>
          </ul>
        </div>

        <hr className="divider" />

        <div className="enroll">
          <h3>Enroll Today 🚀</h3>
          <p>
            Give your child the right platform to learn, grow, and achieve.
            With <strong>The Learning Point Academy</strong>, academic excellence
            is not just a goal — it’s a journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
