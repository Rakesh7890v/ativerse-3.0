import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HackathonLaunch.css';
import confettiFile from '../assets/Confetti.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HackathonLaunch = () => {
  const [stage, setStage] = useState('initial'); // initial, textReveal, countdown, timer
  const [textIndex, setTextIndex] = useState(0);
  const [countdownNumber, setCountdownNumber] = useState(3);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const textSequence = ["Let's", "Start the", "HACKATHON!"];

  useEffect(() => {
    const savedStartTime = localStorage.getItem('hackathonStartTime');
    const confettiShown = localStorage.getItem('hackathonConfettiShown');

    if (!confettiShown) {
      setShowConfetti(true);
      localStorage.setItem('hackathonConfettiShown', 'true');
    }

    if (savedStartTime) {
      const startTime = parseInt(savedStartTime);
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 24 * 60 * 60 * 1000 - elapsed);

      if (remaining > 0) {
        setTimeRemaining(remaining);
        setStage('timer');
      }
    }
  }, []);

  useEffect(() => {
    if (stage === 'textReveal') {
      if (textIndex < textSequence.length) {
        const timer = setTimeout(() => setTextIndex(textIndex + 1), 1200);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setStage('countdown'), 800);
        return () => clearTimeout(timer);
      }
    }
  }, [stage, textIndex]);

  useEffect(() => {
    if (stage === 'countdown') {
      if (countdownNumber > 0) {
        const timer = setTimeout(() => setCountdownNumber(countdownNumber - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          const startTime = Date.now();
          localStorage.setItem('hackathonStartTime', startTime.toString());
          setTimeRemaining(24 * 60 * 60 * 1000);
          setStage('timer');
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [stage, countdownNumber]);

  useEffect(() => {
    if (stage === 'timer' && timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining(prev => {
          const newTime = Math.max(0, prev - 1000);
          if (newTime === 0) localStorage.removeItem('hackathonStartTime');
          return newTime;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [stage, timeRemaining]);

  const handleLaunch = () => {
    setStage('textReveal');
    setTextIndex(0);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0')
    };
  };

  const time = timeRemaining ? formatTime(timeRemaining) : { hours: '24', minutes: '00', seconds: '00' };

  return (
    <div className="hackathon-container">
      <AnimatePresence mode="wait">

        {stage === 'initial' && (
          <motion.div
            key="initial"
            className="initial-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="launch-button"
              onClick={handleLaunch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Launch
            </motion.button>
          </motion.div>
        )}

        {stage === 'textReveal' && (
          <motion.div
            key="textReveal"
            className="text-reveal-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-sequence">
              {textSequence.map((text, index) => (
                index < textIndex && (
                  <motion.div
                    key={index}
                    className="reveal-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {text}
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        )}

        {stage === 'countdown' && (
          <motion.div
            key="countdown"
            className="countdown-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatePresence mode="wait">
              {countdownNumber > 0 && (
                <motion.div
                  key={countdownNumber}
                  className="countdown-number"
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.3, 1.2, 1.2, 1.4] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  {countdownNumber}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {stage === 'timer' && (
          <motion.div
            key="timer"
            className="timer-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            
            <div className="fireworks-background">
              {showConfetti && (
                <DotLottieReact
                  src={confettiFile}
                  autoplay
                  loop={false}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
              <div className="video-overlay"></div>
            </div>

            <div className="timer-start">
              <motion.div
                className="timer-content"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.h1 className="timer-title">
                  HACKATHON ENDS IN
                </motion.h1>

                <div className="countdown-grid">
                  <div className="time-box">
                    <div className="time-value">{time.hours}</div>
                    <span className="time-label">HOURS</span>
                  </div>
                  <div className="time-box">
                    <div className="time-value">{time.minutes}</div>
                    <span className="time-label">MINUTES</span>
                  </div>
                  <div className="time-box">
                    <div className="time-value">{time.seconds}</div>
                    <span className="time-label">SECONDS</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default HackathonLaunch;
