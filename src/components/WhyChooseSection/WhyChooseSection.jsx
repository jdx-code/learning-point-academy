import React from "react";
import "./WhyChooseSection.css";

const WhyChooseSection = () => {
  return (
    <section className="why-section" id="whychoose">
      <div className="why-container">
        <h2>Why Choose Us? 🌟</h2>

        <p>At The Learning Point Academy, we don’t just teach—we mentor, motivate, and monitor progress every step of the way.</p>
        <div className="programs">
          <h3>Our Key Strengths:</h3>
          <ul className="why-list">
            <li>✔ <strong>100% Concept Clarity –</strong> We focus on understanding over rote memorization</li>
            <li>✔ <strong>Small Batches –</strong> Only 8–10 students per class for personalized attention</li>
            <li>✔ <strong>Dedicated Expert Tutors –</strong> Qualified, experienced, and compassionate educators</li>
            <li>✔ <strong>Smart Learning Tools –</strong> Blend of traditional and modern methods with worksheets, digital aids & practice sessions</li>
            <li>✔ <strong>Regular Evaluation  –</strong> Unit tests, mock exams, and detailed feedback reports</li>
            <li>✔ <strong>Proven Results –</strong> A consistent record of academic growth and board exam success</li>
          </ul>
        </div>        

        <hr className="divider" />

        <div className="programs">
          <h3>Our Programs 📘</h3>
          <ul>
            <li><strong>Primary (Classes I – V):</strong> Building curiosity and confidence through fun, interactive lessons that develop a strong academic base.</li>
            <li><strong>Middle School (VI – VIII):</strong> Reinforcing conceptual understanding, improving study habits, and encouraging independent thinking.</li>
            <li><strong>Secondary (IX – X):</strong> Comprehensive preparation for board exams through structured study plans, test series, and exam strategies.</li>
            <li><strong>Senior Secondary (XI – XII):</strong> Specialized subject-wise coaching for <strong>Science, Commerce, and Arts streams,</strong> focusing on both board and entrance-level readiness.</li>
            <li><strong>Competitive Edge Program:</strong> Foundation training and mock test series for entrance exams.</li>
          </ul>
        </div>

        <hr className="divider" />

        <div className="parents">
          <h3>Parent-Friendly Features 👨‍👩‍👧</h3>
          <p>We believe education is a partnership between teachers and parents. Hence, we ensure open communication and transparency at every step.</p>
          <ul>
            <li>✔ <strong>Regular Progress Reports & Feedback Meetings – </strong> Stay informed about your child’s growth.</li>
            <li>✔ <strong>Safe & Supportive Environment – </strong> A positive and disciplined atmosphere that encourages learning.</li>
            <li>✔ <strong>Flexible Class Timings – </strong> Convenient options (weekdays/weekends, offline/online modes).</li>
            <li>✔ <strong>Special Doubt-Clearing Sessions – </strong> Additional guidance and revision before exams.</li>
            <li>✔ <strong>Parent Counselling & Academic Support – </strong> Helping parents understand and assist their child’s educational journey.</li>            
          </ul>
        </div>

        <hr className="divider" />

        <div className="enroll">
          <h3>Enroll Today 🚀</h3>
          <p>
            Give your child the platform they deserve — a place where learning becomes joyful, achievements are celebrated, and potential is unlocked.
At <strong>The Learning Point Academy,</strong> academic excellence isn’t just a goal —
✨ It’s a journey we take together. ✨

          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
