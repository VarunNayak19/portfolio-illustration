import { useTheme } from '../../ThemeContext';
import { projectData } from '../../constants/constant';
import gitLight from "../../assets/github_light.svg"
import gitDark from "../../assets/github_dark.svg"
import deployLight from "../../assets/read_more_light.svg"
import deployDark from "../../assets/read_more_dark.svg"
import Image from '../Image/Image';

const Projects = () => {
          //use theme
  const { isDarkMode } = useTheme();
  const dontShowGithub = true;
  return (
    <div  id='projects' className={`skills-container w-full h-auto lg:pt-24 pt-28 md:px-20 px-4 ${isDarkMode ? 'bg-black': 'bg-white'}`}>
        <div className={`title-section w-full h-auto  mb-16 ${isDarkMode ? 'text-white':'text-black'}`}>
            <span className='w-70 h-56 font-sora font-normal  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>My </span>
            <span className='w-70 h-56 font-sora font-bold  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>Projects</span>
        </div>
        <div>
            {
                projectData && 
                projectData.map((item:any,index:number) => (
                    <>
                    <div key={index} className={` ${isDarkMode ? 'text-white':'text-black'} w-full py-12 h-auto flex justify-between md:gap-20 gap-5 min-h-[512px] flex-col ${index % 2 === 0 ? ' md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className=' md:w-2/5 h-96 w-full  rounded-3xl  '>
                            <img src={item.image} alt="logo" className={` ${item.className} w-full h-full rounded-3xl border-2 border-gray-300`} />
                        </div>
                        <div className=' md:w-3/5 w-full flex flex-col justify-start items-start gap-7 '>
                            <div className='font-extrabold text-5xl leading-14 tracking-tighter'>{item.id}</div>
                            <div className='font-bold text-2xl leading-10 tracking-tighter text-left'>{item.title}</div>
                            <div className='text-left'>{item.description}</div>
                            <div className='flex flex-row justify-start items-center gap-4'>
                                {
                                    item.githubFlag && !dontShowGithub &&
                                    <a href={item.github} target='_blank' className='flex gap-1 cursor-pointer'>
                                        {isDarkMode ? 
                                        <Image className='h-full w-6' src={gitDark } />
                                        :
                                        <Image className='h-full w-6' src={gitLight} />
                                        }
                                        <span className='underline'>Github Repository</span>
                                        
                                    </a>
                                }
                                {
                                    item.deployFlag  &&
                                    <a href={item.deploy} target='_blank' className='flex gap-2 cursor-pointer'>
                                        {isDarkMode ? 
                                        <Image className='h-full w-4' src={deployDark } />
                                        :
                                        <Image className='h-full w--4' src={deployLight} />
                                        }
                                        <span className='underline hover:text-gray-500'>Try it now</span>
                                        
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                    </>
                ))
            }
        </div>

    </div>
  )
}

export default Projects