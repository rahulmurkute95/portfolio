
import React from "react";
import "./education.css";
const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      college:
        "G. H. Raisoni College of Engineering and Management",
      location: "Pune, Maharashtra, India",
      duration: "2022 - 2026",
      description:
        "Pursuing a Bachelor's degree in Information Technology, with an interest in full-stack web development, java ,software engineering, database management, and problem-solving.",
      subjects: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Development",
        "Cloud Computing",
        "Software Engineering",
      ],
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      field: "12th Standard",
      college: "Mahatma Gandhi Mahavidyalaya",
      location: "Karjat, Ahilyanagar, Maharashtra",
      duration: "2021 - 2022",
      description:
        "Completed higher secondary education and developed a foundation for undergraduate studies.",
      subjects: [],
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      field: "10th Standard",
      college: "Mahatma Gandhi Vidyalaya",
      location: "Karjat, Ahilyanagar, Maharashtra",
      duration: "2019 - 2020",
      description:
        "Completed secondary school education and developed foundational academic knowledge.",
      subjects: [],
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="section-title">
          My <span>Education</span>
        </h2>

        <p className="section-subtitle">
          My academic journey and qualifications
        </p>

        <div className="education-grid">
          {educationData.map((item) => (
            <article className="education-card" key={item.id}>
              <div className="education-icon">🎓</div>

              <span className="education-duration">
                {item.duration}
              </span>

              <h3>{item.degree}</h3>
              <h4>{item.field}</h4>

              <p className="education-college">
                {item.college}
              </p>

              <p className="education-location">
                📍 {item.location}
              </p>

              <p className="education-description">
                {item.description}
              </p>

              {item.subjects.length > 0 && (
                <div className="education-subjects">
                  <h5>Relevant Subjects</h5>

                  <div className="education-tags">
                    {item.subjects.map((subject) => (
                      <span key={subject}>{subject}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Education;
