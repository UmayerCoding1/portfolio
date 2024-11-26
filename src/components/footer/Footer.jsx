import React from 'react';
import logo from './../../assets/logo.png';
import { FaLinkedin as Linkedin } from "react-icons/fa";
import {  FaGithub as GitHub } from "react-icons/fa6";
import { FaFacebook as FaceBook } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='mt-20 mb-20 h-[50vh] border-t-4 flex flex-col items-center p-5'>
            <img className='w-32' src={logo} alt="" />
            <p className='text-xs mt-2'>Copyright © $2024 - All right reserved</p>

            <div className='my-10 flex items-center gap-4'>
                <span className='block w-32 h-[2px] bg-gray-600'></span>
                <a href="https://www.linkedin.com/in/umayer-hossain-a4b8052b1/" target="_blank">
                   <button className='text-2xl lg:text-lg '><Linkedin/></button>
                </a>

                <a href="https://github.com/UmayerCoding1" target="_blank">
                   <button className='text-2xl lg:text-lg '><GitHub/></button>
                </a>

                <a href="https://www.facebook.com/umayer.rana.1" target="_blank">
                   <button className='text-2xl lg:text-lg '><FaceBook/></button>
                </a>
                <span className='block w-32 h-[2px] bg-gray-600'></span>
            </div>
        </footer>
    );
};

export default React.memo(Footer);