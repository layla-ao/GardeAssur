import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState("");

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
    // Réinitialiser les erreurs dès que l'utilisateur commence à modifier un champ
    setErrors("");
  };

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation de l'email
    if (!data.email.endsWith('@gmail.com')) {
      newErrors.email = 'L\'adresse e-mail doit se terminer par "@gmail.com"';
    }
    // Validation du mot de passe (alphanumérique)
    if (!/^[a-zA-Z0-9]+$/.test(data.password)) {
      newErrors.password = 'Le mot de passe doit être alphanumérique (lettres et chiffres)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(Object.values(newErrors).join(", "));
      return;
    }

    try {
      const url = "http://localhost:3000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      // Rediriger vers la page d'accueil après une connexion réussie
      history.push('/home');
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setErrors(error.response.data.message);
      }
    }
  };

  return (
    <div className='signup_container'>
      <div className='signup_form_container'>
        <div className="left_signup">
          <h1>Bienvenue !</h1>
          <div className='logo'>
            <img src='./images/logoblanc.png' alt='' />
          </div>
          <Link to="/login">
            <button type='button' className='white_btn__signup'>Se connecter</button>
          </Link>
        </div>
        <div className="right_signup">
          <form className='form_container_signup' onSubmit={handleSubmit}>
            <h1>Créer un Compte</h1>
            <input
              type='text'
              placeholder='Nom'
              name='firstName'
              onChange={handleChange}
              value={data.firstName}
              required
              className='input'
            />
            <input
              type='text'
              placeholder='Prénom'
              name='lastName'
              onChange={handleChange}
              value={data.lastName}
              required
              className='input'
            />
            <input
              type='email'
              placeholder='Adresse E-mail'
              name='email'
              onChange={handleChange}
              value={data.email}
              required
              className='input'
            />
            <input
              type='password'
              placeholder='Mot de passe'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
              className='input_signup'
            />
            {errors && <div className='error_msg_signup'>{errors}</div>}
            <Link to="/">
            <button type='submit' className='green_btn_signup'>S'inscrire</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
