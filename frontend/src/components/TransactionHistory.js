import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="container">
      <h2>Transaction History</h2>
      {transactions.length ? (
        <ul>
          {transactions.map((tx, index) => (
            <li key={index}>{tx}</li>
          ))}
        </ul>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};

export default TransactionHistory;
