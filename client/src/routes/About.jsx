import React from 'react'
import { useUser } from '@clerk/clerk-react';
import Image from '../components/Image';
import Search from '../components/SinglePost/Search';
import SideCategories from '../components/SinglePost/SideCategories';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <div>
      <h1 className="mb-8 text-3xl font-semibold">About</h1>
      <div className="flex flex-col xl:flex-row gap-8 mb-12">
        <div className="flex flex-col gap-4 justify-center items-center xl:w-1/3 ">
          <Image
            src="userImg.jpeg"
            className="w-48 h-48 rounded-full object-cover" 
            w="135"
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="mb-1 text-sm font-medium">Samakab Egal</h1>
            <p className="text-sm text-gray-500">tech enthusiastic</p>
            <p className="text-sm text-gray-500">curious tinker</p>
            <p className="text-sm text-gray-500">father, son, cousin</p>
            <div className="flex flex-row gap-1 justify-center items-center">
              <Link>
                <Image src="x-30.svg" alt="x"/>
              </Link>
              <Link>
                <Image src="linkedin-30.svg" alt="linkedin" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 xl:w-2/3">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta maiores, atque autem facilis doloribus eaque ducimus, aspernatur perspiciatis repellendus non voluptas ullam laboriosam animi? Magnam temporibus amet nesciunt quasi repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aperiam officia veritatis optio animi voluptas obcaecati iusto. Quos soluta eligendi aut possimus earum, dolore dicta, dolorem temporibus, iste velit eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique distinctio? Iste similique, non excepturi nobis officia qui explicabo, ad in unde praesentium, labore accusamus quam cum pariatur consequuntur sequi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eum aspernatur esse dicta iste architecto pariatur suscipit, debitis voluptatem reprehenderit illum quod nesciunt voluptates quae, sint asperiores accusamus, voluptas ullam.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta maiores, atque autem facilis doloribus eaque ducimus, aspernatur perspiciatis repellendus non voluptas ullam laboriosam animi? Magnam temporibus amet nesciunt quasi repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aperiam officia veritatis optio animi voluptas obcaecati iusto. Quos soluta eligendi aut possimus earum, dolore dicta, dolorem temporibus, iste velit eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique distinctio? Iste similique, non excepturi nobis officia qui explicabo, ad in unde praesentium, labore accusamus quam cum pariatur consequuntur sequi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eum aspernatur esse dicta iste architecto pariatur suscipit, debitis voluptatem reprehenderit illum quod nesciunt voluptates quae, sint asperiores accusamus, voluptas ullam.
          </div>
        </div>
        <div className="px-4 h-max sticky top-8">
          <SideCategories />
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default About