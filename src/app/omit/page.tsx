'use client';
import Link from 'next/link'
import Headers from '../../components/headers'

export default function Omit() {
  return (
    <div>
      <div className="mb-6">
        Bot Protection with Botd (by FingerprintJS)
      </div>
      <div className="mb-4">This page is not using Botd.</div>
      <div className="mb-4">Navigate to other routes:</div>
      <div className="mb-4">
        <li>
          <Link href="/">Home page using Botd</Link>
        </li>
        <li>
          <Link href="/blocked">Page with Bot Detected</Link>
        </li>
      </div>
      <hr className="border-t border-accents-2 mb-6" />
      <div className="mb-4">Below is a fetch for this page:</div>
      <Headers path="/omit" />
    </div>
  )
}