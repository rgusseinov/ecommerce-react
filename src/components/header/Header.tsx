import React from 'react';
import { HeaderTop } from './HeaderTop';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderMenu } from './HeaderMenu';
import popupProps from '../../types/types';

export const Header: React.FC<popupProps> = ({
  popupState,
  triggerDropdownList
}) => {
  return (
    <header className="header">
      <HeaderTop
        popupState={popupState}
        triggerDropdownList={triggerDropdownList}
      />
      <HeaderMiddle
        popupState={popupState}
        triggerDropdownList={triggerDropdownList}
      />
      <HeaderMenu />
    </header>
  );
};
