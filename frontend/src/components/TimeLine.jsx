import React, { useState, useEffect } from 'react';
import './TimeLine.css'

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: 'Registration Starts',
      date: '21/1/2026',
      time: '',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Registration Ends',
      date: '30/1/2026',
      time: '',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Assessment',
      date: '27/01/2026 - First Year\n 31/1/2026 - Second & Third Year',
      time: '',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Result Announcement',
      date: '02/02/2026',
      time: '',
      status: 'current'
    },
    {
      id: 5,
      title: 'Hackathon Day 1',
      date: '06/02/2026',
      time: '10:00 AM',
      status: 'pending'
    },
    {
      id: 6,
      title: 'First Review',
      date: '06/02/2026',
      time: '3:00 PM',
      status: 'pending'
    },
    {
      id: 7,
      title: 'Second Review',
      date: '06/02/2026',
      time: '11:00 PM',
      status: 'pending'
    },
    {
      id: 8,
      title: 'Final Review',
      date: '07/02/2026',
      time: '10:00 AM',
      status: 'pending'
    }
  ];

  const [items] = useState(timelineData);

  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">Event Timeline</h2>
      <div className="timeline">
        {items.map((item, index) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-marker">
              <div className={`timeline-dot ${item.status}`}>
                {item.status === 'completed' && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              {index !== items.length - 1 && (
                <div className="timeline-line">
                  <div
                    className={`timeline-line-fill ${
                      item.status === 'completed' ? 'completed' : ''
                    }`}
                  ></div>
                </div>
              )}
            </div>
            <div className="timeline-content">
              <div className={`timeline-title ${item.status}`}>
                {item.title}
              </div>
              <div className={`timeline-date ${item.status}`}>
                {item.date}
                {item.time && <span className="timeline-time"> • {item.time}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
