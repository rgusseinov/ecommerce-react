import React from 'react';
import { Content } from './Content';
import { Social } from './Social';
import { Copyright } from './Copyright';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Content />
        <Social />
        <Copyright />
      </div>
    </footer>
  );
};
