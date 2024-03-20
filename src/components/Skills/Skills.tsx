import { skillsOptionsLightColor } from '../../constants/constant'
import Image from '../Image/Image'
import { useTheme } from '../../ThemeContext';
const Skills = () => {

      //use theme
  const { isDarkMode } = useTheme();
  return (
    <div  id='skills' className={`skills-container w-full h-auto lg:pt-24 pt-28 md:px-20 px-4 ${isDarkMode ? 'bg-black': 'bg-white'}`}>
        <div className={`title-section w-full h-auto  mb-16 ${isDarkMode ? 'text-white':'text-black'}`}>
            <span className='w-70 h-56 font-sora font-normal  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>My </span>
            <span className='w-70 h-56 font-sora font-bold  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>Skills</span>
        </div>
        <div className='w-full h-auto  mt-8 mb-8 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center gap-x-4 gap-y-10 mx-auto'>
            {
                skillsOptionsLightColor.map((skills) => (
                    <>
                    <div className='transition-all duration-300 bg-white  hover:bg-black text-black hover:text-white md:w-44 md:h-44 xs:w-40 xs:h-40 w-36 h-36 border-black hover:border-white border-2 rounded-md flex flex-col justify-center items-center gap-8'>
                        <Image src={skills.src} className={`w-16 ${skills.id === 5 ? 'rounded-full border-white border-2':''}`} />
                        <span className='font-bold'>{skills.name}</span>
                    </div>
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default Skills