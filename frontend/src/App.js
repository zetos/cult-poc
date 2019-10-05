import React from 'react';

import './App.css';
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
    <img src={logo} alt="Cult-poc"/>
    
    <div className="content">
    <p>
    Ofereça <strong>spots</strong> para cultistas e encontre <strong>talentos</strong> para sua ordem.
    </p>

    <form>
      <label htmlFor="email">E-MAIL *</label>
      <input type="email" id="email" placeholder="Seu e-mail.." />

      <button className="btn" type="submit">Entrar</button>
    </form>
    </div>
    </div>
    );
  }
  
  export default App;
  