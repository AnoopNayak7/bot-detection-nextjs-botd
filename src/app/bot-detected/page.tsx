'use client';
import Headers from '../../components/headers';
import BotdResult from '../../components/botd-result';
import Link from 'next/link';

export default function BotDetected() {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">
        Bot Protection with Botd (by FingerprintJS)
      </h2>
      <div className="mb-4">
        After performing light bot detection, we have identified that you are a bot!
      </div>
      <div className="mb-4">Navigate to other routes:</div>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <Link href="/">
            <span className="text-blue-500 hover:underline">Home page using Botd</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/omit">
            <span className="text-blue-500 hover:underline">Without Botd</span>
          </Link>
        </li>
      </ul>
      <hr className="border-t border-accents-2 mb-6" />
      <div className="mb-4">Below is the fetch for this page:</div>
      <Headers path="/blocked" />
      <div className="mb-4 text-black">
        Below is the result of performing full bot protection by calling the{' '}
        <code>/detect</code> endpoint from Botd after changing the{' '}
        <code>userAgent</code> to a headless browser:
      </div>
      <BotdResult isBot />
    </div>
  );
}
