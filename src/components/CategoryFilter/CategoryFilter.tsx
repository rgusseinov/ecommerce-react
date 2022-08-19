import React from 'react';
import { FilterByType } from './FilterByType';
import { FilterByPerson } from './FilterByPerson';
import { FilterByWeight } from './FilterByWeight';
import { FilterByPrice } from './FilterByPrice';
import { SideBarAdv } from './SideBarAdv';
import { SideBarQuestion } from './SideBarQuestion';
import { ShowMoreFilters } from './ShowMoreFilters';

export const CategoryFilter: React.FC = () => {
  return (
    <div className="product__category-filters category-filters">
      <div className="category-filters__container">
        <FilterByPrice />
        <FilterByType />
        <FilterByPerson />
        <FilterByWeight />
        <ShowMoreFilters />
      </div>
      <SideBarAdv />
      <SideBarQuestion />
    </div>
  );
};
