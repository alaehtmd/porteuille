import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Navbar() {
  const [textColor, setTextColor] = useState('#212121');
  const location = useLocation();

  useEffect(() => {
      if (location.pathname === '/about') {
          setTextColor('#f5f5f5');
      } else {
          setTextColor('#212121');
      }
  }, [location.pathname]);

  return (
    <div className="navbar" >
      <Link 
        className="navbar-item" 
        to="/" 
        style={{color: textColor}}
      >
        Accueil
      </Link>
      <Link 
        className="navbar-item" 
        to="/about" 
        style={{color: textColor}}
      >
        À propos
      </Link>
    </div>
  )
};