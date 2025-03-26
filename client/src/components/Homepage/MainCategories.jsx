import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../SinglePost/Search'

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
        {/* <Link
          to="/posts?cat=Infrastructure"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Infrastructure
        </Link>
        <Link
          to="/posts?cat=Data"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Data
        </Link>
        <Link
          to="/posts?cat=Application"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Application
        </Link>
        <Link
          to="/posts?cat=IAM"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          IAM
        </Link>
        <Link
          to="/posts?cat=GRC"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          GRC
        </Link> */}
        <Link
          to="/posts?cat=Bloc"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Blockchain
        </Link>
        <Link
          to="/posts?cat=Development"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=Sec"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Security
        </Link>
        <Link
          to="/posts?cat=Operations"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Operations
        </Link>
        <Link
          to="/posts?cat=News"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          News
        </Link>
        <Link
          to="/posts?cat=Other"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
          Other
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  )
}

export default MainCategories