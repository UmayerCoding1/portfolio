import React from 'react';
import { IoMdHome as HomeIcon } from "react-icons/io";
import { FaUserTie as AboutIcon } from "react-icons/fa";
import { MdDashboard  as SkillIcon} from "react-icons/md";
import { IoLayersSharp as ProjectIcon} from "react-icons/io5";
import { IoMdBook as BlogIcon} from "react-icons/io";
import { MdOutlineContactMail as ContactIcon } from "react-icons/md";

const Navbar = () => {
    return (
        <div className=' relative'>
            <div className='w-full lg:w-[530px] h-20 bg-[#0d5469] rounded-xl lg:rounded-[200px] z-10 fixed lg:left-1/3 bottom-5  flex items-center justify-center '>
               <ul className='flex '>

                <a href="#">
                <li className='ml-4 lg:ml-10 text-xl text-white relative hover:bg-[#242C36] p-1 px-3 rounded-lg group '><HomeIcon/>
                 <span className='absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Home</span>
                </li>
                </a>

                <a href="#about">
                <li className='ml-4 lg:ml-10 text-xl text-white relative hover:bg-[#242C36] p-1 px-3 rounded-lg group '><AboutIcon/>
                 <span className='absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100'>About</span>
                </li>
                </a>

                <a href="#skill">
                <li className='ml-4 lg:ml-10 text-xl text-white relative hover:bg-[#242C36] p-1 px-3 rounded-lg group '><SkillIcon/>
                 <span className='absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Skill</span>
                </li>
                </a>

                <a href="#project">
                <li className='ml-4 lg:ml-10 text-xl text-white relative hover:bg-[#242C36] p-1 px-3 rounded-lg group '><ProjectIcon/>
                 <span className='absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Project</span>
                </li>
                </a>

                <a href="#blog">
                <li className='ml-4 lg:ml-10 text-xl text-white relative hover:bg-[#242C36] p-1 px-3 rounded-lg group '><BlogIcon/>
                 <span className='absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Blog</span>
                </li>
                </a>

                <a href="#contact">
                <li className='ml-4 lg:ml-10 text-xl mr-10 text-white relative hover:bg-[#242C36] p-1 px-3 rounded-lg group '><ContactIcon/>
                 <span className='absolute text-xs top-[-25px] bg-[#1F2937] text-white p-1 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Contact</span>
                </li>
                </a>
               
               </ul>
            </div>
        </div>
    );
};

export default React.memo(Navbar);