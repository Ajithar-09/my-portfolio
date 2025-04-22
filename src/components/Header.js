import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  // Define the styles for the image
  const logoStyle = {
    width: '130px', // Adjust the width as needed
    height: '80px', // Maintain aspect ratio
  };

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div >
          {/* logo */}
          <a href="/">
            <img src={logo} alt="Logo" style={logoStyle} />
          </a>
          {/* button */}
        </div>
      </div>
    </header>
  );
};

export default Header;
