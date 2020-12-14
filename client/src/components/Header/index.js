import React from 'react';
// importing link from react-router-dom
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <Link to='/'><h1>Deep Thoughts</h1></Link>

      <nav className="text-center">
        <Link to='/login'>login</Link>
        <Link to="/Signup">Signup</Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;
