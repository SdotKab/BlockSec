import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from "timeago.js";

import { fetchFeaturedPosts } from '/src/utils/fetch.js'
import Image from '../Image'

// const fetchPost = async () => {
//   const res = await axios.get(
//     `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
//   );
//   return res.data;
// };

const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchFeaturedPosts(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {/* {posts[0].img && <Image
          src={posts[0].img}
          className="rounded-3xl object-cover"
          w="895"
        />} */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" w="895" alt="featured" />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          {/* <Link className="text-blue-800 lg:text-lg">Infrastructure</Link>
          <span className="text-gray-500"> 2 days ago</span> */}
          <Link className="text-blue-800 lg:text-lg">{posts[0].category}</Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>
        {/* title */}
        <Link
          to={posts[0].slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
        {/* <Link
          to="/"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Post
        </Link> */}
        <p>{posts[0].desc}</p>
        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolores obcaecati asperiores laborum ipsa alias atque debitis, quo unde in ratione assumenda quaerat nisi aperiam accusantium? Architecto quasi aperiam fugiat.</p> */}
        {/* tags */}
        <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
          {posts[0].tags.map((tag, index) => (
            <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
          ))}
        </span>
        {/* <span className="gap-4 text-grey-500 text-sm mt-2"> Tag 1, Tag 2</span> */}
        
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-2/5 h-full"
            alt="featured"
            w="298"
          />
          {/* details and title */}
          <div className="flex flex-col w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/infrastructure" className="text-grey-800">{posts[1].category}</Link>
              <span className="text-grey-500 text-sm"> {format(posts[1].createdAt)}</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">{posts[1].title}</Link>
            {/* tags */}
            <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
              {posts[1].tags.map((tag, index) => (
                <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
              ))}
            </span>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured3.jpeg"
            className="rounded-3xl object-cover w-2/5 h-full"
            w="298"
            alt="featured"
          />
          {/* details and title */}
          <div className="flex flex-col w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link to="/infrastructure" className="text-grey-800">{posts[2].category}</Link>
              <span className="text-grey-500 text-sm"> {format(posts[2].createdAt)}</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">{posts[2].title}</Link>
            {/* tags */}
            <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
              {posts[2].tags.map((tag, index) => (
                <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
              ))}
            </span>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured4.jpeg"
            className="rounded-3xl object-cover w-2/5 h-full"
            w="298"
            alt="featured"
          />
          {/* details and title */}
          <div className="flex flex-col w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link to="/infrastructure" className="text-grey-800">{posts[3].category}</Link>
              <span className="text-grey-500 text-sm"> {format(posts[3].createdAt)}</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">{posts[3].title}</Link>
            {/* tags */}
            <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
              {posts[3].tags.map((tag, index) => (
                <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
              ))}
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeaturedPosts