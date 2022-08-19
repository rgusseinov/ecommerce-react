import { ProductAdditionalServiceSection } from './AdditionalServiceSection';
import { ProductBasicSection } from './BasicSection';
import { ProductColorSection } from './ColorSection';
import { ProductEquipmentSection } from './EquipmentSection';
import { ProductGiftSection } from './GiftSection';
import { ProductShoppingSection } from './ShoppingSection';
import { ProductWarrantySection } from './WarrantySection';

export const ProductPageDetails: React.FC = () => {
  return (
    <>
      <div className="product-page__info product-info">
        <div className="product-info__container">
          <ProductBasicSection />
          <ProductEquipmentSection />
          <ProductWarrantySection />
          <ProductAdditionalServiceSection />
          <ProductGiftSection />
          <ProductColorSection />
          <ProductShoppingSection />
        </div>
      </div>
    </>
  );
};
