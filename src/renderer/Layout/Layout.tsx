// TopBar.js
import React from 'react';
import './Layout.scss';
import logoNavbar from '../../../assets/logo-navbar.png';
import { useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  return (
    <div
      className="top-bar"
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          marginLeft: '20px',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <img
          alt="icon"
          src={logoNavbar}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
    </div>
  );
}

export default Layout;
