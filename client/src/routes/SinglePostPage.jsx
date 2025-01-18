import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import DOMPurify from 'dompurify';

import { fetchOnePost } from '../utils/fetch.js'
import SideCategories from '../components/SinglePost/SideCategories'
import PostMenuActions from '../components/SinglePost/PostMenuActions'
import Image from '../components/Image'
import Search from '../components/SinglePost/Search'
import Comments from '../components/Comments/Comments'

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchOnePost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";



  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      {/* Cover Image */}
      <div className="flex flex-col gap-4">
        {data.img && (
          <div className="flex justify-center items-center hidden md:block w-4/5">
            <Image src={data.img} w="600" className="rounded-2xl" alt="cover" />
          </div>
        )}
        {/* Title and details */}
        <div className="lg:w-2/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mt-2">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            {/* <Link className="text-blue-800">username</Link> */}
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          {/* <p className="text-gray-500 font-medium">{data.desc}</p> */}
        </div>

      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
        <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.content),
            }}
          >
          </p> 
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {/* {data.user.img && (
                <Image
                  src={data.user.img || data.noProfilePic }
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                  alt="userImg"
                />
              )} */}
                <Image
                  src="noProfilePic.jpeg"
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                  alt="noProfilePic"
                />


                {/* <Image
                  src="userImg.jpeg"
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                  alt="userImg"
                /> */}
            {/* <Link className="text-blue-800 text-sm">Username</Link> */}
            <Link className="text-blue-800">{data.user.username}</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" alt="facebook"/>
              </Link>
              <Link>
                <Image src="instagram.svg" alt="instagram" />
              </Link>
            </div>
          </div>
          {/* <PostMenuActions post={data} /> */}
          <PostMenuActions />
          <SideCategories />
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      {/* <Comments postId={data._id}/> */}
      <Comments />
    </div>
  )
}

export default SinglePostPage