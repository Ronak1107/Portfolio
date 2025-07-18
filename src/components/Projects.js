import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Sales Dashboard',
      description: 'An interactive dashboard visualizing sales data to track performance and identify opportunities.',
      tools: 'Power BI',
    },
    {
      title: 'Tableau Data Storytelling Dashboard',
      description: 'Developed an effective and convincing dashboard using Tableau, starting from raw data that required extensive cleaning. Created diverse visualizations to present actionable insights to clients.',
      tools: 'Tableau, Data Cleaning',
    },
    {
      title: 'Fixnest.com',
      description: 'A website for property selling and renting, developed as a final year project.',
      tools: 'PHP, HTML, CSS, JavaScript',
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{project.tools}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
