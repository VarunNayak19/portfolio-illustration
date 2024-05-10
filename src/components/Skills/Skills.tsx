import { skillsOptionsLightColor } from '../../constants/constant'
import Image from '../Image/Image'
import { useTheme } from '../../ThemeContext';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
const Skills = () => {

      //use theme
  const { isDarkMode } = useTheme();
  const [skillsOptionsLightColorState, setskillsOptionsLightColorState] = useState(skillsOptionsLightColor);

  const handleFlipFn = (id:number) => {
    // Map over the array and toggle the isFlipped property of the object with the matching id
    const updatedSkills = skillsOptionsLightColorState.map(skill => ({
        ...skill,
        isFlipped: skill.id === id ? !skill.isFlipped : false
    }));
    // Update the state with the modified array
    setskillsOptionsLightColorState(updatedSkills);
};

  return (
    <div  id='skills' className={`skills-container w-full h-auto lg:pt-24 pt-28 md:px-20 px-4 ${isDarkMode ? 'bg-black': 'bg-white'}`}>
        <div className={`title-section w-full h-auto  mb-16 ${isDarkMode ? 'text-white':'text-black'}`}>
            <span className='w-70 h-56 font-sora font-normal  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>My </span>
            <span className='w-70 h-56 font-sora font-bold  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>Skills</span>
        </div>
        <div className='w-full h-auto  mt-8 mb-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center gap-x-4 gap-y-6 mx-auto'>
            {
                skillsOptionsLightColorState.map((skills) => (
                    <div onMouseEnter={() => {handleFlipFn(skills.id)}} onMouseLeave={() => handleFlipFn(skills.id)}>
                        <ReactCardFlip isFlipped={skills.isFlipped}>
                            <>
                                <div className={`${isDarkMode ? 'border-white': 'border-black'} cursor-pointer transition-all duration-300  md:w-44 md:h-44 xs:w-40 xs:h-40 w-72 aspect-square border-2 rounded-md flex flex-col justify-center items-center gap-8`}>
                                <Image src={skills.src} className={`w-16 ${skills.id === 5 ? 'rounded-full border-white border-2':''}`} />
                                <span className='font-bold'>{skills.name}</span>
                                </div>
                            </>
                            <>
                                <div className={`${isDarkMode ? 'border-white': 'border-black'} cursor-pointer transition-all duration-300 md:w-44 md:h-44 xs:w-40 xs:h-40 w-72 aspect-square   border-2 rounded-md flex flex-col justify-start items-start gap-4 p-4`}>
                                    <div className='flex gap-2 items-center'>
                                        <Image src={skills.src} className={`w-6 ${skills.id === 5 ? 'rounded-full border-white border-2':''}`} />
                                        <span className={`${isDarkMode ? 'text-white':'text-black'} font-bold text-base`}>{skills.name}</span>
                                    </div>
                                    <div className={`${isDarkMode ? 'text-white':'text-black'} font-normal text-xs text-left`}>
                                        {skills.description}
                                    </div>
                                    <a href={skills.link} target='_blank' className={`${isDarkMode ? 'text-white':'text-black'} font-bold text-xs text-left hover:underline`}>
                                        To know more
                                    </a>
                                </div>
                            </>
                        </ReactCardFlip>
                    </div>
              
                ))
            }
        </div>
    </div>
  )
}

export default Skills