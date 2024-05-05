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
      evidence: null
    });
  
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
            
            {formState.claimStatus === 'résolue' ? (
              <p>Votre réclamation a été résolue.</p>
            ) : (
              <p>Votre réclamation est en cours de traitement.</p>
            )}
          </div>
        );
      }
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
          
          <button type="submit" className="btn">
            Réclamer
          </button>
        </form>
        {renderClaimSummary()}
      </div>
      </section>
    );
  };
  

export default Reclamation
