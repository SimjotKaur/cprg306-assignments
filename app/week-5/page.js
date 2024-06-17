import ItemList from './item-list';

export default function Page() {
  return (
    <main className="bg-yellow-900">
      <h1 className="text-3xl font-bold text-white mb-6 ml-10">Shopping List</h1>
      <ItemList />
    </main>
  );
}