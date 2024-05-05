import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleNextButtonClick = () => {
        // Afficher le message de succès lorsque l'utilisateur clique sur le bouton "Suivant"
        setShowSuccessMessage(true);
      };
  const [formState, setFormState] = useState({
    contractType: '',
    pricePerDay: '',
    hasTheftProtection: false,
    terms: '',
    firstName: '',
    lastName: '',
    email: '',
    startDate: '',
    endDate: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement form submission logic
    setFormState({
      contractType: '',
      pricePerDay: '',
      hasTheftProtection: false,
      terms: '',
      firstName: '',
      lastName: '',
      email: '',
      startDate: '',
      endDate: ''
    });
    // TODO: Display success message
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <h2>Achetez une assurance pour mon SmartPhone</h2>
        <div className="form-group">
          <label htmlFor="contractType">Type de contrat:</label>
          <select id="contractType" 
            value={formState.contractType}
            onChange={handleInputChange}>
          <option>Choisir type ... </option>
          <option>Assurance mobile</option>
        </select>
          
        </div>
        <div className="form-group">
          <label htmlFor="pricePerDay">Prix/jour:</label>
          <input
            type="text"
            name="pricePerDay"
            id="pricePerDay"
            value={formState.pricePerDay}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hasTheftProtection">Protection vol:</label>
          <input
            type="checkbox"
            name="hasTheftProtection"
            id="hasTheftProtection"
            checked={formState.hasTheftProtection}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="terms">Termes du contrat:</label>
          <textarea value={ "Une assurance mobile, c'est, comme son nom l'indique, une assurance qui permet à une personned'être couvert en cas de dommages sur son téléphone portable, comme le vol ou la casse. Une fois que le contrat d assurance est signé, le smartphone est couvert par la garantie"}>
            
        </textarea>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Prénom:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Date de début:</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formState.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-$@$v=v1.16$@$group">
          <label htmlFor="endDate">Date de fin:</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formState.endDate}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn" onClick={handleNextButtonClick}>
          Suivant
        </button>
      </form>
      
       {showSuccessMessage && (
        <div className="success-message">
          <p>Commande passée avec succès!</p>
        </div>
       )}
    </div>
  );
};

export default Form;