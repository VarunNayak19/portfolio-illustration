import { useTheme } from '../../ThemeContext';
import Image from '../Image/Image';
import bannerImage from "../../assets/about-me-banner.svg";
import { aboutMe } from '../../constants/constant';
const About = () => {
    //use theme
    const { isDarkMode } = useTheme();
    return (
        <div id='about' className={`pb-6 about-me-container flex md:flex-row flex-col md:gap-20 gap-8 md:px-20 px-4  lg:pt-24 pt-28 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <div className={`image-section md:w-2/5 w-full h-auto ${isDarkMode ? 'inverted-css' : ''}`}>
                <Image src={bannerImage} className='w-full h-auto' />
            </div>
            <div className={`content-section md:w-3/5 w-full`}>
                <div className={`title-section w-full h-auto text-left mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <span className='w-70 h-56 font-sora font-normal  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>About </span>
                    <span className='w-70 h-56 font-sora font-bold  xs:text-[48px] text-4xl leading-56 tracking-tighter flex-none order-0'>Me</span>
                </div>
                <div>
                    {
                        aboutMe.map((about) => (
                            <>
                                <div key={about.id} className='w-full h-auto text-left font-normal text-sm my-4'>
                                    {about.content}
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About