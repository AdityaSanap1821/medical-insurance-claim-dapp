import React from 'react';

const AdminPanel = ({ claimId, onApprove, onReject }) => {
  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <p>Review Claim ID: {claimId}</p>
      <button onClick={() => onApprove(claimId)}>Approve</button>
      <button onClick={() => onReject(claimId)}>Reject</button>
    </div>
  );
};

export default AdminPanel;
