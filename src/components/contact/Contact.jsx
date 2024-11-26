import React from 'react';
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as GitHub } from "react-icons/fa6";
import { FaFacebook as FaceBook } from "react-icons/fa";
import { RiMailSendLine as SendEmail } from "react-icons/ri";
import drow from './../../assets/drow.png'
const Contact = () => {
    return (
        <div id='contact' className=' mt-20 lg:mt-0  mb-10 relative  lg:flex'>
            <div className='lg:w-1/2  '>
              <h1 className='text-8xl'>Want to Start <br /> a new project?  <span className='text-lg'>Or just say hello.</span></h1>
              
            </div>

            <div className='lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center'>
                 <h2 className='text-2xl underline text-gray-600'>umayerhossain.dev@gmail.com</h2>


                 <div className='my-10 flex gap-2'>
                   <a href="https://www.linkedin.com/in/umayer-hossain-a4b8052b1/" target="_blank"> 
                   <button className='flex gap-2 items-center text-xl'><Linkedin/> <span className='text-xs'>Linkedin</span></button>
                   </a>
                    
                   <a href="https://github.com/UmayerCoding1" target="_blank"> 
                   <button className='flex gap-2 items-center text-xl'><GitHub/> <span className='text-xs'>Github</span></button>
                   </a>
                    
                   <a href="https://www.facebook.com/umayer.rana.1" target="_blank"> 
                   <button className='flex gap-2 items-center text-xl'><FaceBook/> <span className='text-xs'>Facebook</span></button>
                   </a>
                 </div>


                 <div className='mt-5 lg:mt-10'>
                    <h2 className='text-3xl '>Stay in Touch</h2>
                    <input className='outline-none w-96 h-14 bg-transparent  border-b-2 border-[#000]' type="text" placeholder='Say hello!'/> <br />

                    <button className='p-2 border border-black flex items-center mt-10'><SendEmail/> Send Msg</button>
                 </div>
            </div>

            <img className='w-10 absolute top-[-40px]' src={drow} alt="" />
            <img className='w-10 absolute top-[0px] right-0' src={drow} alt="" />
            <img className='w-10 absolute bottom-0  right-0' src={drow} alt="" />
            <img className='w-10 absolute bottom-1/2 rotate-90  right-10' src={drow} alt="" />
            <img className='w-10 absolute bottom-0  right-0' src={drow} alt="" />
        </div>
    );
};

export default React.memo(Contact);