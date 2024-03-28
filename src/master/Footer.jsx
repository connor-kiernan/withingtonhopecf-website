import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
      <footer>
        <hr/>
        <p className="text-center text-secondary">
          <small>Copyright © {year} Withington Hope Club De Fútbol</small>
        </p>
      </footer>
  );
};

export default Footer;