import "./Home.css";
import { Monitor, MapPin, Trophy, Lightbulb } from "lucide-react";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="glassmorphism">
        <div className="hero-card">
          <h1 className="home-title">
            ARTIVERSE 3.0
            <span className="cursor">|</span>
          </h1>

          <p className="subtitle">Innovate • Build • Compete • Win</p>

          <div className="info-row">
            <div className="info-item">
              <Monitor className="info-icon" />
              24 Hour Hackathon
            </div>

            <div className="info-item">
              <Lightbulb className="info-icon" />
              On-Spot Problem Statement
            </div>

            <div className="info-item">
              <MapPin className="info-icon" />
              A Block
              <p style={{ fontFamily: "Poppins" }}>
                4<sup style={{ fontFamily: "Poppins" }}>th</sup>
              </p>
              Floor AD, KNCET
            </div>

            <div className="info-item">
              <Trophy className="info-icon" />
              Exciting Prizes
            </div>
          </div>

          <a href="#apply" className="register-btn">
            REGISTER NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;