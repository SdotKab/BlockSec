import { useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

const DropDownCat = ({onCategoryChange}) => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle change in category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category)
  };


  return (
    <div className="relative inline-block text-left">
      <Menu>
        {/* Button that toggles the Menu dropdown */}
        <MenuButton
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {selectedCategory || 'Select Category'}
        </MenuButton>

        {/* Menu Items (the options) */}
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleCategoryChange('infrastructure')}
                className={`${
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                } block px-4 py-2 text-sm`}
              >
                Infrastructure
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleCategoryChange('application')}
                className={`${
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                } block px-4 py-2 text-sm`}
              >
                Application
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleCategoryChange('data')}
                className={`${
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                } block px-4 py-2 text-sm`}
              >
                Data
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleCategoryChange('aim')}
                className={`${
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                } block px-4 py-2 text-sm`}
              >
                AIM
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleCategoryChange('governance')}
                className={`${
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                } block px-4 py-2 text-sm`}
              >
                Governance
              </a>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>

      {/* Display the select dropdown (if needed) */}
      {/* Optionally, if you need a <select> component instead of the Menu, you can uncomment this */}
      {/* 
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="p-2 rounded-l bg-white shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none w-full mt-4"
      >
        <option value="infrastructure">Infrastructure</option>
        <option value="application">Application</option>
        <option value="data">Data</option>
        <option value="aim">AIM</option>
        <option value="governance">Governance</option>
      </select>
      */}
    </div>
  );
}

export default DropDownCat