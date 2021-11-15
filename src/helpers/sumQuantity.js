export const sumQuantity = (arr) => {
  if (!arr.length) return 0;
  return arr.reduce((a, b) => (a += b.quantity), 0);
};
