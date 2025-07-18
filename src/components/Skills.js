import React from 'react';

function Skills() {
  const coreTools = ['SQL', 'Power BI', 'Tableau', 'Excel'];
  const programmingSkills = ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP'];
  const cybersecuritySkills = ['Network Security', 'Threat Hunting', 'Vulnerability Management'];
  const badgeColors = ['primary', 'success', 'danger', 'dark', 'info', 'warning', 'secondary'];
  const textColor = '#000000'; // Black color for all skill text

  return (
    <section id="skills" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            {/* First Row: Core Tools */}
            <div className="mb-4">
              {coreTools.map((skill, index) => (
                <span key={skill} className={`badge badge-${badgeColors[index % badgeColors.length]} badge-pill mr-2 mb-2 p-3`} style={{ color: textColor }}>{skill}</span>
              ))}
            </div>
            {/* Second Row: Programming Skills */}
            <div className="mb-4">
              {programmingSkills.map((skill, index) => (
                <span key={skill} className={`badge badge-${badgeColors[(index + coreTools.length) % badgeColors.length]} badge-pill mr-2 mb-2 p-3`} style={{ color: textColor }}>{skill}</span>
              ))}
            </div>
            {/* Third Row: Cybersecurity Skills */}
            <div>
              {cybersecuritySkills.map((skill, index) => (
                <span key={skill} className={`badge badge-${badgeColors[(index + coreTools.length + programmingSkills.length) % badgeColors.length]} badge-pill mr-2 mb-2 p-3`} style={{ color: textColor }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
