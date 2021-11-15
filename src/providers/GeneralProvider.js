import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ECommerceContext = createContext({
  itemsInCart: [],
  setItemsInCart: () => {},
  isOpenCart: false,
  setIsOpenCart: () => {},
  totalSum: 0,
  setTotalSum: () => {},
  select: '',
  setSelect: () => {},
  discount: 0,
  setDiscount: () => {},
  name: {},
  setName: () => {},
  address: {},
  setAddress: () => {},
  selectPayment: '',
  setSelectPayment: () => {},
  notificationEmail: false,
  setNotificationEmail: () => {},
});

const GeneralProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const [select, setSelect] = useState('');
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useLocalStorage('nameECommerce', {
    firstName: '',
    lastName: '',
  });
  const [address, setAddress] = useLocalStorage('addressECommerce', {
    city: '',
    street: '',
    numberStreet: '',
  });
  const [selectPayment, setSelectPayment] = useLocalStorage('selectPaymentECommerce', '');
  const [notificationEmail, setNotificationEmail] = useLocalStorage('notificationEmailECommerce', false);

  return (
    <ECommerceContext.Provider
      value={{
        itemsInCart,
        setItemsInCart,
        isOpenCart,
        setIsOpenCart,
        totalSum,
        setTotalSum,
        select,
        setSelect,
        discount,
        setDiscount,
        name,
        setName,
        address,
        setAddress,
        selectPayment,
        setSelectPayment,
        notificationEmail,
        setNotificationEmail,
      }}
    >
      {children}
    </ECommerceContext.Provider>
  );
};

export default GeneralProvider;
