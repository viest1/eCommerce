import React from 'react';
import { randomNumber } from '../../../helpers/randomNumber';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './ProductsHome.styles';

const numberProducts = 8;
const rangePrice = 2000;
let arrOfObj = [];

for (let i = 0; i < numberProducts; i++) {
  const obj = {
    title: 'This Image',
    price: `${randomNumber(1, rangePrice)}`,
    quantity: 1,
    imgSrc: `https://picsum.photos/300/200?random=${i + 1}`,
    id: uuidv4(),
  };
  arrOfObj = [...arrOfObj, obj];
}

const ProductsHome = () => {
  return (
    <Container>
      {arrOfObj.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </Container>
  );
};

export default ProductsHome;
