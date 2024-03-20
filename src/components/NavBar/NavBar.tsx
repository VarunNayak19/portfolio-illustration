import { useState, Fragment } from 'react'
import dp from "../../assets/dp-img.jpeg"
import Image from '../Image/Image';
import download from "../../assets/download.svg"
import { navOptions } from '../../constants/constant';
import Button from '../Button/Button';
import resumePdf from "../../assets/VARUN_NAYAK_RESUME (3).pdf";
import Hamburger from 'hamburger-react'
import { Menu, Transition } from '@headlessui/react';
import { useTheme } from '../../ThemeContext';
import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode';

const NavBar = () => {

  //use theme
  const { isDarkMode } = useTheme();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf'; // Specify the desired name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  //handle hamburger 

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`z-10 hidden lg:flex navbar-container w-full max-w-[1440px] m-auto h-auto justify-between items-center px-20 py-6 fixed top-0  bg-white ${isDarkMode ? 'inverted-css': ''} `}>
        <div className="left-logo-section flex gap-3 justify-between items-center">
          <Image src={dp} className={`w-10 h-10 rounded-full ${isDarkMode ? 'inverted-css': ''}`} />
          <span className='font-bold text-black text-20 leading-24'>Varun Nayak</span>
        </div>
        <div className="center-nav-section flex gap-8">
          {navOptions.map((option) => (
            <div key={option.id}>
              <a
              href={`#${option.href}`}
                className="text-black hover:text-gray-500 cursor-pointer"
              >
                {option.name}
              </a>
            </div>
          ))}
        </div>
        <div className="right-resume-section flex gap-3">
          <Button name='Resume' icon={download} onClick={downloadResume} buttonCss=" px-4 py-2 bg-black" />
          <ToggleDarkMode />
        </div>
      </div>
      <div className={`z-10 lg:hidden navbar-container w-full max-w-[1280px] h-auto flex justify-between items-center px-6 md:px-20 py-6 fixed top-0 bg-white ${isDarkMode ? 'inverted-css': ''}`}>
        <div className="left-logo-section flex gap-3 justify-between items-center">
          <Image src={dp} className={`w-10 h-10 rounded-full ${isDarkMode ? 'inverted-css': ''}`} />
          <span className='font-bold text-black text-20 leading-24'>Varun Nayak</span>
        </div>
        <div className="right-resume-section">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex bg-white w-full justify-center rounded-md  text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} color='#000' />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {navOptions.map((item) => (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-100' : ''
                            } block w-full text-left px-4 py-2 my-1 text-sm text-gray-200`}
                            onClick={() => {setIsOpen(false)}}
                        >
                          {item.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {() => (
                      <Button name='Resume' icon={download} onClick={downloadResume} buttonCss="w-full px-4 py-2 bg-black" />
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {() => (
                      <ToggleDarkMode />
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

        </div>
      </div>
    </>
  )
}

export default NavBar;