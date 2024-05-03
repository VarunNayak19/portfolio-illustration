import icon1 from "../assets/reactjs.svg";
import icon2 from "../assets/angular.svg";
import icon3 from "../assets/sass.svg";
import icon4 from "../assets/tailwindcss.svg"
import icon5 from "../assets/nextjs2.svg"
import icon6 from "../assets/git.svg"
import icon7 from "../assets/nodejs.svg"
import icon8 from "../assets/mongodb.svg"
import expIcon1 from "../assets/spire.png"
import expIcon2 from "../assets/robosoft-logo-png.png"

//light
import lightIcon1 from "../assets/light-icons/reactjs.svg";
import lightIcon2 from "../assets/light-icons/angular.svg";
import lightIcon3 from "../assets/light-icons/sass.svg";
import lightIcon4 from "../assets/light-icons/tailwindcss.svg"
import lightIcon5 from "../assets/light-icons/nextjs2.svg"
import lightIcon6 from "../assets/light-icons/git.svg"
import lightIcon7 from "../assets/light-icons/nodejs.svg"
import lightIcon8 from "../assets/light-icons/mongodb.svg"
import lightIcon9 from "../assets/light-icons/js.svg"
import lightIcon10 from "../assets/light-icons/typescript.svg"
import lightIcon11 from "../assets/light-icons/materialui.svg"
import lightIcon12 from "../assets/light-icons/headlessui.svg"

import utimf from "../assets/utimf.png"
import nike from "../assets/nike.jpg"
import roomtoread from '../assets/room-to-read-png.png'
import virtuallearn from '../assets/virtual_learn.svg'
import tasty from '../assets/tast.svg'
import carhub from '../assets/carlogo.svg'

export const navOptions = [
    { id: 1, name: "Skills" , href:'skills' },
    { id: 2, name: "Experience", href:'experience' },
    { id: 3, name: "About", href:'about' },
    { id: 4, name: "Projects", href:'projects' },
    { id: 5, name: "Contact", href:'contact' },
];

export const skillsOptions = [
    { id: 1, name: "ReactJS", src: icon1 },
    { id: 2, name: "Angular", src: icon2 },
    { id: 3, name: "SASS/SCSS", src: icon3 },
    { id: 4, name: "Tailwind CSS", src: icon4 },
    { id: 5, name: "NextJS", src: icon5 },
    { id: 6, name: "Git", src: icon6 },
    { id: 7, name: "NodeJS", src: icon7 },
    { id: 8, name: "MongoDB", src: icon8 },
    { id: 9, name: "MongoDB", src: icon8 },
    { id: 10, name: "MongoDB", src: icon8 },
    { id: 11, name: "MongoDB", src: icon8 },
    { id: 12, name: "MongoDB", src: icon8 },
];

export const skillsOptionsLightColor = [
    { id: 1, name: "ReactJS", src: lightIcon1 },
    { id: 2, name: "Angular", src: lightIcon2 },
    { id: 3, name: "SASS/SCSS", src: lightIcon3 },
    { id: 4, name: "Tailwind CSS", src: lightIcon4 },
    { id: 5, name: "NextJS", src: lightIcon5 },
    { id: 6, name: "Git", src: lightIcon6 },
    { id: 7, name: "NodeJS", src: lightIcon7 },
    { id: 8, name: "MongoDB", src: lightIcon8 },
    { id: 9, name: "JavaScript", src: lightIcon9 },
    { id: 10, name: "TypeScript", src: lightIcon10 },
    { id: 11, name: "Material UI", src: lightIcon11 },
    { id: 12, name: "Headless UI", src: lightIcon12 },
]

export const experienceOptions = [
    {
        id: 1,
        name: 'Associate Software Engineer at Robosoft Technologies',
        src: expIcon2,
        startDate: 'Sept 2023',
        endDate: 'Present',
        content: 'Focused on frontend development for UTI Mutual Funds & Corporate portals, using Angular and SCSS. Spearheaded a proof of concept for UPI payments on mobile web. Continuously upskilling in Next.js and Angular to bolster proficiency in dynamic web app development.'
    },
    {
        id: 2,
        name: 'Trainee Software Engineer at Robosoft Technologies',
        src: expIcon2,
        startDate: 'Aug 2022',
        endDate: 'Sept 2023',
        content: 'Contributed to the frontend development for Room To Read, a global NGO, using ReactJs. Contributed to diverse projects including a food delivery website and a Weather Forecast site, honing skills in ReactJs and SCSS.'
    },
    {
        id: 3,
        name: 'Intern at SPIRE Lab, IISc, Bangalore',
        src: expIcon1,
        startDate: 'May 2021',
        endDate: 'July 2021',
        content: 'Contributed to data collection, text scraping tasks, and the implementation of a Bhojpuri Hindi End to End ASR model at SPIRE LAB, IISc Bangalore. Participated in the MUCS conference, gaining exposure to academic discourse.'
    },
]

