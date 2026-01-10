import React, { useState } from "react";
import "./ApplicationForm.css";
import axios from 'axios'

const initialState = {
  teamName: "",
  member1Name: "",
  member1Email: "",
  member1Phone: "",
  member2Name: "",
  member2Email: "",
  member2Phone: "",
  member3Name: "",
  member3Email: "",
  member3Phone: ""
};


const ApplicationForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('https://ativerse-3-0.vercel.app/addParticipants', formData)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    localStorage.setItem("applicationForm", JSON.stringify(formData));
    alert("Application submitted successfully!");
    setFormData(initialState);
  };

  return (
    <section className="form-section">
      <h1 className="form-heading">Apply for Hackathon</h1>
      <p className="form-subheading">Come, thrive at Artiverse 3.0!</p>

      <form className="form-card" method="post" onSubmit={handleSubmit}>
        <h2 className="form-step">Team Details</h2>
        <label>Team Name *</label>
        <input type="text" name="teamName" placeholder="Enter your team name" value={formData.teamName} required onChange={handleChange} autoComplete="off" />

        <h2 className="form-step">Team Member 1</h2>
        <label>Name</label>
        <input type="text" name="member1Name" placeholder="Rakesh" value={formData.member1Name} onChange={handleChange} autoComplete="off" />

        <div className="form-row">
          <div>
            <label>Email</label>
            <input type="email" name="member1Email" placeholder="rakesh@gmail.com" value={formData.member1Email} onChange={handleChange} autoComplete="off" />
          </div>
          <div>
            <label>Phone</label>
            <input type="tel" name="member1Phone" placeholder="9362764721" value={formData.member1Phone} onChange={handleChange} maxLength="10" autoComplete="off" />
          </div>
        </div>

        <h2 className="form-step">Team Member 2</h2>
        <label>Name *</label>
        <input type="text" name="member2Name" placeholder="Sabari" required value={formData.member2Name} onChange={handleChange} autoComplete="off" />

        <div className="form-row">
          <div>
            <label>Email *</label>
            <input type="email" name="member2Email" placeholder="sabari@gmail.com" required value={formData.member2Email} onChange={handleChange} autoComplete="off" />
          </div>
          <div>
            <label>Phone *</label>
            <input type="tel" name="member2Phone" placeholder="9494758947" required value={formData.member2Phone} onChange={handleChange}  maxLength="10" autoComplete="off" />
          </div>
        </div>

        <h2 className="form-step">Team Member 3</h2>
        <label>Name</label>
        <input type="text" name="member3Name" placeholder="Kavin" onChange={handleChange} value={formData.member3Name} autoComplete="off" />

        <div className="form-row">
          <div>
            <label>Email</label>
            <input type="email" name="member3Email" placeholder="kavin@gmail.com" value={formData.member3Email} onChange={handleChange} autoComplete="off" />
          </div>
          <div>
            <label>Phone</label>
            <input type="tel" name="member3Phone" placeholder="5897873233" value={formData.member3Phone} onChange={handleChange}  maxLength="10" autoComplete="off" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </section>
  );
};

export default ApplicationForm;