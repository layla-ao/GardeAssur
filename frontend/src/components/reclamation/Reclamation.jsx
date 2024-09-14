import React, { useState } from 'react';
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./reclamation.css"

const Reclamation = () => {
  const [formState, setFormState] = useState({
    claimNumber: '',
    claimStatus: 'soumise',
    description: '',
    date: '',
    evidence: null,
    deviceType: '',
    series: ''
  });
  
  const [complaints, setComplaints] = useState([]);
  const [showComplaintsList, setShowComplaintsList] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement form submission logic
    // Generate a unique claim number
    const claimNumber = generateClaimNumber();
    setFormState((prevState) => ({
      ...prevState,
      claimNumber
    }));

    setComplaints((prevComplaints) => [...prevComplaints, formState]);
  };

  const generateClaimNumber = () => {
    // Generate a unique claim number
    return Math.floor(Math.random() * 1000000).toString();
  };

  const renderClaimSummary = () => {
    if (formState.claimNumber) {
      return (
        <div className="claim-summary">
          <h2>Récapitulatif de la réclamation</h2>
          <p>Numéro de réclamation: {formState.claimNumber}</p>
          <p>Statut: {formState.claimStatus}</p>
          <p>Description: {formState.description}</p>
          <p>Date: {formState.date}</p>
          <p>Type de device: {formState.deviceType}</p>
          <p>Numéro de série: {formState.series}</p>
          {formState.claimStatus === 'résolue' ? (
            <p>Votre réclamation a été résolue.</p>
          ) : (
            <p>Votre réclamation est en cours de traitement.</p>
          )}
        </div>
      );
    }
  };

  const renderComplaintsList = () => {
    if (complaints.length === 0) {
      return <p>Aucune réclamationenregistrée.</p>;
    }

    return (
      <div className="claim-summary">
        <h2>Suivi les réclamations</h2>
        <ul>
          {complaints.map((complaint) => (
            <li key={complaint.claimNumber}>
              <p>Numéro de réclamation: {complaint.claimNumber}</p>
              <p>Statut: {complaint.claimStatus}</p>
              <p>Type de device: {formState.deviceType}</p>
              <p>Numéro de série: {formState.series}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className='reclamation mb'>
      <Back name='Reclamation' title='Gérez vos réclamations en toute simplicité' cover={img} /> 
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <h2>Enregistrement des réclamations</h2>
          <div className="form-group">
            <label htmlFor="claimStatus">Statut:</label>
            <select
              name="claimStatus"
              id="claimStatus"
              value={formState.claimStatus}
              onChange={handleInputChange}
            >
              <option value="soumise">Soumise</option>
              <option value="en cours">En cours</option>
              <option value="résolue">Résolue</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              value={formState.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formState.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deviceType">Type de device:</label>
            <select
              name="deviceType"
              id="deviceType"
              value={formState.deviceType}
              onChange={handleInputChange}
            >
              <option value="">Sélectionnez un type de device</option>
              <option value="phone">Téléphone</option>
              <option value="laptop">Ordinateur portable</option>
              <option value="appliance">Appareil électroménager</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="series">Numéro de série:</label>
            <input
              type="text"
              name="series"
              id="series"
              value={formState.series}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              name="evidence"
              id="evidence"
              checked={formState.evidence}
              onChange={(event) =>
                setFormState((prevState) => ({
                  ...prevState,
                  evidence: event.target.checked
                }))
              }
            />
            <label htmlFor="evidence">
              Fournir une preuve de possession
            </label>
          </div>
          <button type="submit">
            Réclamer
          </button>
        </form>
        {renderClaimSummary()}
        <button className="btn" onClick={() => setShowComplaintsList(true)}>
          Afficher la liste des réclamations
        </button>
        {showComplaintsList && renderComplaintsList()}
      </div>
    </section>
  );
};

export default Reclamation