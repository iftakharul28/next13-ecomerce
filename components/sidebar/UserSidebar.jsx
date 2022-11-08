import Link from 'next/link';
import React from 'react';

const Sidebar = ({ categories }) => {
  return (
    <aside
      className="col-start-1 col-end-2 sticky top-[72px]"
      style={{ height: 'calc(100vh - 72px)' }}
    >
      <div className="overflow-y-auto absolute h-full w-full left-0 top-0 py-4 px-3 bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
          {categories.map((item, i) => (
            <li key={i}>
              <Link
                href={`/shop/${item}`}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
