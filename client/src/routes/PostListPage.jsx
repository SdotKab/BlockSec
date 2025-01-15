import React, { useState } from 'react'
import PostList from '../components/Homepage/PostList';
import SideMenu from '../components/Homepage/SideMenu';
import { useLocation } from 'react-router-dom';

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  //Get Category from location
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('cat');

  return (
    <div className="">
      <h1 className="mb-8 text-3xl font-semibold">{category}</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  )
}

export default PostListPage