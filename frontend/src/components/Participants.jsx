import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./Participants.css";

const Participants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetch("https://ativerse-3-0.vercel.app/participants")
      .then(res => res.json())
      .then(data => setParticipants(data))
      .catch(() => setParticipants([]));
  }, []);

  // 📥 Excel download function
  const downloadExcel = () => {
    const dataForExcel = participants.map((p, i) => ({
      "S.No": i + 1,
      "Team Name": p.teamName,
      "Member 1 Name": p.member1Name,
      "Member 1 Email": p.member1Email,
      "Member 1 Phone": p.member1Phone,
      "Member 2 Name": p.member2Name,
      "Member 2 Email": p.member2Email,
      "Member 2 Phone": p.member2Phone,
      "Member 3 Name": p.member3Name,
      "Member 3 Email": p.member3Email,
      "Member 3 Phone": p.member3Phone,
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Participants");

    XLSX.writeFile(workbook, "ARTIVERSE_3.0_Participants.xlsx");
  };

  return (
    <div className="participants-container">
      <div className="participants-header">
        <h1 className="participants-title">ARTIVERSE 3.0 PARTICIPANTS</h1>
        <button className="download-btn" onClick={downloadExcel}>
          ⬇ Download
        </button>
      </div>

      <div className="table-wrapper">
        <table className="participants-table">
          <thead>
            <tr>
              <th>S.No</th>
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
                <td>{i + 1}</td>
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