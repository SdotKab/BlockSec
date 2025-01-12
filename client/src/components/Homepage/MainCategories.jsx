import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-gray-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=infrastructure"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Infrastructure
        </Link>
        <Link
          to="/posts?cat=data"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Data
        </Link>
        <Link
          to="/posts?cat=application"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Application
        </Link>
        <Link
          to="/posts?cat=iam"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          IAM
        </Link>
        <Link
          to="/posts?cat=governance"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Governance
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      {/* <Search /> */}
    </div>
  )
}

export default MainCategories