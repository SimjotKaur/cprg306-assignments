"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name > b.name ? 1 : -1;
    } else if (sortBy === 'category') {
      return a.category > b.category ? 1 : -1;
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedGroupedItems = Object.keys(groupedItems).sort().reduce((acc, category) => {
    acc[category] = groupedItems[category].sort((a, b) => a.name > b.name ? 1 : -1);
    return acc;
  }, {});

  return (
    <div className="ml-10">
      <div className="flex items-center mb-4">
        <span className="text-white mr-2">Sort by:</span>
        <button
          className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 mr-2 ${sortBy === 'category' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
        <button
          className={`px-4 py-2 ${sortBy === 'group' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSortBy('group')}
        >
          Grouped Category
        </button>
        <span className="ml-2 text-gray-400 text-sm"></span>
      </div>
      <ul className="list-none p-0">
        {sortBy === 'group' ? (
          Object.keys(sortedGroupedItems).map((category) => (
            <div key={category}>
              <h2 className="text-xl font-bold text-white capitalize mt-4">{category}</h2>
              <div className="flex flex-col items-start pl-4">
                {sortedGroupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))
        )}
      </ul>
    </div>
  );
}
