import React, { useState } from 'react';
import './Form.css';

const Form = ({ serialNumber }) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
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
    const [formErrors, setFormErrors] = useState({});

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
        // Mock validation for demonstration purposes
        const errors = {};
        if (!formState.firstName) {
            errors.firstName = 'Veuillez saisir votre prénom';
        }
        if (!formState.lastName) {
            errors.lastName = 'Veuillez saisir votre nom';
        }
        if (!formState.email) {
            errors.email = 'Veuillez saisir votre adresse e-mail';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            errors.email = 'Adresse e-mail invalide';
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Form is valid, proceed with submission
            setShowSuccessMessage(true);
            // Mock reset form after submission
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
        }
    };

    const handleNextButtonClick = () => {
        setShowSuccessMessage(false);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleFormSubmit}>
                <h2>Achetez une assurance pour un Produit</h2>
                <div className="form-group">
                <label htmlFor="serialNumber">Numéro de série:</label>
                <input
                    type="text"
                    name="serialNumber"
                    id="serialNumber"
                    value={serialNumber} // Afficher le numéro de série reçu en tant que prop
                    readOnly // Pour rendre le champ en lecture seule
                    />
                    <label htmlFor="contractType">Assurance:</label>
                    <select
                        id="contractType"
                        name="contractType"
                        value={formState.contractType}
                        onChange={handleInputChange}
                    >
                        <option value="">Choisir type ... </option>
                        <option value="carteVie">Carte Vie Assurance </option>
                        <option value="gat">Gat Assurance </option>
                        <option value="star">Star Assurance </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pricePerDay">Prix/jour:</label>
                    <input
                        type="text"
                        name="pricePerDay"
                        id="pricePerDay"
                        value="2 DT"
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
                    <p>C'est, comme son nom l'indique, une assurance qui permet à une personne d'être <br />
                        couvert en cas de dommages sur son produit, comme le vol ou la casse.<br />
                        Une fois que le contrat d'assurance est signé, le produit est couvert par la garantie.
                    </p>
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
                    {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
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
                    {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
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
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
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
                <div className="form-group">
                    <label htmlFor="endDate">Date de fin:</label>
                    <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        value={formState.endDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="button-group">
                    <button type="reset" className="btn-reset" onClick={() => setFormState({})}>
                        Effacer
                    </button>
                    <button type="submit" className="btn-submit" onClick={handleNextButtonClick}>
                        Suivant
                    </button>
                </div>
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
