import React, { useState } from 'react';
import ClaimForm from './components/ClaimForm';
import ClaimStatus from './components/ClaimStatus';
import AdminPanel from './components/AdminPanel';
import TransactionHistory from './components/TransactionHistory';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(null); // State to hold logged-in user

  const handleLogin = (userData) => {
    setUser(userData); // Set user data when logging in
  };

  // Mock data for demonstration
  const claimId = 'example-claim-id';
  const claimStatus = 'Pending';
  const transactions = ["Transaction 1", "Transaction 2"];

  return (
    <div>
      <h1>Blockchain-Based Medical Insurance Claim DApp</h1>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : user.role === 'patient' ? (
        <>
          <ClaimForm onSubmitClaim={(data) => console.log('Claim submitted:', data)} />
          <ClaimStatus claimId={claimId} status={claimStatus} />
          <TransactionHistory transactions={transactions} />
        </>
      ) : (
        <AdminPanel claimId={claimId} onApprove={(id) => console.log(`Claim ${id} approved`)} onReject={(id) => console.log(`Claim ${id} rejected`)} />
      )}
    </div>
  );
};

export default App;
