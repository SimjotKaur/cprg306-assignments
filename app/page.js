import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/week-2" legacyBehavior>
          <a className="text-xl text-white-400">Week 2 Assignment</a>
          </Link>
        </li>
        <li>
          <Link href="/week-3" legacyBehavior>
          <a className="text-xl text-white-400">Week 3 Assignment</a>
           
          </Link>
        </li>
        <li>
          <Link href="/week-4" legacyBehavior>
            <a className="text-xl text-white-400">Week 4 Assignment</a>
          </Link>
        </li>
        <li>
          <Link href="/week-5" legacyBehavior>
          <a className="text-xl text-white-400">Week 5 Assignment</a>
          </Link>
        </li>
      </ul>
    </main>
  );
}






