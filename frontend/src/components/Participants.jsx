import { useEffect, useState } from "react";
import "./Participants.css";

const Participants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/participants")
      .then(res => res.json())
      .then(data => setParticipants(data))
      .catch(() => setParticipants([]));
  }, []);

  return (
    <div className="participants-container">
      <h1 className="participants-title">ARTIVERSE 3.0 PARTICIPANTS</h1>

      <div className="table-wrapper">
        <table className="participants-table">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Member 1</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Member 2</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Member 3</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p, i) => (
              <tr key={i}>
                <td>{p.teamName}</td>
                <td>{p.member1Name}</td>
                <td>{p.member1Email}</td>
                <td>{p.member1Phone}</td>
                <td>{p.member2Name}</td>
                <td>{p.member2Email}</td>
                <td>{p.member2Phone}</td>
                <td>{p.member3Name}</td>
                <td>{p.member3Email}</td>
                <td>{p.member3Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Participants;