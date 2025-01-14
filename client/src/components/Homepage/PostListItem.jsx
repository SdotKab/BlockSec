import React from 'react'
import Image from '../Image'
import { Link } from 'react-router-dom'
import { format } from "timeago.js";


const PostListItem = ({post}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.img} className="rounded-2xl object-cover" w="735" alt="featured" />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          {/* <Link className="text-blue-800" to={`/posts?author=${post.user.username}`}>{post.user.username}</Link> */}
          <Link className="text-blue-800" to="/username">Username</Link>
          <span>on</span>
          <Link className="text-blue-800">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        {/* tags */}
        <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
          {post.tags.map((tag, index) => (
            <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
          ))}
        </span>

        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default PostListItem