import React from 'react'
import { Link } from 'react-router-dom'

const SideCategories = () => {
  return (
    <>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline">All</Link>
        <Link className="underline" to="/infrastructure">
          Infrastructure
        </Link>
        <Link className="underline" to="/data">
          Data
        </Link>
        <Link className="underline" to="/iam">
          IAM
        </Link>
        <Link className="underline" to="/application">
          Application
        </Link>
        <Link className="underline" to="/governance">
          Governance
        </Link>
      </div>
    </>
  )
}

export default SideCategories