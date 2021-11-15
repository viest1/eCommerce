import React, { useContext } from 'react';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import {
  ContainerProductsCart,
  ImgStyled,
  PStyled,
  ContainerQuantity,
  ButtonStyledBefore,
  ButtonStyledAfter,
  ContainerFlexItemsP,
  FlexItemP,
} from './CartDisplayItem.style';

const CartDisplayItem = ({ item: { title, quantity, price, imgSrc, id, timestamp } }) => {
  const { itemsInCart, setItemsInCart } = useContext(ECommerceContext);

  const handleQuantity = (number) => {
    if (quantity + number < 1) {
      return [...itemsInCart.filter((item) => item.id !== id)];
    }
    return [...itemsInCart.filter((item) => item.id !== id), { title, price, imgSrc, quantity: quantity + number, id, timestamp }];
  };
  const handleAddQuantity = () => {
    setItemsInCart(handleQuantity(1));
  };
  const handleSubtractQuantity = () => {
    setItemsInCart(handleQuantity(-1));
  };

  return (
    <div>
      <ContainerProductsCart>
        <div style={{ flexBasis: '33.3%', display: 'flex', gap: '1rem' }}>
          <ImgStyled src={imgSrc} />
          <div>{title}</div>
        </div>
        <ContainerFlexItemsP>
          <ContainerQuantity>
            <PStyled>
              <ButtonStyledBefore onClick={handleSubtractQuantity}>-</ButtonStyledBefore>
              {quantity}
              <ButtonStyledAfter onClick={handleAddQuantity}>+</ButtonStyledAfter>
            </PStyled>
          </ContainerQuantity>
          <FlexItemP>€{price}</FlexItemP>
          <FlexItemP>€{price * quantity}</FlexItemP>
        </ContainerFlexItemsP>
      </ContainerProductsCart>
    </div>
  );
};

export default CartDisplayItem;
