import pin from '../assets/pin.png'
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <h2 className="about-heading">ARTIVERSE 3.0</h2>

      <section className="about">
        <div className="about-text">
            <img src={pin} alt="pin1" />
            <p><span className='highlight'>ARTIVERSE</span> is a 24-hour on-spot
            intra-college hackathon organized by the Department of Artificial Intelligence and Data Science, KNCET.</p>
        </div>

        <div className="about-text">
            <img src={pin} alt="pin1" />
            Participants receive problem statements on the spot and build innovative
            solutions within 24 hours, focusing on real-world challenges, teamwork,
            and execution.
        </div>

        <div className="about-text">
            <img src={pin} alt="pin1" />
            Exciting prizes and expert evaluation, Artiverse empowers students
            to innovate, compete, and lead.
        </div>
      </section>

    </section>
  );
};

export default About;