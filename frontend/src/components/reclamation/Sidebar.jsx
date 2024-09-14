import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
  // Exemple de données de réclamation
  const claims = [
    { claimNumber: 1234, status: 'soumise' },
    { claimNumber: 5678, status: 'en cours' },
    { claimNumber: 91011, status: 'résolue' }
  ];

  return (
    <div className="sidebar">
      <h3>Liste des Réclamations</h3>
      <ul>
        {claims.map((claim, index) => (
          <li key={index}>
            Réclamation #{claim.claimNumber} - Statut: {claim.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
