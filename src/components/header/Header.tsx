import React from 'react';
import { HeaderTop } from './HeaderTop';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderMenu } from './HeaderMenu';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderMenu />
    </header>
  );
};
