import React from 'react';

function Header() {
  return (
    <header className="bg-dark text-white text-center py-5 hero-section">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">Ronak Kotadiya</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <span className="navbar-text text-white-50 ml-auto">
              <a href="mailto:rgkotadiya17@gmail.com" className="text-white-50">rgkotadiya17@gmail.com</a>
            </span>
          </div>
        </div>
      </nav>
      <div className="container" style={{ marginTop: '56px' }}>
        <h1 className="display-4">Ronak Kotadiya</h1>
        <p className="lead">Data Analyst | SQL | Python | Power BI</p>
      </div>
    </header>
  );
}

export default Header;
