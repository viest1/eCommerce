import React, { useContext } from 'react';
import { Container, ContainerCounter, ContainerDetails, ImgStyled, StyledP, ContainerTitlePrice } from './ItemInCart.styles';
import Button from '../../atoms/Button/Button';
import { ECommerceContext } from '../../../providers/GeneralProvider';

const ItemInCart = ({ item: { title, price, imgSrc, quantity, id, timestamp } }) => {
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
    <Container>
      <ContainerDetails>
        <ImgStyled src={imgSrc} alt="" />
        <ContainerTitlePrice>
          <p>{price * quantity}€</p>
        </ContainerTitlePrice>
        <ContainerCounter>
          <Button text="-" onClick={handleSubtractQuantity} />
          <StyledP>{quantity}</StyledP>
          <Button text="+" onClick={handleAddQuantity} />
        </ContainerCounter>
      </ContainerDetails>
    </Container>
  );
};

export default ItemInCart;
