import React from 'react';
import Card from '../../components/Card';
async function getPhones() {
  let products = await fetch('https://dummyjson.com/products?limit=10');
  return products.json();
}

const page = async () => {
  const { products } = await getPhones();

  return (
    <div
      className="grid gap-3 col-start-2 col-end-3 m-3"
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))' }}
    >
      <Card products={products} />{' '}
    </div>
  );
};

export default page;
