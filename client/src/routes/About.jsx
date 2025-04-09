import { useState } from 'react'
import { useUser } from '@clerk/clerk-react';
import Image from '../components/Image';
import Search from '../components/SinglePost/Search';
import SideCategories from '../components/SinglePost/SideCategories';
import { Link } from 'react-router-dom';
import Project from '../components/About/Project';

// Define the content for each project
const projects = [
  {
    id: 'project1',
    title: 'Proyecto',
    github: 'https://www.github.com',
    techs: 'MongoDB, ExpressJS, ReactJS, NodeJS',
    description: 'Project management and bug tracker application.',
  },
  {
    id: 'project2',
    title: 'Proyecto2',
    github: 'https://www.github.com',
    techs: 'MongoDB, ExpressJS, ReactJS, NodeJS',
    description: 'Project management and bug tracker application.',
  },
];

const About = () => {

  const [activeTab, setActiveTab] = useState('project1'); // Track the active tab

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1 className="mb-8 text-3xl mt-5 ml-3 font-semibold">About</h1>
      <div className="flex flex-col xl:flex-row gap-8 mb-12">
        <div className="flex flex-col gap-4 justify-center items-center xl:w-1/3 ">
          <img
            src="/blocsecAuthor.jpeg"
            className="w-48 h-48 rounded-full object-none" 
            w="135"
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="mb-1 text-sm font-medium">Samakab Egal</h1>
            <p className="text-sm text-gray-500">tech enthusiastic</p>
            <p className="text-sm text-gray-500">curious tinker</p>
            <p className="text-sm text-gray-500">student of life</p>
            <p className="text-sm text-gray-500">father, husband, son, brother, cousin</p>
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
        <div className="flex flex-col p-4 gap-2 xl:w-2/3">
          <div>
            <p className="mb-3">
              I'm a passionate tech enthusiast with a deep curiosity for emerging technologies, particularly Web3 and AI. My fascination lies in exploring how these innovations are set to revolutionize the digital landscape, especially in the realm of security. I'm particularly interested in how advancements in AI and blockchain technologies will reshape privacy in Web3, and how blockchain networks will defend against increasingly sophisticated malicious actors. Also, I’m excited about the role AI will play in streamlining the development and security of decentralized applications (dApps), as well as the potential of AI agents to autonomously handle complex tasks in real time. These AI-driven agents could reshape industries, providing both efficiency and new levels of intelligence in systems that once relied heavily on human oversight.
            </p>
            <p className="mb-3">
              Through my blog, I delve into these topics, experimenting, exploring, and sharing insights on the rapidly evolving tech world. The future, as I envision it, will be one where Web3, powered by blockchain and enhanced by AI, creates a more secure, decentralized, and intelligent internet—empowering users and organizations alike with unprecedented control and autonomy. I'm thrilled to share my discoveries and insights with fellow tech enthusiasts who are as excited about the possibilities as I am.
            </p>
            <p className="mb-3">
              Outside of the tech realm, I'm a family man who enjoys traveling and immersing myself in different cultures, foods, and customs. My love for adventure extends to bikepacking, hiking, sometimes fishing and camping, where I find time to reconnect with nature. National parks are a favorite destination of mine, offering both solace and inspiration. With a thirst for knowledge that never ceases, I consider myself a lifelong learner, always seeking new experiences and growth along the way.
            </p>
          </div>
        </div>
        <div className="px-4 h-max sticky top-8 md:hidden sm:hidden">
          <SideCategories />
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <div className="">
      <div className="mx-20 mb-3">
        <span className="text-lg font-bold">Projects</span>
      </div>
      <div className="flex flex-col xl:flex-row gap-8 mb-12">
        <div className="flex flex-col gap-4 justify-center items-center xl:w-1/4 md:flex-row md:flex-wrap md:-mb-px">
          {/* Project Tabs */}
          <ul className="flex-row md:flex-row space-y space-y-4 text-sm font-medium">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(project.id); // Switch tab
                  }}
                  className={`inline-flex items-center p-4 border-b-2 ${
                    activeTab === project.id ? 'border-green-300 text-green-600' : 'border-transparent hover:text-green-600 hover:border-green-300'
                  }`}
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col px-16 py-10 gap-2 xl:w-3/4">
          {projects
            .filter((project) => project.id === activeTab) // Filter content based on active tab
            .map((project) => (
              <div key={project.id}>
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mb-2 text-sm">{project.github}</p>
                <p className="mb-2 text-md">{project.techs}</p>
                <p className="mb-2 text-md">{project.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>

    </div>
  )
}

export default About