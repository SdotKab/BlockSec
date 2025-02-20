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
            <p className="text-sm text-gray-500">student of life</p>
            <p className="text-sm text-gray-500">father, son, brother, cousin</p>
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
            I'm a tech enthusiast, passionate about emerging technologies, particularly blockchain, Web3, and AI, and their applications in cybersecurity. With a focus on innovative solutions like blockchain and tokenization, I'm especially interested in how these technologies can enhance Identity and Access Management (IAM) systems. My blog serves as a space where I aim to explore the intersection of these technologies and cybersecurity, offering insights into the ever-evolving landscape of digital security. Always keeping an eye on the future, I'm excited to share my thoughts and discoveries with others who share my curiosity for the tech world.
          </div>
          <div>
            Outside of the tech realm, I'm a family man who enjoys traveling and immersing myself in different cultures, foods, and customs. My love for adventure extends to bikepacking, hiking, sometimes fishing and camping, where I find time to reconnect with nature. National parks are a favorite destination of mine, offering both solace and inspiration. With a thirst for knowledge that never ceases, I consider myself a lifelong learner, always seeking new experiences and growth along the way.
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