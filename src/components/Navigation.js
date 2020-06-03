import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        <Link to="/" className="f3 white dib mr4">
          Home
        </Link>
        <Link to="/video" className="f3 white dib mr3">
          Video
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
