// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about-skills.css';
import './styles/sections.css';
import './styles/contact-footer.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
