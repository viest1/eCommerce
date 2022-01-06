import React, { useContext, useState } from 'react';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import { sumQuantity } from '../../../helpers/sumQuantity';
import CartDisplayItem from '../../molecules/CartDisplayItem/CartDisplayItem';
import { sumCart } from '../../../helpers/sumCart';
import Button from '../../atoms/Button/Button';
import useModal from '../ModalReact/useModal';
import Modal from '../ModalReact/Modal';
import { sortByTimestamp } from '../../../helpers/sortByTimestamp';
import ModalDetailsCheckout from '../../molecules/ModalDetailsCheckout/ModalDetailsCheckout';
import {
  ContainerFlexSpace,
  ContainerCart,
  Container,
  ContainerOrderSummary,
  ContainerFlexItemsP,
  FlexItemP,
  ContainerInOrderSummary,
  ContainerFlexColumn,
  ContainerTitlesCart,
  SelectStyled,
} from './CartDisplay.styles';

const CartDisplay = () => {
  const { itemsInCart, select, setSelect, discount, setDiscount } = useContext(ECommerceContext);
  const { openModal, modalIsOpen, closeModal } = useModal();
  const [promoCode, setPromoCode] = useState('');
  const [alertCheckout, setAlertCheckout] = useState(false);
  const [alertPromoCode, setAlertPromoCode] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (itemsInCart.length) {
      openModal();
    } else {
      setAlertCheckout(true);
    }
  };

  const totalCalculated = () => {
    return discount ? +(((100 - discount) / 100) * (sumCart(itemsInCart) + select)).toFixed(2) : +(+sumCart(itemsInCart) + select);
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

  const handleBuyAfterCheck = () => {
    console.log('yes');
  };

  const handleCancelBuy = () => {
    closeModal();
  };

  return (
    <Container>
      <ContainerCart>
        <ContainerFlexSpace>
          <h2>Shopping Cart</h2>
          <h2>{sumQuantity(itemsInCart)} Items</h2>
        </ContainerFlexSpace>
        <ContainerFlexColumn>
          <ContainerTitlesCart>
            <p style={{ flexBasis: '33.3%' }}>Product Details</p>
            <ContainerFlexItemsP>
              <FlexItemP>Quantity</FlexItemP>
              <FlexItemP>Price</FlexItemP>
              <FlexItemP>Total</FlexItemP>
            </ContainerFlexItemsP>
          </ContainerTitlesCart>
          {itemsInCart && sortByTimestamp(itemsInCart).map((item, index) => <CartDisplayItem item={item} key={index} />)}
        </ContainerFlexColumn>
      </ContainerCart>
      <ContainerOrderSummary>
        <ContainerOrderSummary>
          <h2 style={{ marginBottom: '1rem' }}>Order Summary</h2>
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
      </ContainerOrderSummary>
      {modalIsOpen && (
        <Modal closeModal={closeModal} isOpen={modalIsOpen}>
          <ModalDetailsCheckout handleBuyAfterCheck={handleBuyAfterCheck} handleCancelBuy={handleCancelBuy} />
        </Modal>
      )}
    </Container>
  );
};

export default CartDisplay;
