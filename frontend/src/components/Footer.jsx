import "./Footer.css";

const Footer = () => {
  return (
    <section className="coordinators-section">
      <h2 className="section-heading">Co-ordinators</h2>

      <div className="coordinators-grid">
        <div className="coord-card">
          <h3>Faculty Coordinator</h3>
          <p>Gayathri PG</p>
          <span>893374289</span>
          <h3>Secretary</h3>
          <p>Gokulnath</p>
          <span>8974893434</span>
          <h3>Student Coordinator's</h3>
          <p>Rakesh V</p>
          <span>8608615266</span>
          <p>Sudharshana</p>
          <span>9794834743</span>
        </div>
      </div>

      <footer className="footer">
        <a href="https://www.linkedin.com/in/rakeshrishi/" target="_blank">
            Developed by <span>Rakesh V</span>
        </a>
      </footer>
    </section>
  );
};

export default Footer;
