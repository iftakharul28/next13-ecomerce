import Header from '../../components/nav/Header';
import UserSidebar from '../../components/sidebar/UserSidebar';
async function getCategory() {
  let categories = await fetch('https://dummyjson.com/products/categories', {
    next: {
      revalidate: 600,
    },
  });
  return categories.json();
}
export default async function UserLayout({ children }) {
  const categories = await getCategory();
  return (
    <>
      <Header />
      <main
        className="grid w-full"
        style={{ gridTemplateColumns: '240px 1fr' }}
      >
        <UserSidebar categories={categories} />
        {children}
      </main>
    </>
  );
}
