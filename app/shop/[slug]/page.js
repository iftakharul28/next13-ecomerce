import React from 'react';
import Card from '../../../components/Card';
async function getSearchItem(slug) {
  let searchItem = await fetch(
    `https://dummyjson.com/products/category/${slug}`
  );
  return searchItem.json();
}
export default async function Page({ params }) {
  const data = await getSearchItem(params.slug);

  return (
    <div
      className="grid gap-3 col-start-2 col-end-3 m-3"
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))' }}
    >
      <Card products={data?.products} />
    </div>
  );
}
