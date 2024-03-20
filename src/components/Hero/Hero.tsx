import React from 'react'
import Image from '../Image/Image'
import Banner from "../../assets/Banner.svg"
import { useTheme } from '../../ThemeContext';
const Hero = () => {

      //use theme
  const { isDarkMode } = useTheme();
  return (
    <div className={` w-full md:min-h-screen h-auto lg:pt-24 pt-28 relative bg-white ${isDarkMode ? 'inverted-css': ''}`}>
        <Image src={Banner} className='md:absolute relative md:right-6 md:bottom-6 lg:w-[600px] md:w-[500px] w-[80%] m-auto h-auto ' />
        <div className="content-section w-auto h-auto lg:mt-[150px] md:mt-0 mt-[48px] md:px-20 px-4">
            <div className='title-box gap-2 flex flex-col justify-start items-start'>
                <div className='first-line flex justify-start gap-2'>
                    <span className="w-230 h-auto font-sora font-normal text-black md:text-4xl text-2xl xs:text-3xl leading-14 tracking-tighter flex-shrink-0 order-0">
                        Hello I am
                    </span>
                    <span className="w-230 h-auto font-sora font-extrabold text-black md:text-4xl text-2xl xs:text-3xl leading-14 tracking-tighter flex-shrink-0 order-0">
                        Varun Nayak.
                    </span>
                </div>
                <div className='second-line flex justify-start gap-2'>
                    <span className="w-230 h-auto font-sora font-extrabold text-black md:text-4xl text-2xl xs:text-3xl leading-14 tracking-tighter flex-shrink-0 order-0">
                        Frontend
                    </span>
                    <span className="w-230 h-auto font-sora font-extrabold text-white md:text-4xl text-2xl xs:text-3xl leading-14 tracking-tighter flex-shrink-0 order-0 font-outline-2">
                        Developer
                    </span>
                </div>
                <div className='third-line flex justify-start gap-2'>
                    <span className="w-230 h-auto font-sora font-normal text-black md:text-4xl text-2xl xs:text-3xl leading-14 tracking-tighter flex-shrink-0 order-0">
                        Based in 
                    </span>
                    <span className="w-230 h-auto font-sora font-extrabold text-black md:text-4xl text-2xl xs:text-3xl leading-14 tracking-tighter flex-shrink-0 order-0">
                        India.
                    </span>
                </div>
            </div>
            <div className="intro-section text-wrap text-left mt-4 md:w-[420px] w-full">
                I'm a seasoned developer with 2 years of expertise in React and Angular. Currently expanding my skills with Next.js. Additionally, I'm familiar with backend technologies such as Express, MongoDB, and Node.js for crafting robust solutions.
            </div>
        </div>

    </div>
  )
}

export default Hero