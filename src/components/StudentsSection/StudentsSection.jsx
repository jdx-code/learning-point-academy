import React from "react";
import "./StudentsSection.css";

const StudentsSection = () => {
  const students = [
    {
      name: "Reyan Boro",
      achievement: "Class XII – 2nd Rank (2024)",
      img: "/student_01.jpeg",
    },
    {
      name: "Shaika Khan",
      achievement: "Class X – 1st Rank (2024)",
      img: "/student_02.jpeg",
    },    
    {
      name: "Manisha Upadhyay",
      achievement: "Class X – 3rd Rank (2024)",
      img: "/student_03.jpeg",
    },
  ];

  return (
    <section className="students-section" id="students">
      <div className="students-container">
        <h2>Our Successful Students 🏆</h2>
        <div className="students-grid">
          {students.map((student, index) => (
            <div className="student-card" key={index}>
              <img
                src={student.img}
                alt={student.name}
                className="student-img"
              />
              <h3>{student.name}</h3>
              <p>{student.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