export const aboutMe = [
    {
        id: 1,
        content: "As an adept Software Engineer from Udupi, Karnataka, my expertise lies in frontend development, specifically in ReactJS and Angular. At Robosoft Technologies, I contributed significantly to projects like the UTI Mutual Funds website and Room to Read platform, mastering both frontend frameworks and backend technologies like Node.js with MongoDB. With a keen eye for innovation, I continuously seek to expand my skills, currently focusing on frameworks like NextJS to stay ahead in the industry."
    },
    {
        id: 2,
        content: "Beyond my professional endeavors, I am a versatile individual with diverse interests and achievements. Alongside coding, I find joy in storytelling and poetry, expressing my creativity beyond the screen. Furthermore, my passion for sports extends beyond leisure, with notable achievements in national-level events in karate and chess, where I've secured medals and recognition. Embracing a holistic lifestyle, I also prioritize yoga for physical and mental well-being."
    },
    {
        id: 3,
        content: "In summary, I am a driven Software Engineer with a passion for innovation and continuous learning. Through my expertise in frontend development and a diverse range of interests, including creative pursuits and sports, I bring a well-rounded perspective to every endeavor. With a commitment to excellence and a thirst for growth, I am ready to make impactful contributions to collaborative projects, driven by a desire to leave a lasting mark in both technology and life."
    }
]

export const projectData = [
    {
        id:'01',
        github: '',
        deploy: '',
        githubFlag: false,
        deployFlag: false,
        title: 'UTI Mutual Funds',
        description: ' Contributed in the development of the UTI Mutual Fund website using Angular and SCSS. UTI AMC is one of the largest asset managers in the country with a total Asset Under Management of INR 15.56 lakh crore and the investment manager to UTI Mutual Fund schemes.',
        image:utimf,
        className:''
    },
    {
        id:'02',
        github: 'https://github.com/VarunNayak19/nikeoffice',
        deploy: 'https://nikestores.netlify.app/',
        githubFlag: true,
        deployFlag: true,
        title: 'Nike Clone Website',
        description: 'Developed a Nike-inspired e-commerce website using React.js and Tailwind CSS, implementing Redux for state management and CRUD methods for seamless cart functionality. Utilized dummy data to replicate real-world scenarios',
        image:nike,
        className:''
    },
    {
        id:'03',
        github: '',
        deploy: '',
        githubFlag: false,
        deployFlag: false,
        title: 'Room to Read',
        description: 'Contributed in the development of the Room to Read Website using React.js and SCSS. Room to Read is a global non-profit organization headquartered in San Francisco, California. The organization focuses on working in collaboration with local communities, partner organizations and governments to improve literacy and gender equality in education.',
        image:roomtoread,
        className:'md:p-0 sm:py-24 py-20 bg-white'
    },
    {
        id:'04',
        github: '',
        deploy: '',
        githubFlag: false,
        deployFlag: false,
        title: 'Virtual Learn - E learning website',
        description: 'Created a dynamic virtual learning e-learning website using ReactJS, combining interactive user interfaces with CSS for a visually engaging online learning experience. Collaborated with a cross-functional team to successfully deliver this cutting-edge educational platform.',
        image:virtuallearn,
        className:'md:p-0 sm:py-24 py-20 bg-[#092963]'
    },
    {
        id:'05',
        github: '',
        deploy: 'https://tastytrailhotel.netlify.app/',
        githubFlag: false,
        deployFlag: true,
        title: 'Restaurant Website',
        description: 'Created a dynamic restaurant website featuring restaurant details, menu listings, and a table booking system. Developed using React.js for the frontend, SCSS for styling, and Node.js with Express and MongoDB for backend functionality. Implemented a table booking feature to enhance user experience and streamline reservation management.',
        image:tasty,
        className:'p-16 bg-white'
    },
    {
        id:'06',
        github: '',
        deploy: 'https://tastytrailhotel.netlify.app/',
        githubFlag: false,
        deployFlag: true,
        title: 'CarHub - Next.js Car Rental Service',
        description: 'Developed CarHub, a comprehensive car rental service website utilizing Next.js framework for efficient server-side rendering and seamless user experience. Leveraged open-source APIs for extensive car listing, ensuring a wide range of options for users. Implemented intuitive booking and confirmation features using Node.js, integrating Nodemailer for streamlined communication with users.',
        image:carhub,
        className:'bg-white p-8 sm:py-48 py-36 md:py-0'
    },
]