import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../atoms/Button/Button';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import { CloseIcon } from '../../organisms/Modal/Modal.styles';
import ItemInCart from '../ItemInCart/ItemInCart';
import { sumCart } from '../../../helpers/sumCart';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';
import { sumQuantity } from '../../../helpers/sumQuantity';
import Modal from '../../organisms/Modal/Modal';
import useModal from '../../organisms/Modal/useModal';
import ModalDetailsCheckout from '../ModalDetailsCheckout/ModalDetailsCheckout';
import {
  ContainerDetailsToBuy,
  Container,
  Cart,
  ContainerCart,
  SelectStyled,
  ContainerOrderSummary,
  ContainerInOrderSummary,
} from './ProductCard.styles';

const ProductCard = ({ item: { title, price, imgSrc, quantity, id } }) => {
  const { itemsInCart, setItemsInCart, isOpenCart, setIsOpenCart, select, setSelect, discount, setDiscount } = useContext(ECommerceContext);
  const [promoCode, setPromoCode] = useState('');
  const [alertCheckout, setAlertCheckout] = useState(false);
  const [alertPromoCode, setAlertPromoCode] = useState(false);
  const cartRef = useRef();
  const CartIn = () => (cartRef.current.style.right = '0');
  const CartOut = () => (cartRef.current.style.right = '-400px');
  const { openModal, modalIsOpen, closeModal } = useModal();
  const totalCalculated = () => {
    return discount ? +(((100 - discount) / 100) * (sumCart(itemsInCart) + select)).toFixed(2) : +(+sumCart(itemsInCart) + select);
  };

  const handleAddToCart = () => {
    setIsOpenCart(true);
    if (itemsInCart.filter((item) => item.id === id).length < 1) {
      setItemsInCart([...itemsInCart, { title, price, imgSrc, quantity, id, timestamp: Date.now() }]);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isOpenCart) {
      CartIn();
    } else {
      CartOut();
    }
  }, [isOpenCart]);

  const handleCloseCart = () => {
    setIsOpenCart(false);
  };

  const handlePromoCode = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_PROMO_CODE);
    if (promoCode === process.env.REACT_APP_PROMO_CODE) {
      setDiscount(90);
      setAlertPromoCode(false);
    } else {
      setAlertPromoCode(true);
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (itemsInCart.length) {
      setIsOpenCart(false);
      openModal();
    } else {
      setAlertCheckout(true);
    }
  };

  const handleBuyAfterCheck = () => {
    console.log('yes');
  };

  const handleCancelBuy = () => {
    closeModal();
    setIsOpenCart(true);
  };

  useEffect(() => {
    if (itemsInCart) {
      setAlertCheckout(false);
    }
  }, [itemsInCart]);

  return (
    <Container>
      <img src={imgSrc} alt="generated random" />
      <ContainerDetailsToBuy>
        <h2>{title}</h2>
        <h2>{price}€</h2>
      </ContainerDetailsToBuy>
      <Button onClick={handleAddToCart} text="Click to Buy" />
      {/* Side Cart */}
      <ContainerCart ref={cartRef}>
        <Cart>
          <CloseIcon onClick={handleCloseCart} />
          <div style={{ padding: '1rem' }}>
            <h2>My Cart</h2>
          </div>
          {itemsInCart && sortByTimestamp(itemsInCart).map((item, index) => <ItemInCart item={item} key={index} />)}
          <ContainerOrderSummary>
            <h2 style={{ marginBottom: '1px solid black' }}>Order Summary</h2>
            <form onSubmit={handleCheckout}>
              <ContainerInOrderSummary>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p>Items {sumQuantity(itemsInCart)}</p>
                  <p>€{sumCart(itemsInCart) > 0 ? sumCart(itemsInCart) : '0'}</p>
                </div>
                <p>SHIPPING</p>
                <SelectStyled required name="shipping" id="shipping" value={select} onChange={(e) => setSelect(+e.target.value)}>
                  <option value="" disabled hidden>
                    Choose Delivery
                  </option>
                  <option value="5">Standard Delivery - €5.00</option>
                  <option value="10">Faster Delivery - €10.00</option>
                  <option value="15">Fastest Delivery - €15.00</option>
                  <option value="150">Expensive Delivery - €150.00</option>
                </SelectStyled>
                <p>PROMO CODE</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                  <Button text="APPLY" onClick={handlePromoCode} />
                </div>
                {alertPromoCode && discount < 90 && <p>Wrong Code!</p>}
                {discount > 0 && <div>You used the coupon -{discount}%</div>}
              </ContainerInOrderSummary>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0 1rem 0' }}>
                <p>TOTAL COST</p>
                {itemsInCart ? <p>€{totalCalculated()}</p> : <p>€0</p>}
              </div>
              <Button text="CHECKOUT" type="submit" />
            </form>
            {alertCheckout && <p>You have an empty Cart, click on a product to add it to the list.</p>}
          </ContainerOrderSummary>
        </Cart>
      </ContainerCart>
      {/* Side Cart */}
      {modalIsOpen && (
        <Modal closeModal={closeModal} isOpen={modalIsOpen}>
          <ModalDetailsCheckout handleBuyAfterCheck={handleBuyAfterCheck} handleCancelBuy={handleCancelBuy} />
        </Modal>
      )}
    </Container>
  );
};

export default ProductCard;
