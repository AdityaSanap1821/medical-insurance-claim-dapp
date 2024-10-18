import React from 'react';

const ClaimStatus = ({ claimId, status }) => {
  return (
    <div className="container">
      <h2>Claim Status</h2>
      <p>Status for Claim ID {claimId}: {status}</p>
    </div>
  );
};

export default ClaimStatus;
