import React from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

async function getCategory() {
  let categories = await fetch('https://dummyjson.com/products/categories');
  return categories.json();
}
async function getPhones() {
  let products = await fetch('https://dummyjson.com/products?limit=10');
  return products.json();
}

const page = async () => {
  const categories = await getCategory();
  const { products } = await getPhones();

  return (
    <main className="grid w-full" style={{ gridTemplateColumns: '240px 1fr' }}>
      <Sidebar categories={categories} />
      <div
        className="grid gap-3 col-start-2 col-end-3 m-3"
        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))' }}
      >
        <Card products={products} />
      </div>
    </main>
  );
};

export default page;
