import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const projects = [
  {
    id: 'project1',
    title: 'Proyecto',
    github: 'https://www.github.com',
    techs: 'MongoDB, ExpressJS, ReactJS, NodeJS',
    description: 'Project management and bug tracker application.',
    images: [
      'https://via.placeholder.com/150', // Example image URL
      'https://via.placeholder.com/150', // Add more images as needed
      'https://via.placeholder.com/150', // Add more images as needed
      'https://via.placeholder.com/150', // Example image URL
      'https://via.placeholder.com/150', // Add more images as needed
      'https://via.placeholder.com/150', // Add more images as needed
    ],
  },
  {
    id: 'project2',
    title: 'Proyecto2',
    github: 'https://www.github.com',
    techs: 'MongoDB, ExpressJS, ReactJS, NodeJS',
    description: 'Project management and bug tracker application.',
    images: [
      'https://via.placeholder.com/150', // Example image URL
      'https://via.placeholder.com/150', // Add more images as needed
    ],
  },
];

const Project = () => {

  const [activeTab, setActiveTab] = useState('project1'); // Track the active tab

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mx-20 mb-3">
        <span className="text-2xl font-bold">Projects</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
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
                  className={`inline-flex items-center p-4 border-b-2 text-xl ${
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
                <div className="flex gap-4 mt-4">
                <AliceCarousel
                  mouseTracking
                  items={project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                  responsive={{
                    0: { items: 1 },
                    768: { items: 2 },
                    1024: { items: 3 },
                  }}
                  controlsStrategy="alternate"
                />
                </div>
              </div>
            ))}
        </div>
      </div>
  </>
  )
}

export default Project