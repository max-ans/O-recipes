import React from 'react';
import LoginForm from 'src/components/LoginForm';

import './header.scss';

const Header = () => (
  <header className="header">
    <h1 className="header-title">oRecipes</h1>
    <LoginForm />
  </header>
);

export default Header;
