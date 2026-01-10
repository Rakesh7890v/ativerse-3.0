import React, { useState, useEffect } from 'react';
import './Countdown.css';

const CountdownTimer = () => {
  const targetDate = new Date('2026-02-06T10:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">HACKATHON STARTS IN</h2>
      <div className="countdown-grid">
        <div className="time-box">
          <span className="time-value">{days}</span>
          <span className="time-label">DAYS</span>
        </div>
        <div className="time-box">
          <span className="time-value">{hours}</span>
          <span className="time-label">HOURS</span>
        </div>
        <div className="time-box">
          <span className="time-value">{minutes}</span>
          <span className="time-label">MINUTES</span>
        </div>
        <div className="time-box">
          <span className="time-value">{seconds}</span>
          <span className="time-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;