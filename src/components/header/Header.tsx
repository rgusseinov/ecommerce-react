import React, { useState } from 'react';
import { HeaderTop } from './HeaderTop';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderMenu } from './HeaderMenu';
let popupType: string;

export const Header: React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const triggerDropdownList = (e: any) => {
    setDropdown(!dropdown);
    if (e.target.classList.contains('header-contact__phone')) {
      popupType = 'call-center';
    } else if (e.target.classList.contains('menu-catalog__label')) {
      popupType = 'menu-catalog';
    }

    // console.log(`target`, e.target.classList);
  };

  // console.log(`dropdown`, dropdown);
  return (
    <header className="header">
      <HeaderTop
        dropdown={dropdown}
        popupType={popupType}
        triggerDropdownList={triggerDropdownList}
      />
      <HeaderMiddle
        dropdown={dropdown}
        popupType={popupType}
        triggerDropdownList={triggerDropdownList}
      />
      <HeaderMenu />
    </header>
  );
};
