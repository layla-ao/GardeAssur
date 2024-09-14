import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
    // Réinitialiser les erreurs dès que l'utilisateur commence à modifier un champ
    setErrors({ email: "", password: "" });
  };

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
      setErrors(newErrors);
      return;
    }
  };

  return (
    <div className='login_container'>
      <div className='login_form_container'>
        <div className="left">
          <form className='form_container' onSubmit={handleSubmit}>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
            <input
              type='email'
              placeholder='Adresse E-mail'
              name='email'
              onChange={handleChange}
              value={data.email}
              required
              className='input'
            />
            {errors.email && <div className='error_msg'>{errors.email}</div>}
            <input
              type='password'
              placeholder='Mot de passe'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
              className='input'
            />
            {errors.password && <div className='error_msg'>{errors.password}</div>}
            <Link to="/Pages">
              <button type='submit' className='green_btn'>Se Connecter</button>
            </Link>
          </form>
        </div>
        <div className="right">
          <h1>Créer un Compte</h1>
          <Link to="/signup">
            <button type='button' className='white_btn'>S'inscrire</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;