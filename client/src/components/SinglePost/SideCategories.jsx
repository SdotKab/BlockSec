import React from 'react'
import { Link } from 'react-router-dom'

const SideCategories = () => {
  return (
    <>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline">All</Link>
        <Link className="underline" to="/Infrastructure">
          Infrastructure
        </Link>
        <Link className="underline" to="/Data">
          Data
        </Link>
        <Link className="underline" to="/IAM">
          IAM
        </Link>
        <Link className="underline" to="/Application">
          Application
        </Link>
        <Link className="underline" to="/Governance">
          Governance
        </Link>
      </div>
    </>
  )
}

export default SideCategories