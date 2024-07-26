export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="flex flex-col justify-between p-4 bg-gray-800 rounded mb-4 shadow-md w-64 cursor-pointer"
      onClick={onSelect}
    >
      <div className="text-lg font-bold text-white">
        {name}
      </div>
      <div className="text-sm text-gray-400">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
