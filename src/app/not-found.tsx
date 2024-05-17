import React from 'react'
import Link from "next/link"
export default function notFound() {
  return (
    <div className='notfound'>
        <main className="not-found">
            <h2 className="info">We hit a block wall</h2>
            <p>We could nof find the page that you are looking for.</p>
            <p>Go back to<Link href="/"> Home</Link> </p>
        </main>
    </div>
  )
}
