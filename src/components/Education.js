import React from 'react';

function Education() {
  const educationDetails = [
    {
      degree: 'Postgraduate Certificate in Data Analytics',
      institution: 'Durham College, Oshawa, Ontario, Canada',
      years: '2025',
      description: 'Focused on transforming complex datasets into actionable insights using various analytical tools and techniques.'
    },
    {
      degree: 'Postgraduate Certificate in Cybersecurity',
      institution: 'Durham College, Oshawa, Ontario, Canada',
      years: '2024',
      description: 'Gained expertise in network security, penetration testing, threat hunting, and vulnerability management.'
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Veer Narmad South Gujarat University (VNSGU), Surat, India',
      years: '2020 - 2022',
      description: 'Developed a strong foundation in computer applications and programming principles.'
    }
  ];

  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Education</h2>
        <div className="row justify-content-center">
          {educationDetails.map((edu, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{edu.degree}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{edu.institution}</h6>
                  <p className="card-text">
                    <small className="text-muted">{edu.years}</small>
                  </p>
                  <p className="card-text">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
