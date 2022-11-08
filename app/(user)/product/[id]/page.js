import Description from '../../../../components/Description';
async function getDetailPostingan(id) {
  let detailPostingan = await fetch(`https://dummyjson.com/products/${id}`);
  return detailPostingan.json();
}

export default async function Page({ params }) {
  const detail = await getDetailPostingan(params.id);
  return <Description detail={detail} />;
}
