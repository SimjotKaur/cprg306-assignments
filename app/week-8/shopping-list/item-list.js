"use client";

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="ml-4">
      <div className="flex items-center mb-4">
        <span className="text-white mr-2">Sort by:</span>
        <button
          className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      <ul className="list-none p-0">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
