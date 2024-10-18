import React, { useState } from 'react';

const ClaimForm = ({ onSubmitClaim }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    medicalRecord: '',
    claimAmount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitClaim(formData);
    setFormData({ patientName: '', medicalRecord: '', claimAmount: '' });
  };

  return (
    <div className="container">
      <h2>Submit Medical Claim</h2>
      <form onSubmit={handleSubmit}>
        <label>Patient Name:</label>
        <input type="text" name="patientName" onChange={handleChange} value={formData.patientName} required />
        
        <label>Medical Record:</label>
        <input type="file" name="medicalRecord" onChange={handleChange} required />
        
        <label>Claim Amount:</label>
        <input type="number" name="claimAmount" onChange={handleChange} value={formData.claimAmount} required />
        
        <button type="submit">Submit Claim</button>
      </form>
    </div>
  );
};

export default ClaimForm;
