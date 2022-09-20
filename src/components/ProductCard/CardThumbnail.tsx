import compare from '../../assets/img/main/product-item/compare.svg';
import arrowLeft from '../../assets/img/main/product-item/thumbnail-arrow-left.svg';
import arrowRight from '../../assets/img/main/product-item/thumbnail-arrow-right.svg';
import scooterImg1 from '../../assets/img/main/product-item/scooter-img-1.png';
import scooterImg2 from '../../assets/img/main/product-item/scooter-img-2.png';
import scooterImg3 from '../../assets/img/main/product-item/scooter-img-3.png';
import { useState } from 'react';

export const CardThumbnail: React.FC = () => {
  const [prevImage, setPrevImage] = useState<number>(1);
  const [nextImage, setNextImage] = useState<number>(2);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const onPrevImage = () => {
    setCurrentImageIndex((prev) => {
      // if (prev < 0) return;
      return prev - 1;
    });
  };

  const onNextImage = () => {
    setCurrentImageIndex((prev) => prev + 1);
  };

  /*   let slidePos = 1;
  const slides = 2;
  document.querySelector(".arrow-left").onclick = function (e) {
    if (slidePos < 0) return;
    if (slidePos >= slides) slidePos = slides - 1;
    console.log(`left`, slidePos);
  
    const switchImage = document
      .querySelector('.image-switch')
      .querySelectorAll('div.image-switch__image');
    clearClasses(switchImage[slidePos + 1]);
    slidePos--;
  };
  
  document.querySelector(".arrow-right").onclick = function (e) {
    if (slidePos > slides) return;
    if (slidePos <= 0) slidePos = 1;
    
    console.log(`right`, slidePos);
  
    const switchImage = document
      .querySelector('.image-switch')
      .querySelectorAll('div.image-switch__image');
  
      switchImage[slidePos].style.opacity = "1";
      switchImage[slidePos].style.zIndex = "-1";
    
    slidePos++;
  };
  
  const clearClasses = (element) => {
    element.style.opacity = "";
    element.style.zIndex = "";
  }
 */

  return (
    <div className="product-list-item__thumbnail product-thumbnail">
      <div className="product-thumbnail__container">
        <div className="product-thumbnail__marketing product-marketing">
          <div className="product-marketing__label hit">Хит</div>
          <div className="product-marketing__compare">
            <img src={compare} alt="kugoo" />
          </div>
        </div>

        <div className="product-thumbnail__image">
          <div className="image-switch">
            <div className="image-switch__item img1">
              <div className="image-switch__image">
                <img src={scooterImg1} alt="kugoo" />
              </div>
            </div>
            <div className="image-switch__item img2">
              <div className="image-switch__image">
                <img src={scooterImg2} alt="kugoo" />
              </div>
            </div>
            <div className="image-switch__item img3">
              <div className="image-switch__image">
                <img src={scooterImg3} alt="kugoo" />
              </div>
            </div>
          </div>
          <ul className="product-thumbnail__navs thumbnail-navs">
            <li
              className="thumbnail-navs__item arrow-left"
              onClick={onPrevImage}
            >
              <img src={arrowLeft} alt="kugoo" />
            </li>
            <li
              className="thumbnail-navs__item arrow-right"
              onClick={onNextImage}
            >
              <img src={arrowRight} alt="kugoo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
