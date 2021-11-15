export const sumCart = (itemsInCart) => {
  if (itemsInCart) {
    if (itemsInCart.length) {
      return itemsInCart.reduce((a, b) => {
        return (a = a + +(+b.price * +b.quantity));
      }, 0);
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};
