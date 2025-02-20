import React from 'react'
import { Link } from 'react-router-dom'

const SideCategories = () => {
  return (
    <>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts?cat=Infrastructure">
          Infrastructure
        </Link>
        <Link className="underline" to="/posts?cat=Data">
          Data
        </Link>
        <Link className="underline" to="/posts?cat=IAM">
          IAM
        </Link>
        <Link className="underline" to="/posts?cat=Application">
          Application
        </Link>
        <Link className="underline" to="/posts?cat=GRC">
          GRC
        </Link>
        <Link className="underline" to="/posts?cat=Other">
          Other
        </Link>
      </div>
    </>
  )
}

export default SideCategories