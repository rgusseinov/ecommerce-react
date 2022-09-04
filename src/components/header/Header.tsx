import React, { useState } from 'react';
import { HeaderTop } from './HeaderTop';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderMenu } from './HeaderMenu';

export const Header: React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const triggerDropdownList = (e: any) => {
    setDropdown(!dropdown);
  };

  /* useEffect(() => {
    document.body.addEventListener('click', triggerDropdownList);
    return () => {
      document.body.removeEventListener('click', triggerDropdownList);
    };
  }, []); */

  return (
    <header className="header">
      <HeaderTop
        dropdown={dropdown}
        triggerDropdownList={triggerDropdownList}
      />
      <HeaderMiddle
        dropdown={dropdown}
        triggerDropdownList={triggerDropdownList}
      />
      <HeaderMenu />
    </header>
  );
};
