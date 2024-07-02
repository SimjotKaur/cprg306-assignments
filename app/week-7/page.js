"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
    setSelectedItemName(cleanedItemName);
  };

  const onAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-yellow-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6 ml-10">Shopping List</h1>
      <div className="flex">
        <div className="w-1/3 mr-4">
          <NewItem onAddItem={onAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
