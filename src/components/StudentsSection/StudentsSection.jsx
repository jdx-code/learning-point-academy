import React from "react";
import "./StudentsSection.css";

const StudentsSection = () => {
  const students = [
    {
      name: "Reyan Boro",
      achievement: "Class X",
      img: "/student_01.jpeg",
    },
    {
      name: "Shaika Khan",
      achievement: "Class X",
      img: "/student_02.jpeg",
    },    
    {
      name: "Manisha Upadhyay",
      achievement: "Class X",
      img: "/student_03.jpeg",
    },
    {
      name: "Abhishek Verma",
      achievement: "Class X",
      img: "/student_04.png",
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
