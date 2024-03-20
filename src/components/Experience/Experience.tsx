import React from 'react'
import { useTheme } from '../../ThemeContext';
import { experienceOptions } from '../../constants/constant';
import Image from '../Image/Image';

const Experience = () => {

    //use theme
    const { isDarkMode } = useTheme();
    const dummy = [1, 2, 3, 4, 5];
    return (
        <div id='e' className={`w-full h-auto md:px-20 px-4 lg:pt-24 pt-28`}>
            <div className={`title-section w-full h-auto m-auto mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <span className='w-70 h-56 font-sora font-normal  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>My </span>
                <span className='w-70 h-56 font-sora font-bold  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>Experience</span>
            </div>
            <div className="content-section w-full h-auto flex flex-col justify-start items-start gap-8 py-10">
                {
                    experienceOptions.map((experience) => (
                        <>
                            <div className={`experience-item  hover:scale-[1.01] w-full h-auto min-h-20 border-2 border-gray-400 transition-all duration-300 rounded-2xl px-6 py-8 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200 '}`}>
                                <div className={`title-section w-full h-auto flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start md:gap-2 gap-5`}>
                                    <div className={`left-section flex justify-start items-center gap-3`}>
                                        <Image src={experience.src} className=' w-8 h-auto' />
                                        <span className='font-bold text-wrap text-left'>{experience.name}</span>
                                    </div>
                                    <div className={`timeline-section`}>
                                        <span className=' font-light text-sm'>{experience.startDate} - {experience.endDate}</span>
                                    </div>
                                </div>
                                <div className={`content-section w-full h-auto text-left mt-4 text-sm`}>
                                    {experience.content}
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience