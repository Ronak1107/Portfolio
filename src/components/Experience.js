import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Junior System Administrator',
      company: 'HARIKRUSHNA INFOTECH',
      years: 'June 2022 - November 2023',
      description: 'Managed client requirements and ensured timely project delivery. My responsibilities included overseeing company projects from inception to completion, ensuring all deadlines were met.'
    }
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Work Experience</h2>
        <div className="row">
          {experiences.map((exp, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{exp.role}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                  <p className="card-text">
                    <small className="text-muted">{exp.years}</small>
                  </p>
                  <p className="card-text">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
