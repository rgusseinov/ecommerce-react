import React from 'react';
import { HeaderMenu } from './HeaderMenu';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderTop } from './HeaderTop';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderMenu />
    </header>
  );
};
